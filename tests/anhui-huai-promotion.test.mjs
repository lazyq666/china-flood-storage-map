import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {wgs84ToGcj02,gcj02ToWgs84}=require('../core.js');
const root=new URL('../',import.meta.url),context={window:{}};
vm.runInNewContext(fs.readFileSync(new URL('data/location-boundaries.js',root),'utf8'),context);
const payload=JSON.parse(JSON.stringify(context.window.FLOOD_STORAGE_LOCATION_BOUNDARIES));
const manifest=JSON.parse(fs.readFileSync(new URL('docs/anhui-huai-boundary-promotion.json',root),'utf8'));
const hash=v=>createHash('sha256').update(JSON.stringify(v)).digest('hex');
const polygons=g=>g.type==='Polygon'?[g.coordinates]:g.coordinates;
function inside(p,r){let result=false;for(let i=0,j=r.length-1;i<r.length;j=i++){const a=r[i],b=r[j];if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])result=!result;}return result;}
const contains=(g,p)=>polygons(g).some(x=>inside(p,x[0])&&!x.slice(1).some(h=>inside(p,h)));
const display=b=>({type:b.geometryType,coordinates:b.geometryType==='Polygon'?b.polygonsGCJ02[0]:b.polygonsGCJ02});
function walk(a,b){if(typeof a[0]==='number'){const p=wgs84ToGcj02(b);assert.ok(Math.abs(p[0]-a[0])<1e-8&&Math.abs(p[1]-a[1])<1e-8);return;}assert.equal(a.length,b.length);a.forEach((v,i)=>walk(v,b[i]));}

test('all 13 displayed boundaries retain the accepted geometry including holes and disconnected land',()=>{
 assert.equal(manifest.zones.length,13);assert.equal(manifest.zones.filter(z=>z.outerRedrawn).length,7);
 for(const row of manifest.zones){const b=payload.zones[row.name],g=display(b);assert.equal(hash(g),row.displayGeometrySha256,row.name);assert.equal(hash({type:b.samplingGeometry.type,coordinates:b.samplingGeometry.coordinates}),row.samplingGeometrySha256,row.name);walk(g.coordinates,b.samplingGeometry.coordinates);assert.equal(b.humanReviewStatus,'accepted');assert.equal(b.fieldVerified,false);assert.equal(b.legalBoundary,false);assert.equal(b.displayAreaScope,'land-excluding-visible-permanent-water');assert.equal(b.method,'user-approved-anhui-huai-land-boundary');assert.equal(b.waterExclusion.componentCount,polygons(g).length);assert.equal(b.waterExclusion.holeCount,polygons(g).reduce((n,p)=>n+p.length-1,0));}
});
test('promotion preserves the other 84 geometries and removes private source metadata',()=>{
 const untouched=Object.entries(payload.zones).filter(([n])=>!manifest.promotedNames.includes(n));assert.equal(untouched.length,84);assert.equal(hash(untouched),manifest.unrelatedZonesSha256);assert.equal(hash(untouched.map(([n,z])=>[n,z.samplingGeometry])),manifest.unrelatedGeometrySha256);
 const actual=Object.values(payload.zones).reduce((a,b)=>(a[b.quality]=(a[b.quality]||0)+1,a),{});assert.deepEqual(payload.qualityCounts,actual);assert.equal(actual['human-reviewed-user-approved'],43);
});
test('all promoted labels are on land in both display and sampling coordinate systems',()=>{
 for(const n of manifest.promotedNames){const b=payload.zones[n],p=[b.lng,b.lat];assert.ok(contains(display(b),p),n);assert.ok(contains(b.samplingGeometry,gcj02ToWgs84(p)),n);}
});
test('lake interiors and the wrong neighboring geographic areas stay excluded',()=>{
 for(const [n,p]of [['城西湖',[116.20,32.355]],['城东湖',[116.405,32.364]],['瓦埠湖',[116.906,32.454]],['董峰湖',[116.599333,32.595266]],['荆山湖',[117.22,32.85]],['老汪湖',[117.485475,33.901413]]])assert.equal(contains(display(payload.zones[n]),p),false,n);
 assert.ok(contains(display(payload.zones['寿西湖']),[116.63,32.54]));assert.ok(contains(display(payload.zones['董峰湖']),[116.705,32.65]));
 const east=payload.zones['城东湖'];assert.equal(east.geometryType,'MultiPolygon');assert.equal(east.polygonsGCJ02.length,2);
});
test('detail evidence describes the accepted land version and preserves other regions',()=>{
 const c={window:{}};vm.runInNewContext(fs.readFileSync(new URL('data/location-evidence.js',root),'utf8'),c);const evidence=JSON.parse(JSON.stringify(c.window.FLOOD_STORAGE_LOCATION_EVIDENCE));
 for(const name of manifest.promotedNames){const e=evidence.zones[name];assert.equal(e.reviewedAt,'2026-09-22');assert.equal(e.fieldVerified,false);assert.match(e.conclusion.reasoningSteps[1].detail,/内部水面孔洞/);assert.equal(e.conclusion.reasoning,payload.zones[name].basis);}
 assert.equal(hash(Object.entries(evidence.zones).filter(([n])=>!manifest.promotedNames.includes(n))),manifest.unrelatedEvidenceSha256);
 assert.equal(evidence.zones['老汪湖'].officialMap.available,true);assert.equal(evidence.zones['老汪湖'].officialMap.usableForLocation,false);
 assert.match(evidence.zones['董峰湖'].conclusion.positionText,/焦岗湖东侧/);
});

test('public map data contains no private conversation source links',()=>{
 for(const f of ['data/location-boundaries.js','data/location-evidence.js'])assert.doesNotMatch(fs.readFileSync(new URL(f,root),'utf8'),/https?:\/\/chatgpt\.com\/(?:g\/[^\s"'<>]*\/c\/|c\/)/i);
});
