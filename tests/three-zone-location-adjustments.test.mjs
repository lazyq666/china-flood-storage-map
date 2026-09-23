import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { gcj02ToWgs84 } = require('../core.js');
const source = await readFile(new URL('../data/location-boundaries.js', import.meta.url), 'utf8');
const context = { window: {} };
vm.runInNewContext(source, context);
const zones = context.window.FLOOD_STORAGE_LOCATION_BOUNDARIES.zones;

function inside(point, ring) {
  let result = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[i];
    const b = ring[j];
    if ((a[1] > point[1]) !== (b[1] > point[1])
      && point[0] < (b[0] - a[0]) * (point[1] - a[1]) / (b[1] - a[1]) + a[0]) result = !result;
  }
  return result;
}

function polygons(zone) {
  const geometry = zone.samplingGeometry;
  return geometry.type === 'MultiPolygon' ? geometry.coordinates : [geometry.coordinates];
}

test('three revised ranges retain honest precision and valid map coordinates', () => {
  for (const name of ['兰沟洼', '南四湖湖东', '宁晋泊']) {
    const zone = zones[name];
    const components = polygons(zone);
    assert.equal(zone.estimatedBoundary, true, name);
    assert.equal(zone.legalBoundary, false, name);
    assert.equal(zone.humanReviewStatus, 'pending', name);
    assert.equal(zone.quality, 'source-guided-hypothesis', name);
    assert.equal(zone.samplingGeometry.coordinateSystem, 'WGS84', name);
    assert.ok(Math.abs(zone.areaRatio - 1) < 0.1, name);
    for (const [index, polygon] of components.entries()) {
      const ring = polygon[0];
      assert.deepEqual([...ring[0]], [...ring.at(-1)], `${name} ${index} closure`);
      const displayRing = zone.polygonsGCJ02?.[index]?.[0] || zone.path;
      assert.equal(displayRing.length, ring.length, `${name} ${index} point count`);
      for (let i = 0; i < ring.length; i++) {
        const converted = gcj02ToWgs84(displayRing[i]);
        assert.ok(Math.hypot(converted[0] - ring[i][0], converted[1] - ring[i][1]) < 1e-6, `${name} ${index} coordinate conversion`);
      }
    }
    const label = gcj02ToWgs84([zone.lng, zone.lat]);
    assert.ok(components.some(polygon => inside(label, polygon[0])), `${name} label inside`);
  }
});

test('three ranges express the supplied geographic relationships', () => {
  const langou = zones['兰沟洼'].samplingGeometry.coordinates[0];
  assert.ok(Math.max(...langou.map(p => p[1])) > 39.4);
  assert.ok(Math.min(...langou.map(p => p[1])) < 39.1);

  const hudong = zones['南四湖湖东'];
  assert.equal(hudong.samplingGeometry.type, 'MultiPolygon');
  assert.equal(hudong.samplingGeometry.coordinates.length, 3);
  assert.equal(hudong.polygonsGCJ02.length, 3);
  const lakePoints = [[116.64472, 35.22472], [116.8, 35.1], [117.24472, 34.59917]];
  for (const point of lakePoints) {
    assert.ok(!polygons(hudong).some(polygon => inside(point, polygon[0])), `lake reference ${point}`);
  }
  assert.ok(inside([116.71732, 35.20076], hudong.samplingGeometry.coordinates[0][0]), '鲁桥镇陆侧参照');
  assert.ok(inside([117.256, 34.7029], hudong.samplingGeometry.coordinates[2][0]), '郗山南端参照');

  const ningjin = zones['宁晋泊'];
  assert.ok(ningjin.geometryAreaSqKm > 900);
  assert.equal(ningjin.referenceAreaSqKm, 1034.82);
  assert.ok(Math.min(...ningjin.samplingGeometry.coordinates[0].map(p => p[1])) < 37.27);
});
