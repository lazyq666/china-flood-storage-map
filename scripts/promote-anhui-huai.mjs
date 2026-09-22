#!/usr/bin/env node
// Consume a locally retained, accepted review artifact. Do not publish that input.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require=createRequire(import.meta.url);
const {gcj02ToWgs84}=require('../core.js');
const [input,baselineFile,target=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')]=process.argv.slice(2);
if(!input||!baselineFile) throw new Error('Usage: node scripts/promote-anhui-huai.mjs <accepted-candidates.json> <review-baseline.json> [target-root]');
const expected=['蒙洼','城西湖','城东湖','瓦埠湖','南润段','邱家湖','姜唐湖','寿西湖','董峰湖','汤渔湖','荆山湖','花园湖','老汪湖'];
const hash=value=>createHash('sha256').update(typeof value==='string'?value:JSON.stringify(value)).digest('hex');
const candidateText=fs.readFileSync(input,'utf8'),candidate=JSON.parse(candidateText),baseline=JSON.parse(fs.readFileSync(baselineFile,'utf8'));
if(candidate.version!=='2026-09-22-boundary-v3'||candidate.coordinateSystem!=='GCJ-02'||!candidate.reviewOnly)throw new Error('Unexpected review version or coordinates');
if(candidate.features.length!==13||new Set(candidate.features.map(f=>f.properties.name)).size!==13||expected.some(n=>!candidate.features.some(f=>f.properties.name===n)))throw new Error('Unexpected promotion scope');
const filename=path.join(target,'data/location-boundaries.js'),source=fs.readFileSync(filename,'utf8'),context={window:{}};
vm.runInNewContext(source,context);const payload=JSON.parse(JSON.stringify(context.window.FLOOD_STORAGE_LOCATION_BOUNDARIES));
const before=structuredClone(payload.zones),approvedAt='2026-09-22';
const polygons=g=>g.type==='Polygon'?[g.coordinates]:g.type==='MultiPolygon'?g.coordinates:(()=>{throw new Error('Polygon geometry required')})();
const convert=c=>typeof c[0]==='number'?gcj02ToWgs84(c):c.map(convert);
const points=c=>typeof c[0]==='number'?[c]:c.flatMap(points);
function ringArea(ring){let sum=0;for(let i=1;i<ring.length;i++){const [a,b]=ring[i-1].map(x=>x*Math.PI/180),[c,d]=ring[i].map(x=>x*Math.PI/180);sum+=(c-a)*(2+Math.sin(b)+Math.sin(d));}return Math.abs(sum)*6371.0088**2/2;}
const area=g=>polygons(g).reduce((s,p)=>s+ringArea(p[0])-p.slice(1).reduce((s,h)=>s+ringArea(h),0),0);
const distance=(a,b)=>{const rad=Math.PI/180,dlat=(b[1]-a[1])*rad,dlon=(b[0]-a[0])*rad,v=Math.sin(dlat/2)**2+Math.cos(a[1]*rad)*Math.cos(b[1]*rad)*Math.sin(dlon/2)**2;return 12742.0176*Math.atan2(Math.sqrt(v),Math.sqrt(1-v));};
function insideRing(p,r){let yes=false;for(let i=0,j=r.length-1;i<r.length;j=i++){const a=r[i],b=r[j];if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])yes=!yes;}return yes;}
const rows=[];
for(const f of candidate.features){
 const name=f.properties.name,p=f.properties,b=payload.zones[name];
 if(!b||JSON.stringify(b.samplingGeometry)!==JSON.stringify(baseline[name]?.samplingGeometry))throw new Error(`Review baseline no longer matches: ${name}`);
 const display=structuredClone(f.geometry),ps=polygons(display);
 for(const poly of ps)for(const ring of poly){if(ring.length<4||JSON.stringify(ring[0])!==JSON.stringify(ring.at(-1)))throw new Error(`Unclosed ring: ${name}`);}
 if(!ps.some(poly=>insideRing(p.label,poly[0])&&!poly.slice(1).some(r=>insideRing(p.label,r))))throw new Error(`Label outside land: ${name}`);
 const wgs={type:display.type,coordinates:convert(display.coordinates)},sqKm=+area(wgs).toFixed(3),reference=p.evidence?.referenceAreaSqKm??b.referenceAreaSqKm;
 const sources=[...new Set([...(p.evidence?.sources||[]).map(s=>s.url),...(b.sourceUrls||[])])];
 const basis=p.evidence?p.evidence.basis.join(' '):name==='城东湖'?'按工程参考图上部、下部橙色地块作局部湖岸配准，保留两组陆地；该展示范围不代表完整蓄洪区。':'沿用此前审阅外缘，扣除可见湖河水面，保留陆地分块和水道开口。';
 const limitations=['not-a-legal-boundary','not-field-verified','visible-water-only','land-silhouette-not-total-storage-area'];
 if(p.redrawn)limitations.push('inferred-landward-segments');
 // Drop superseded reconstruction notes and private workflow references.
 for(const key of ['candidatePath','reviewPath','referenceImage','tracePath','reportPath','runId','reviewFingerprint','anchorSelection','evidenceCount','excludedReferenceAnchors','directionalBoundaries','referenceAreaAssist','envelopeBufferKm','georeference'])delete b[key];
 Object.assign(b,{name:`${name}已验收陆地展示范围`,coordinateSystem:'GCJ-02',lng:p.label[0],lat:p.label[1],labelPointMethod:'largest-land-component-interior-point',radiusKm:Math.max(...points(wgs.coordinates).map(q=>distance(gcj02ToWgs84(p.label),q))),areaSqKm:sqKm,geometryAreaSqKm:sqKm,referenceAreaSqKm:reference,referenceAreaKind:name==='城东湖'?'全区资料值；本次仅显示两组工程陆地，不能直接比较':'资料总面积；与扣除常水面的陆地展示面积口径不同',areaRatio:reference?+(sqKm/reference).toFixed(6):null,areaValidation:'reviewed-land-display-different-area-scope',referenceAreaConflict:null,path:ps[0][0],polygonsGCJ02:ps,method:'user-approved-anhui-huai-land-boundary',quality:'human-reviewed-user-approved',geometryType:display.type,renderMode:'boundary-polygon',overviewMode:'polygon',detailMode:'polygon',constraintMode:'water-excluded-reviewed-land-display',basis,sourceUrls:sources,estimatedLocation:true,estimatedBoundary:true,fieldVerified:false,legalBoundary:false,samplingGeometry:{...wgs,coordinateSystem:'WGS84',derivation:'reviewed-anhui-huai-land-silhouette'},humanReviewStatus:'accepted',reviewedAt:approvedAt,reviewer:'project-owner',boundaryClass:'user-approved-boundary-for-display',hypothesisBoundary:true,displayAreaScope:'land-excluding-visible-permanent-water',waterExclusion:{basis:'visible-map-water',captureDate:'2026-09-22',pixelMetres:p.pixelMetres,excludedAreaSqKm:p.excludedWaterSqKm,componentCount:p.parts,holeCount:p.holes},boundaryReview:{version:candidate.version,acceptedAt:approvedAt,displayGeometrySha256:hash(display),outerRedrawn:Boolean(p.redrawn),limitations,uncertainty:p.evidence?.uncertainty||'外缘沿用此前审阅版本；可见水面排除不覆盖底图未显示的小水体。'}});
 if(p.evidence){b.anchors=p.evidence.anchors.map(a=>({name:a.name,point:a.position,lng:a.position[0],lat:a.position[1],coordinateSystem:'GCJ-02',kind:a.kind,provider:'地图地名定位线索；非实测界址',note:a.note}));b.conclusionPositionText=p.evidence.basis.join(' ');b.directionalBoundaries=p.evidence.basis.map(text=>['方位',text,'资料与人工描绘']);}
 else if(name==='城东湖'){b.anchors=[];b.conclusionPositionText='城东湖常水面上部、下部两组工程陆地展示范围。';}
 rows.push({name,geometryType:display.type,displayGeometrySha256:hash(display),samplingGeometrySha256:hash(wgs),geometryAreaSqKm:sqKm,referenceAreaSqKm:reference,parts:ps.length,holes:ps.reduce((n,x)=>n+x.length-1,0),outerRedrawn:Boolean(p.redrawn)});
}
payload.generatedAt=approvedAt;payload.qualityCounts=Object.values(payload.zones).reduce((a,z)=>(a[z.quality]=(a[z.quality]||0)+1,a),{});
const unrelated=Object.entries(before).filter(([n])=>!expected.includes(n));
for(const [name,record] of unrelated)if(JSON.stringify(record)!==JSON.stringify(payload.zones[name]))throw new Error(`Unrelated change: ${name}`);
if(fs.readFileSync(filename,'utf8')!==source)throw new Error('Concurrent map edit; aborting');
const output=`(function () {\n  "use strict";\n  const payload = ${JSON.stringify(payload,null,2)};\n  window.FLOOD_STORAGE_LOCATION_BOUNDARIES = Object.freeze({ ...payload, zones: Object.freeze(payload.zones) });\n})();\n`;
fs.writeFileSync(filename,output);
const manifest={version:candidate.version,promotedAt:approvedAt,coordinateSystem:'GCJ-02',acceptedCandidateSha256:hash(candidateText),promotedNames:expected,unrelatedZoneCount:unrelated.length,unrelatedGeometrySha256:hash(unrelated.map(([n,z])=>[n,z.samplingGeometry])),unrelatedZonesSha256:hash(unrelated),zones:rows};
fs.mkdirSync(path.join(target,'docs'),{recursive:true});fs.writeFileSync(path.join(target,'docs/anhui-huai-boundary-promotion.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({promoted:rows.length,untouched:unrelated.length,qualityCounts:payload.qualityCounts,bytes:Buffer.byteLength(output)}));

// Keep the public detail panel in sync with the promoted geometry.
const evidenceFile=path.join(target,'data/location-evidence.js');
const evidenceSource=fs.readFileSync(evidenceFile,'utf8'),evidenceContext={window:{}};
vm.runInNewContext(evidenceSource,evidenceContext);
const evidencePayload=JSON.parse(JSON.stringify(evidenceContext.window.FLOOD_STORAGE_LOCATION_EVIDENCE));
for(const f of candidate.features){
 const name=f.properties.name,p=f.properties,b=payload.zones[name],e=evidencePayload.zones[name];
 e.reviewedAt=approvedAt;e.fieldVerified=false;
 const fresh=p.evidence;
 if(fresh){
  const seen=new Set(e.governmentSources.map(s=>s.url));
  for(const s of fresh.sources)if(!seen.has(s.url)){e.governmentSources.push({title:s.title,url:s.url,sourceType:'published-source',supportsLocation:true,locationSummary:'用于河湖、工程或村镇方位核对；不提供完整实测界址。'});seen.add(s.url);}
  e.placeSearch.contextAnchors=fresh.anchors.map((a,i)=>({id:String(i),name:a.name,location:a.position.join(','),anchorKind:'geographic-reference',note:a.note}));
 }
 e.conclusion.positionText=b.conclusionPositionText||e.conclusion.positionText;
 e.conclusion.reasoning=b.basis;
 e.conclusion.reasoningSteps=[
  {stage:'source-verification',title:'水系与位置依据',outcome:'已验收',detail:b.basis,references:(fresh?.sources||e.governmentSources.slice(0,2)).map((s,i)=>({url:s.url,label:`来源 ${i+1}`}))},
  {stage:'decision',title:'陆地范围绘制',outcome:'已验收',detail:`本轮展示 ${p.parts} 组陆地，保留 ${p.holes} 个内部水面孔洞及连通河道开口；图示陆地面积约 ${b.geometryAreaSqKm.toFixed(2)} 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。`,references:[]},
  {stage:'decision',title:'范围限制',outcome:'已标注',detail:b.boundaryReview.uncertainty+' 本轮确认用于位置理解，不代表法定界线或实地测绘。',references:[]}
 ];
 if(name==='老汪湖')e.officialMap={available:true,usableForLocation:false,title:'老汪湖蓄滞洪区控制运用预案（征求意见稿）第 4 页风险图',url:fresh.sources[0].url,publisher:'宿州市水利局',note:'示意风险图用于近似定位，不足以确定精确界线。'};
}
evidencePayload.generatedAt=approvedAt;
evidencePayload.summary.supportingSourceCounts=Object.values(evidencePayload.zones).reduce((o,z)=>{const n=z.governmentSources.filter(s=>s.supportsLocation).length;o[n]=(o[n]||0)+1;return o;},{});
if(fs.readFileSync(evidenceFile,'utf8')!==evidenceSource)throw new Error('Concurrent evidence edit');
fs.writeFileSync(evidenceFile,`(function () {\n  "use strict";\n  const payload = ${JSON.stringify(evidencePayload,null,2)};\n  window.FLOOD_STORAGE_LOCATION_EVIDENCE = Object.freeze({ ...payload, zones: Object.freeze(payload.zones) });\n})();\n`);
manifest.unrelatedEvidenceSha256=hash(Object.entries(evidencePayload.zones).filter(([n])=>!expected.includes(n)));
fs.writeFileSync(path.join(target,'docs/anhui-huai-boundary-promotion.json'),JSON.stringify(manifest,null,2)+'\n');
