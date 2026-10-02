/* =====================================================================
   IMAGE CONFIG — the single source of truth for every image on the site.
   • Replace an image: overwrite the file at its path, keeping the same name.
   • Add/rename an image: change it HERE only (index.html never holds paths).
   • Paths are relative (./images/...) so GitHub Pages project sites work.
   • r = display ratio, fit: 'cover' = cropped to fill, 'contain' = whole artwork visible.
   ===================================================================== */
const IMAGES=(function(){
const B='./images/';
const ROLE={heroMain:['3/5'],heroSecondary:['1/1'],heroDetail:['1/1'],card:['4/3'],cover:['21/9'],concept:['4/3'],research:['4/3'],moodboard:['1/1'],motif:['1/1','contain'],tile:['1/1','contain'],repeat:['1/1','contain'],colourway:['1/1','contain'],fabric:['4/3'],apparel:['3/4','contain'],final:['3/4'],product:['1/1'],graphic:['4/3','contain'],ecommerce:['3/4','contain'],brief:['4/3'],process:['4/3'],outcome:['4/3']};
const m=(file,label,role,ratio)=>({src:B+file,label,role,r:ratio||ROLE[role][0],fit:ROLE[role][1]||'cover',pos:'50% 50%'});
const n2=i=>String(i+1).padStart(2,'0');
const PR=[['earthform','Earthform','textile'],['urban-geometry','Urban Geometry','textile'],['botanical-rhythm','Botanical Rhythm','textile'],['essential-form','Essential Form','apparel'],['ecommerce-apparel','E-commerce Apparel','ecommerce'],['visual-campaign','Visual Campaign','graphic']];
const GR=[['workshop-poster','Workshop Poster','3/4'],['marketing-poster','Marketing Poster','4/5'],['sale-banner','Sale Banner','16/9'],['social-media-set','Social Media Set','1/1'],['promo-creative','Promo Creative','4/3'],['campaign-visual','Campaign Visual','3/4']];
const EC=[['original-product','Original product image'],['edited-image','Edited image'],['colour-variation','Colour variation'],['final-listing','Final marketplace listing']];
const cards=(dir,pre,ok)=>Object.fromEntries(PR.filter(p=>ok(p[2])).map(p=>[p[0],m(`${dir}/${pre}-${p[0]}.jpg`,`${p[1]} — Card`,'card')]));
const seq=(id,T,lab,name,n,role)=>Array.from({length:n},(_,i)=>m(`projects/${id}/${id}-${name}-${n2(i)}.jpg`,`${T} — ${lab} ${i+1}`,role));
const flowDef=[['motif','Motif','motif'],['pattern-tile','Pattern Tile','tile'],['seamless-repeat','Seamless Repeat','repeat'],['colourway','Colourway','colourway'],['fabric','Fabric','fabric'],['final-product','Final Product','product']];
const projects={};
PR.forEach(([id,T,k])=>{
 const S=k==='textile'?{concept:seq(id,T,'Concept','concept',2,'concept'),research:seq(id,T,'Research','research',3,'research'),moodboard:seq(id,T,'Moodboard','moodboard',3,'moodboard'),motif:seq(id,T,'Motif','motif',3,'motif'),flow:flowDef.map(([f,l,r])=>m(`projects/${id}/${id}-flow-${f}.jpg`,`${T} — ${l}`,r)),fabric:seq(id,T,'Fabric mock-up','fabric-mockup',2,'fabric'),apparel:seq(id,T,'Apparel mock-up','apparel-mockup',2,'apparel'),final:seq(id,T,'Final presentation','final-presentation',3,'final')}
 :{brief:seq(id,T,'Brief','brief',2,'brief'),process:seq(id,T,'Process','process',2,'process'),outcome:seq(id,T,'Outcome','outcome',2,'outcome')};
 projects[id]={cover:m(`projects/${id}/${id}-cover.jpg`,`${T} — Cover`,'cover'),sections:S};
});
return{
 home:{hero:{main:m('home/hero/home-hero-main.jpg','Home hero — Main','heroMain'),secondary:m('home/hero/home-hero-secondary.jpg','Home hero — Secondary','heroSecondary'),detail:m('home/hero/home-hero-detail.jpg','Home hero — Detail','heroDetail')}},
 cards:{home:cards('home/selected-work','home-work',()=>true),work:cards('work','work-card',()=>true),textile:cards('textile','textile-card',k=>k==='textile'||k==='apparel')},
 graphic:GR.map(([s,T,r])=>m(`graphic/graphic-${s}.jpg`,`Graphic — ${T}`,'graphic',r)),
 ecommerce:EC.map(([s,T])=>m(`ecommerce/ecommerce-${s}.jpg`,`E-commerce — ${T}`,'ecommerce')),
 projects};
})();
if(typeof window!=='undefined')window.IMAGES=IMAGES;
if(typeof module!=='undefined')module.exports=IMAGES;
