#!/usr/bin/env node

import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { wgs84ToGcj02 } = require('../core.js');
const boundaryUrl = new URL('../data/location-boundaries.js', import.meta.url);
const names = ['洪湖分洪区', '杜家台', '人民大垸', '华阳河', '康山圩'];
const gridSize = 200;

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

function coordinatePoints(value, output = []) {
  if (!Array.isArray(value)) return output;
  if (value.length >= 2 && Number.isFinite(value[0]) && Number.isFinite(value[1])) output.push(value);
  else value.forEach(child => coordinatePoints(child, output));
  return output;
}

function centeredInteriorPoint(geometry) {
  const points = coordinatePoints(geometry.coordinates);
  const xs = points.map(point => point[0]);
  const ys = points.map(point => point[1]);
  const bounds = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
  const middle = [(bounds[0] + bounds[2]) / 2, (bounds[1] + bounds[3]) / 2];
  if (pointInGeometry(middle, geometry)) return middle;

  let nearest;
  for (let row = 0; row <= gridSize; row += 1) {
    for (let column = 0; column <= gridSize; column += 1) {
      const normalized = [column / gridSize, row / gridSize];
      const candidate = [
        bounds[0] + (bounds[2] - bounds[0]) * normalized[0],
        bounds[1] + (bounds[3] - bounds[1]) * normalized[1]
      ];
      if (!pointInGeometry(candidate, geometry)) continue;
      const distance = Math.hypot(normalized[0] - 0.5, normalized[1] - 0.5);
      if (!nearest || distance < nearest.distance) nearest = { point: candidate, distance };
    }
  }
  if (!nearest) throw new Error('Unable to find an interior label point');
  return nearest.point;
}

function objectRange(source, name) {
  const marker = `    ${JSON.stringify(name)}: {`;
  const start = source.indexOf(marker);
  if (start < 0) throw new Error(`Boundary entry not found: ${name}`);
  const openBrace = source.indexOf('{', start);
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = openBrace; index < source.length; index += 1) {
    const character = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === '"') inString = false;
      continue;
    }
    if (character === '"') inString = true;
    else if (character === '{') depth += 1;
    else if (character === '}' && --depth === 0) return { start, end: index + 1 };
  }
  throw new Error(`Unterminated boundary entry: ${name}`);
}

let source = fs.readFileSync(boundaryUrl, 'utf8');
const context = { window: {} };
vm.runInNewContext(source, context);

for (const name of names) {
  const boundary = context.window.FLOOD_STORAGE_LOCATION_BOUNDARIES.zones[name];
  const labelWgs84 = centeredInteriorPoint(boundary.samplingGeometry);
  const [lng, lat] = wgs84ToGcj02(labelWgs84);
  const range = objectRange(source, name);
  const updated = source.slice(range.start, range.end)
    .replace(/"lng": [-\d.]+/, `"lng": ${lng}`)
    .replace(/"lat": [-\d.]+/, `"lat": ${lat}`)
    .replace(/"labelPointMethod": "[^"]+"/, '"labelPointMethod": "bbox-center-nearest-interior-grid"');
  source = source.slice(0, range.start) + updated + source.slice(range.end);
  console.log(`${name}: ${labelWgs84.map(value => value.toFixed(6)).join(', ')}`);
}

fs.writeFileSync(boundaryUrl, source);
