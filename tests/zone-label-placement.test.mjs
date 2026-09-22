import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { gcj02ToWgs84 } = require('../core.js');
const root = new URL('../', import.meta.url);
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(new URL('data/location-boundaries.js', root), 'utf8'), context);
const boundaries = context.window.FLOOD_STORAGE_LOCATION_BOUNDARIES.zones;
const centeredLabels = ['洪湖分洪区', '杜家台', '人民大垸', '华阳河', '康山圩'];

function coordinatePoints(value, output = []) {
  if (!Array.isArray(value)) return output;
  if (value.length >= 2 && Number.isFinite(value[0]) && Number.isFinite(value[1])) output.push(value);
  else value.forEach(child => coordinatePoints(child, output));
  return output;
}

function pointInRing(point, ring) {
  let inside = false;
  for (let index = 0, previous = ring.length - 1; index < ring.length; previous = index, index += 1) {
    const a = ring[index];
    const b = ring[previous];
    if ((a[1] > point[1]) !== (b[1] > point[1])
      && point[0] < (b[0] - a[0]) * (point[1] - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}

function pointInGeometry(point, geometry) {
  const polygons = geometry.type === 'MultiPolygon' ? geometry.coordinates : [geometry.coordinates];
  return polygons.some(polygon => pointInRing(point, polygon[0])
    && !polygon.slice(1).some(ring => pointInRing(point, ring)));
}

test('five corrected overview labels sit inside and near the visual center of their zones', () => {
  for (const name of centeredLabels) {
    const boundary = boundaries[name];
    const geometry = boundary.samplingGeometry;
    const label = boundary.coordinateSystem === 'GCJ-02'
      ? gcj02ToWgs84([boundary.lng, boundary.lat])
      : [boundary.lng, boundary.lat];
    const points = coordinatePoints(geometry.coordinates);
    const xs = points.map(point => point[0]);
    const ys = points.map(point => point[1]);
    const bounds = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
    const normalized = [
      (label[0] - bounds[0]) / (bounds[2] - bounds[0]),
      (label[1] - bounds[1]) / (bounds[3] - bounds[1])
    ];
    const centerDistance = Math.hypot(normalized[0] - 0.5, normalized[1] - 0.5);

    assert.ok(pointInGeometry(label, geometry), `${name}标签必须位于区域内部`);
    assert.ok(centerDistance <= 0.1, `${name}标签偏离视觉中心：${normalized.map(value => value.toFixed(3)).join(', ')}`);
  }
});
