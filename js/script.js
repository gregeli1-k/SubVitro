/* ---- экран загрузки: счётчик идёт по реальной загрузке шрифтов и картинок, но не быстрее ~2.4 с; на 100 штора уезжает вверх ---- */
const LD=(()=>{const el=document.getElementById('ld');if(!el)return{imgs(){}};
const nu=el.querySelector('.ld-n'),root=document.documentElement,rn=(a,b)=>a+Math.random()*(b-a);
let pr=.05,shown=0,nxt=0,end=0;
/* штора уезжает через transform (на видеокарте, без перерасчёта вёрстки) вместе с надписями: «100» и название поднимаются вместе с ней */
const wi=document.createElement('div');wi.className='ld-i';while(el.firstChild)wi.appendChild(el.firstChild);el.appendChild(wi);
const fin=()=>{if(end)return;end=1;const gone=()=>{root.classList.remove('ld');el.remove()};
 if(!el.animate){el.style.transition='transform 1.1s cubic-bezier(.76,0,.18,1)';requestAnimationFrame(()=>{el.style.transform='translateY(-100%)';setTimeout(gone,1200)});return}
 /* дать странице спокойно дорисовать первый кадр под шторой, и только потом начинать движение */
 requestAnimationFrame(()=>requestAnimationFrame(()=>setTimeout(()=>{
  const o={duration:1100,easing:'cubic-bezier(.76,0,.18,1)',fill:'forwards'};
  el.animate({transform:['translateY(0)','translateY(-100%)']},o).onfinish=gone},120)))};
const show=()=>el.classList.add('rd');
Promise.all(['400 32px "Inter Tight"','400 13px "IBM Plex Mono"','500 9px "IBM Plex Sans"'].map(f=>document.fonts.load(f))).catch(()=>0).then(()=>{pr+=.2;show()});
setTimeout(show,700);setTimeout(fin,9000);
(function tk(t){if(end)return;
 if(t>=nxt){const goal=Math.round(Math.min(pr,Math.min(1,t/2400))*100);
  if(goal>shown){shown=Math.min(goal,shown+Math.max(1,Math.round((goal-shown)*rn(.45,1))));nu.textContent=shown;if(shown>=100){setTimeout(fin,260);return}}
  nxt=t+rn(110,230)}
 requestAnimationFrame(tk)})(0);
return{imgs(a){let k=0;pr=Math.max(pr,.3);a.forEach(s=>{const i=new Image();i.onload=i.onerror=()=>{if(++k==a.length){pr=.9;(window.BAKED_||Promise.resolve()).then(()=>pr=1)}else pr+=.62/a.length};i.src=s})}}})();
const NZ="url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1.4 0 0 0 -.38'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>\") 0 0/240px 240px";
const $=(c,p,s,h)=>{const e=document.createElement('div');if(c)e.className=c;if(s)e.style.cssText=s;if(h!=null)e.innerHTML=h;p.appendChild(e);return e};
const W=document.getElementById('w'),O=document.getElementById('o');
let LK=true,FR=0,AW=240,FC=0;

/* ---- матовая плита ---- */
const GL=$('',W,'position:absolute;left:72px;top:96px;width:855px;height:560px;border-radius:8px;overflow:hidden;transform-origin:0 0;background:#a39b86;box-shadow:0 0 0 1px #ffffff80,0 0 0 5px #1b1c1e,0 0 0 7px #2a2b2e,0 0 0 8px #4a4b50,1px 2px 0 9px #0a0a0b,0 18px 40px #0004');
let CS=1.09,OX=0,OY=0;
const deep=$('',GL,'position:absolute;left:0;top:0;width:855px;height:547px;transform-origin:0 0;will-change:transform');
[[110,40,75,60,'#222'],[165,190,40,135,'#2a2a2a'],[50,370,45,100,'#333'],[500,365,190,45,'#222'],[640,120,50,40,'#333'],[775,120,50,45,'#333'],[200,60,40,50,'#999']].forEach(a=>$('',deep,`position:absolute;left:${a[0]}px;top:${a[1]}px;width:${a[2]}px;height:${a[3]}px;background:${a[4]};border-radius:3px`));
const cc=['#c79a3d','#d9d2a8','#b44','#3b7a4a','#6a7fa3','#888','#e2b24a'];
for(let i=0;i<55;i++)$('',deep,`position:absolute;left:${Math.random()*830}px;top:${Math.random()*520}px;width:${8+Math.random()*16}px;height:${8+Math.random()*20}px;background:${cc[i%7]};border-radius:${i%3?2:50}%`);
const PH={
 "acc": "assets/acc.webp",
 "vb": "assets/vb.webp",
 "v": "assets/v.webp",
 "tr": "assets/tr.webp",
 "harp": "assets/harp.webp",
 "clar": "assets/clar.webp",
 "sx1": "assets/sx1.webp",
 "sxr": "assets/sxr.webp",
 "sxb": "assets/sxb.webp",
 "ban": "assets/ban.webp",
 "hf": "assets/hf.webp",
 "sxg": "assets/sxg.webp",
 "hh": "assets/hh.webp",
 "bow": "assets/bow.webp"
};
const AR={"acc": 1.0450643776824033, "vb": 0.7428571428571429, "v": 2.8426395939086295, "tr": 0.9517857142857142, "harp": 0.5071428571428571, "clar": 0.6625, "sx1": 0.3939393939393939, "sxr": 0.48928571428571427, "sxb": 0.3535714285714286, "ban": 1.5469613259668509, "hf": 0.8160714285714286, "sxg": 0.5857142857142857, "hh": 1.5217391304347827, "bow": 0.7232142857142857};
const NZ2=NZ.replace('.85','.012').replace("numOctaves='3'","numOctaves='2'").split('240').join('700');
/* ---- инструменты под стеклом: при каждом заходе — новая случайная композиция ----
   Из seed собирается раскладка: рисунок (дрейф, мозаика, розетка, веер, потоки, подсолнух, калейдоскоп),
   набор, размеры и глубина инструментов. Один рисунок не выпадает два захода подряд.
   ?c=0…6 (или ?c=fan) — закрепить рисунок, ?seed=… — повторить конкретную раскладку. */
const SQ=new URLSearchParams(location.search),KEYS=Object.keys(AR),DG=Math.PI/180;
/* IL[k]: длина по длинной стороне (px), наклон «головы» от вертикали (°), 3-е число 1 — предмет без выраженной оси */
const IL={acc:[220,0,1],ban:[250,0,1],bow:[330,35],clar:[360,-33],harp:[400,4],hf:[230,0,1],hh:[260,0,1],sx1:[290,-4],sxb:[340,-3],sxg:[330,-12],sxr:[340,-14],tr:[230,44],v:[370,-90],vb:[310,27]};
const mulberry=a=>()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const hsh=s=>{let h=2166136261;for(const c of String(s))h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0};
const PN=['drift','mosaic','rosette','fan','streams','sunflower','kaleido'];
const SEED=SQ.has('seed')?hsh(SQ.get('seed')):(Math.random()*4294967296)>>>0;
let PI=0;{const c=SQ.get('c');let last=-1;try{last=+localStorage.getItem('sv-comp')}catch(e){}
 if(c!=null&&c!=='')PI=isNaN(+c)?Math.max(0,PN.indexOf(c)):((+c%PN.length)+PN.length)%PN.length;
 else if(SQ.has('seed'))PI=SEED%PN.length;
 else{const o=PN.map((_,i)=>i).filter(i=>i!==last);PI=o[Math.random()*o.length|0]}
 try{localStorage.setItem('sv-comp',PI)}catch(e){}}
document.documentElement.dataset.comp=PN[PI]+':'+SEED;
const dim=(k,L)=>{const h=L/Math.max(1,AR[k]);return[h*AR[k],h]};
/* резкость/тень/яркость по глубине z (0 — у самого стекла, 1 — на плите) */
const fl2=(z,s)=>{const q=1-z,f=v=>(v*s).toFixed(1);return`drop-shadow(${f(3+q*20)}px ${f(5+q*28)}px ${f(3+q*16)}px #000b) blur(${f(.35+8.5*Math.pow(z,1.4))}px) brightness(${(.72+.4*(1-z)).toFixed(2)}) contrast(${(.8+.2*(1-z)).toFixed(2)}) saturate(.9)`};

/* ---- предметы под стеклом: запечённые спрайты на двух холстах ----
   Раньше каждый из ~80 предметов был отдельным слоем с живым CSS-фильтром (размытие+тень), и видеокарта
   пересчитывала их каждый кадр — отсюда лаги, глитчи и вылеты на телефонах (кончалась видеопамять).
   Теперь каждый предмет один раз «печётся» в картинку с тем же фильтром (в покое, в середине и в фокусе),
   а каждый кадр все предметы рисуются на ОДНОМ холсте под матовым слоем и одном над ним.
   Где браузер не умеет canvas-фильтры (Safari), размытие и тень считаются вручную тем же рецептом. */
const IM={};let BK;const BAKED=new Promise(r=>BK=r);
const IMGS=Promise.all(KEYS.map(k=>new Promise(r=>{const i=new Image();i.onload=i.onerror=r;i.src=PH[k];IM[k]=i})));
const CF=!SQ.has('jsblur')&&(()=>{try{const c=document.createElement('canvas');c.width=c.height=9;const x=c.getContext('2d');x.filter='blur(2px)';x.fillStyle='#fff';x.fillRect(4,4,1,1);return x.getImageData(1,4,1,1).data[3]>0}catch(e){return false}})();
/* гауссово размытие тремя проходами «коробкой» (ch каналов на пиксель, премультиплицированные float) */
function gblur(a,w,h,s,ch){if(s<.35)return;const n=3,wi=Math.sqrt(12*s*s/n+1)|0,wl=wi%2?wi:wi-1,m=Math.round((12*s*s-n*wl*wl-4*n*wl-3*n)/(-4*wl-4)),t=new Float32Array(a.length);
 for(let i=0;i<n;i++){const r=((i<m?wl:wl+2)-1)/2;if(r<1)continue;bxp(a,t,w,h,r,1,ch);bxp(t,a,w,h,r,0,ch)}}
function bxp(s,d,w,h,r,hz,ch){const L=hz?w:h,N=hz?h:w,st=hz?ch:ch*w,ln=hz?ch*w:ch,iv=1/(r+r+1),last=(L-1)*st;
 for(let j=0;j<N;j++){const o=j*ln;for(let c=0;c<ch;c++){const b=o+c,f=s[b],e=s[b+last];let acc=f*(r+1);for(let k=1;k<=r;k++)acc+=s[b+Math.min(L-1,k)*st];
  for(let i=0,p=b;i<L;i++,p+=st){d[p]=acc*iv;acc+=(i+r+1<L?s[b+(i+r+1)*st]:e)-(i-r>=0?s[b+(i-r)*st]:f)}}}}
/* тот же рецепт, что у CSS-фильтра fl2: тень (drop-shadow) → размытие → яркость → контраст → насыщенность.
   Тень мягкая, поэтому считается в уменьшенном в 4 раза виде и потом растягивается — это в десятки раз быстрее */
function jsFilter(x,pw,ph,z,s){const q=1-z,id=x.getImageData(0,0,pw,ph),u=id.data,N=pw*ph,A=new Float32Array(N*4),ox=(3+q*20)*s,oy=(5+q*28)*s,ss=(3+q*16)*s/2;
 for(let i=0,k=0;i<N;i++,k+=4){const al=u[k+3]/255,f=al/255;A[k]=u[k]*f;A[k+1]=u[k+1]*f;A[k+2]=u[k+2]*f;A[k+3]=al}
 const F=ss>6?4:ss>2.5?2:1,sw=Math.ceil(pw/F),sh=Math.ceil(ph/F),S=new Float32Array(sw*sh);
 for(let y=0;y<ph;y++){const ry=(y/F|0)*sw;for(let xx=0;xx<pw;xx++)S[ry+(xx/F|0)]+=A[(y*pw+xx)*4+3]}
 const nf=.733/(F*F);for(let i=0;i<S.length;i++)S[i]*=nf;gblur(S,sw,sh,ss/F,1);
 for(let y=0;y<ph;y++){const fy=(y-oy)/F-.5,y0=Math.floor(fy),ty=fy-y0;for(let xx=0;xx<pw;xx++){const fx=(xx-ox)/F-.5,x0=Math.floor(fx),tx=fx-x0;
  const g=(X,Y)=>X<0||Y<0||X>=sw||Y>=sh?0:S[Y*sw+X],sa=(g(x0,y0)*(1-tx)+g(x0+1,y0)*tx)*(1-ty)+(g(x0,y0+1)*(1-tx)+g(x0+1,y0+1)*tx)*ty;
  if(sa>0){const k=(y*pw+xx)*4;A[k+3]+=sa*(1-A[k+3])}}}
 gblur(A,pw,ph,(.35+8.5*Math.pow(z,1.4))*s,4);
 const br=.72+.4*(1-z),ct=.8+.2*(1-z),sa=.9,m=[.2126+.7874*sa,.7152-.7152*sa,.0722-.0722*sa,.2126-.2126*sa,.7152+.2848*sa,.0722-.0722*sa,.2126-.2126*sa,.7152-.7152*sa,.0722+.9278*sa];
 for(let i=0,k=0;i<N;i++,k+=4){const al=A[k+3];if(al<1e-4){u[k+3]=0;continue}
  let r=Math.min(1,A[k]/al*br),g=Math.min(1,A[k+1]/al*br),b=Math.min(1,A[k+2]/al*br);
  r=(r-.5)*ct+.5;g=(g-.5)*ct+.5;b=(b-.5)*ct+.5;
  u[k]=(m[0]*r+m[1]*g+m[2]*b)*255;u[k+1]=(m[3]*r+m[4]*g+m[5]*b)*255;u[k+2]=(m[6]*r+m[7]*g+m[8]*b)*255;u[k+3]=Math.min(1,al)*255}
 x.putImageData(id,0,0)}
const BQ=[];let bqRun=0;
const LZ=(b,lv)=>lv==1?b.zf:lv==2?(b.zr+b.zf)/2:b.zr;
/* запекает один уровень (z) предмета: спрайт с полями под тень и размытие, центр — в центре предмета */
function bakeLv(b,lv){const t=b.t,z=LZ(b,lv),q=1-z,bl=.35+8.5*Math.pow(z,1.4),sb=3+q*16,off=Math.max(3+q*20,5+q*28),M=Math.ceil(off+2.4*Math.hypot(sb/2,bl))+2,
 th=t.r*DG,c=Math.abs(Math.cos(th)),sn=Math.abs(Math.sin(th)),W=t.w*c+t.h*sn+2*M,H=t.w*sn+t.h*c+2*M,
 /* под матовым стеклом (своё размытие 3.5px) хватает разрешения ~1 css-пикселя; над ним — резче */
 qmax=b.lay?Math.min(COARSE?1.5:2,RS):Math.min(COARSE?.9:1.2,RS),sc=Math.max(.2,Math.min(qmax,(CF?1.6:1.3)/bl)),pw=Math.max(2,Math.round(W*sc)),ph=Math.max(2,Math.round(H*sc));
 if(pw*ph>2.2e6)return null;
 const cv=document.createElement('canvas');cv.width=pw;cv.height=ph;const x=cv.getContext('2d',CF?undefined:{willReadFrequently:true});
 x.imageSmoothingQuality='high';if(CF)x.filter=fl2(z,sc);x.setTransform(sc,0,0,sc,pw/2,ph/2);x.rotate(th);if(t.fl)x.scale(-1,1);
 x.drawImage(IM[t.k],-t.w/2,-t.h/2,t.w,t.h);if(!CF){x.setTransform(1,0,0,1,0,0);jsFilter(x,pw,ph,z,sc)}
 const sp={img:cv,W,H};
 /* готовую картинку переводим в ImageBitmap — холст освобождается (на iPhone у холстов жёсткий лимит памяти) */
 if(window.createImageBitmap)createImageBitmap(cv).then(bm=>{sp.img=bm;cv.width=cv.height=0}).catch(()=>0);
 return sp}
/* печём порциями между кадрами: пока висит шторка — крупными (никто не смотрит), потом — мелкими, чтобы не дёргать анимацию */
function bakePump(){bqRun=0;const t0=performance.now(),lim=document.getElementById('ld')?24:6;let n=0;
 while(BQ.length&&performance.now()-t0<lim){const[b,lv]=BQ.shift();if(!b.on||b.sp[lv]!==undefined)continue;b.sp[lv]=bakeLv(b,lv)||false;n++}
 if(n)REQ();if(BQ.length){bqRun=1;setTimeout(bakePump,0)}else BK()}
function bakeQ(b,lv){if(b.sp[lv]!==undefined||b.qd[lv])return;b.qd[lv]=1;BQ.push([b,lv]);if(!bqRun){bqRun=1;setTimeout(bakePump,0)}}
/* t: 0 — предмет в покое (размыт), 1 — в фокусе (резкий, у стекла): какие уровни рисовать и с какой прозрачностью */
function wts(b){const t=b.tw,A=b.sp[0],B=b.sp[1],M=b.sp[2];if(t>0&&B===undefined)bakeQ(b,1);if(t>.1&&B&&M===undefined)bakeQ(b,2);
 if(!A)return[];if(!B||t<.004)return[[A,1]];if(!M)return[[A,1-t*t],[B,t]];
 if(t<.5){const u=t*2;return[[A,1-u*u],[M,u]]}const u=(t-.5)*2;return[[M,1-u*u],[B,u]]}

/* раскладка в системе координат с центром в середине стекла; A,B — полуразмеры видимой области + запас на сдвиг при наклоне */
function compose(fw,fh){
const R=mulberry(SEED),rn=(a,b)=>a+R()*(b-a),pick=a=>a[R()*a.length|0],mg=56,A=fw/2+mg,B=fh/2+mg,ra=A*B/((383+mg)*(251+mg)),sc=Math.pow(ra,.25),cf=Math.sqrt(ra);
const wt={};KEYS.forEach(k=>wt[k]=1+(R()<.4)+(R()<.12));let bq=[],lk;
/* «мешок»: ключи идут вперемешку, один и тот же инструмент не стоит подряд */
const nk=()=>{if(!bq.length){KEYS.forEach(k=>{for(let i=0;i<wt[k];i++)bq.push(k)});for(let i=bq.length;i>1;i--){const j=R()*i|0;[bq[i-1],bq[j]]=[bq[j],bq[i-1]]}}let i=bq.length-1;while(i>0&&bq[i]===lk)i--;return lk=bq.splice(i,1)[0]};
const BS=1.15,LL=(k,b)=>b*BS*Math.pow(IL[k][0]/300,.45)*rn(.88,1.12)*sc,
al=(k,a,fl)=>a-(IL[k][2]?0:IL[k][1]*(fl?-1:1)),
I=(k,x,y,r,L,d,fl)=>({k,x,y,r,L,d:d==null?R():d,fl:fl?1:0}),
ok=(x,y,L)=>Math.abs(x)<A+L*.3&&Math.abs(y)<B+L*.3,fp=()=>R()<.35;

/* дрейф: равномерная россыпь; поворот либо хаотичный, либо по «течению» */
const drift=(n,o={})=>{const it=[],pts=[],flow=o.flow!=null?o.flow:R()<.6,p1=rn(0,6.3),p2=rn(0,6.3),f1=rn(.004,.008),f2=rn(.004,.009),d0=o.d0||0,d1=o.d1==null?1:o.d1;
 for(let i=0;i<n;i++){let bx=0,by=0,bd=-1;for(let c=0;c<16;c++){const x=rn(-A,A),y=rn(-B,B);let d=1e9;for(const p of pts)d=Math.min(d,(x-p[0])**2+(y-p[1])**2);if(d>bd){bd=d;bx=x;by=y}}
  pts.push([bx,by]);const k=nk(),fl=fp(),a=flow?Math.sin(bx*f1+p1)*85+Math.cos(by*f2+p2)*85+rn(-20,20):rn(-180,180);
  it.push(I(k,bx,by,flow?al(k,a,fl):a,LL(k,rn(170,290)),d0+R()*(d1-d0),fl))}
 return it};

/* мозаика (knolling): строки одинаковой ширины, предметы строго по осям, зазор между ними — как разложено на столе */
const mosaic=()=>{const W2=2*A,H2=2*B,gp=rn(9,17)*sc,seq=[];
 for(let i=0;i<260;i++){const k=nk(),q=R()*4|0;seq.push({k,q,a:q%2?1/AR[k]:AR[k]})}
 let best=null;
 for(let rh=92*sc;rh<=170*sc;rh+=3*sc){const rows=[];let row=[],sa=0,H=0,bn=0,be=1e9;
  for(const s of seq){row.push(s);sa+=s.a;if(sa*rh+gp*(row.length-1)>=W2){const h=(W2-gp*(row.length-1))/sa;rows.push({row,h});H+=h;row=[];sa=0;
   const n=rows.length,Hc=H+gp*(n-1),e=Math.abs(Hc-H2);if(n>=2&&e<be){be=e;bn=n}if(Hc>H2)break}}
  if(bn<2)continue;if(!best||be<best.e){const rs=rows.slice(0,bn);best={e:be,rows:rs,H:rs.reduce((a,r)=>a+r.h,0)+gp*(bn-1)}}}
 const{rows,H}=best,ex=(H2-H)/(rows.length-1),it=[];let y=-B;
 rows.forEach(({row,h})=>{let x=-A;row.forEach(s=>{const w=s.a*h,k=s.k,L=(s.q%2?h/AR[k]:h)*Math.max(1,AR[k]);
  it.push(Object.assign(I(k,x+w/2,y+h/2,s.q*90+rn(-1.3,1.3),L,R()*.4,0),{sh:1,td:1}));x+=w+gp});y+=h+gp+ex});
 return it};

/* кольца вокруг точки (розетка — полный круг, веер — сектор): предметы смотрят наружу, внутрь или вдоль кольца */
const rad=(cx,cy,a0,span,rm,o)=>{const it=[],full=span>=359,L0=t=>(o.l0+(o.l1-o.l0)*t)*sc*BS;let r=o.rs*sc,j=0;
 if(full){const k=nk();it.push(I(k,cx,cy,rn(-180,180),LL(k,o.l0*1.15),0,fp()))}
 while(r<rm){const t=Math.min(1,r/rm),Lr=L0(t),m=Math.max(full?5:2,Math.round(span*DG*r/(Lr*o.p))),md=o.modes[j%o.modes.length];
  for(let i=0;i<m;i++){const a=(full?(i+(j%2?.5:0))/m*360:a0-span/2+(i+.5)/m*span)+rn(-o.jit,o.jit),k=nk(),fl=fp(),L=Lr*Math.pow(IL[k][0]/300,.4)*rn(.88,1.12);
   it.push(I(k,cx+r*Math.sin(a*DG),cy-r*Math.cos(a*DG),al(k,md=='out'?a:md=='in'?a+180:a+90,fl),L,o.dm*t+o.d0,fl))}
  r+=Lr*o.s;j++}
 return it};
const rosette=()=>{const cx=rn(-.1,.1)*A,cy=rn(-.1,.1)*B,rm=Math.hypot(A+Math.abs(cx),B+Math.abs(cy));
 return rad(cx,cy,0,360,rm,{l0:150,l1:300,p:.5,s:.46,jit:3,modes:pick([['out'],['out','tan'],['out','in'],['tan','out','out']]),rs:90,dm:.9,d0:0})};
const fan=()=>{const np=1+(R()<.5)+(R()<.15),an=[[0,B,0],[-A,0,90],[A,0,-90],[0,-B,180],[-A,B,45],[A,B,-45],[-A,-B,135],[A,-B,-135]];
 for(let i=an.length;i>1;i--){const j=R()*i|0;[an[i-1],an[j]]=[an[j],an[i-1]]}
 const sp=rn(120,190)-(np>1?25:0),out=[];
 an.slice(0,np).forEach(([x,y,a],i)=>{const rm=Math.max(Math.hypot(x-A,y-B),Math.hypot(x+A,y-B),Math.hypot(x-A,y+B),Math.hypot(x+A,y+B));
  out.push(...rad(x,y,a,sp,rm,{l0:120,l1:320,p:.5,s:.5,jit:5,modes:['out'],rs:26,dm:.7,d0:i*.15}))});
 return out};

/* потоки: параллельные ленты предметов под одним углом; в «плетёнке» поверх идёт второй слой под прямым углом */
let wvF=0;const streams=()=>{const phi=R()<.25?pick([0,90]):rn(-40,40)+(R()<.2?90:0),wv=R()<.4,alt=R()<.5;
 const lay=(ph,base,d0,sp,dr=.45)=>{const c=Math.cos(ph*DG),s=Math.sin(ph*DG),Eu=A*Math.abs(c)+B*Math.abs(s),En=A*Math.abs(s)+B*Math.abs(c),pt=sp*sc,res=[];let j=0;
  for(let t=-En-pt;t<En+pt;t+=pt*rn(.9,1.1),j++){const rv=alt&&j%2?180:0;let u=-Eu-rn(0,260)*sc;
   while(u<Eu+260*sc){const k=nk(),fl=fp(),L=LL(k,base),uc=u+L/2;res.push(I(k,c*uc-s*t,s*uc+c*t,al(k,ph+90+rv+rn(-3,3),fl),L,d0+R()*dr,fl));u+=L*rn(.9,1.03)+rn(2,16)*sc}}
  return res};
 wvF=wv;return wv?[...lay(phi,235,0,100),...lay(phi+90,205,.5,92)]:lay(phi,rn(230,300),0,rn(80,100),.9)};

/* подсолнух: золотой угол 137.5° — плотная спираль, предметы растут к краю */
const sunflower=()=>{const cx=rn(-.15,.15)*A,cy=rn(-.15,.15)*B,rm=Math.hypot(A+Math.abs(cx),B+Math.abs(cy)),a=rn(54,70)*sc,N=Math.ceil(Math.pow(rm/a,2)),tw=pick([0,0,25,-25,90]),dr=R()<.5?1:-1,it=[];
 for(let i=1;i<=N;i++){const r=a*Math.sqrt(i),th=i*137.508*dr,t=r/rm,k=nk(),fl=fp(),L=(125+200*Math.pow(t,.85))*sc*BS*Math.pow(IL[k][0]/300,.4)*rn(.9,1.1);
  it.push(I(k,cx+r*Math.sin(th*DG),cy-r*Math.cos(th*DG),al(k,th+tw,fl),L,t,fl))}
 return it};

/* калейдоскоп: случайный кусок отражается/поворачивается (зеркало слева-направо, 4 четверти, вертушка на 3–6 лучей, иногда со снежинкой) */
const kal=()=>{const mode=pick(['lr','lr','quad','rot3','rot4','rot5','rot6']),rot=mode[0]=='r',n=rot?+mode[3]:0,dih=rot&&R()<.5,rm=Math.hypot(A,B),
 cp=mode=='lr'?2:mode=='quad'?4:n*(dih?2:1),nb=Math.max(8,Math.round(60*cf/cp)),wedge=rot?360/n/(dih?2:1):0,fa=R()<.5,pts=[],base=[];
 for(let i=0;i<nb;i++){let bx=0,by=0,bd=-1;for(let c=0;c<14;c++){let x,y;
  if(rot){const r=rm*Math.sqrt(R()),a=R()*wedge*DG;x=r*Math.sin(a);y=-r*Math.cos(a)}else{x=rn(0,A);y=mode=='lr'?rn(-B,B):rn(0,B)}
  let d=1e9;for(const p of pts)d=Math.min(d,(x-p[0])**2+(y-p[1])**2);if(d>bd&&(!rot||ok(x,y,100))){bd=d;bx=x;by=y}}
  if(bd<0)continue;pts.push([bx,by]);const k=nk(),fl=fp(),pa=Math.atan2(bx,-by)/DG;
  base.push(I(k,bx,by,fa?al(k,pa+(R()<.5?0:90),fl):rn(-180,180),LL(k,rn(150,280)),R(),fl))}
 /* отражение относительно прямой через центр под углом b (от вертикали по часовой), поворот на f° */
 const rf=(t,b)=>{const dx=Math.sin(b*DG),dy=-Math.cos(b*DG),p=t.x*dx+t.y*dy;return{...t,x:2*p*dx-t.x,y:2*p*dy-t.y,r:2*b-t.r,fl:1-t.fl}},
 rt=(t,f)=>{const c=Math.cos(f*DG),s=Math.sin(f*DG);return{...t,x:t.x*c-t.y*s,y:t.x*s+t.y*c,r:t.r+f}},out=[];
 if(mode=='lr')base.forEach(t=>out.push(t,rf(t,0)));
 else if(mode=='quad')base.forEach(t=>{const a=rf(t,0);out.push(t,a,rf(t,90),rf(a,90))});
 else base.forEach(t=>{for(let j=0;j<n;j++){out.push(rt(t,j*360/n));if(dih)out.push(rt(rf(t,0),j*360/n))}});
 return out};

let it=({drift:()=>drift(Math.round(66*cf)),mosaic:()=>[...mosaic(),...drift(Math.round(24*cf),{flow:false,d0:.5,d1:1})],rosette,fan,streams,sunflower,kaleido:kal})[PN[PI]]();
it=it.filter(t=>ok(t.x,t.y,t.L));
if(it.length>82){it.sort((a,b)=>Math.hypot(a.x/A,a.y/B)-Math.hypot(b.x/A,b.y/B));it.length=82}
/* фон: несколько гигантских размытых инструментов на самой плите — чтобы нигде не оставалось пустот */
const g=3+(R()*3|0),gk=KEYS.slice().sort(()=>R()-.5),p0=rn(0,6.3);
for(let i=0;i<g;i++){const a=p0+i/g*6.283;it.push(Object.assign(I(gk[i],Math.cos(a)*A*rn(.35,.8),Math.sin(a)*B*rn(.35,.8),rn(-180,180),rn(480,760)*sc,1,R()<.5),{gi:1}))}
/* передний план: самый крупный экземпляр каждого инструмента + немного случайных — резкие, над матовым слоем */
const hr={},thr=({drift:.3,mosaic:0,rosette:.5,fan:.45,streams:wvF?.5:.4,sunflower:.5,kaleido:.4})[PN[PI]];
if(PN[PI]!='mosaic')it.forEach(t=>{if(t.gi||Math.abs(t.x)>fw/2||Math.abs(t.y)>fh/2)return;if(!hr[t.k]||t.L>hr[t.k].L)hr[t.k]=t});
Object.values(hr).forEach(t=>{t.sh=1;if(!t.td)t.L=Math.min(t.L*rn(1.2,1.5),480*sc)});
it.forEach(t=>{if(!t.gi&&t.d<thr)t.sh=1;t.z=t.gi?rn(.93,.98):t.sh?rn(.08,.34):.42+.5*Math.min(1,Math.max(0,.4*t.d+.6*R()));
 if(!t.gi&&!t.sh&&PN[PI]!='mosaic')t.r+=R()<.3?rn(-28,28):rn(-9,9)});
return it}

$('',GL,'position:absolute;inset:0;background:radial-gradient(ellipse at 50% 45%,#0000 30%,#000a 100%);pointer-events:none');
const farW=$('',GL,'position:absolute;left:0;top:0;width:855px;height:547px;transform-origin:0 0;will-change:transform');
const rn=(a,b)=>a+Math.random()*(b-a),pk2=['#c0392b','#2e7d4f','#e0a82e','#3a6ea5','#999'];
for(let i=0;i<120;i++){const t=i%6,r=Math.random()<.5?0:90,x=rn(0,830),y=rn(0,520);let w,h,bg,ex='';
if(t==0){w=30;h=9;bg='linear-gradient(90deg,#d8c9a0 20%,#a33 20% 28%,#d8c9a0 28% 45%,#222 45% 53%,#d8c9a0 53% 70%,#c90 70% 78%,#d8c9a0 78%)';ex='border-radius:4px'}
else if(t==1){w=h=rn(18,30);bg='radial-gradient(circle at 40% 35%,#ddd 0 25%,#35456a 26%)';ex='border-radius:50%'}
else if(t==2){w=rn(34,74);h=18;bg='linear-gradient(#151515,#151515) center/100% 72% no-repeat,repeating-linear-gradient(90deg,#aaa 0 3px,transparent 3px 7px)'}
else if(t==3){w=h=rn(8,13);bg=Math.random()<.5?'radial-gradient(#fff,#e2412e)':'radial-gradient(#f6e27a,#b88710)';ex='border-radius:50%;box-shadow:0 0 6px #e2412e66'}
else if(t==4){w=rn(40,130);h=rn(2,3.5);bg=pk2[i%5]}
else{w=h=rn(18,26);bg='radial-gradient(circle,#555 0 18%,#ddd 20% 70%,#999 72%)';ex='border-radius:50%'}
$('',farW,`position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;background:${bg};transform:rotate(${r}deg);${ex}`)}

const gl=(st,x)=>$('',GL,'position:absolute;inset:0;border-radius:inherit;pointer-events:none;'+st,x);
const mkc=()=>$('',$('',GL,'position:absolute;inset:0;overflow:hidden;border-radius:inherit;pointer-events:none'),'position:absolute;left:0;top:0;width:855px;height:547px;transform-origin:0 0;will-change:transform');
const SB=mkc();
gl("background:radial-gradient(ellipse at 50% 50%,#0000 50%,#0007 100%);box-shadow:inset 0 0 70px 8px #0008");
gl("background:linear-gradient(135deg,#ffffff8c,#ffffff6b),radial-gradient(ellipse at 50% 50%,#fff0 45%,#ffffff66 100%);backdrop-filter:blur(calc(3.5px + var(--mb,0px))) saturate(.85) brightness(1.06);-webkit-backdrop-filter:blur(calc(3.5px + var(--mb,0px))) saturate(.85) brightness(1.06)");
gl("background:"+NZ+";opacity:.55;mix-blend-mode:soft-light");
gl("background:"+NZ2+";opacity:.5;mix-blend-mode:soft-light");
const SF=mkc();
/* тела для физики: масса, положение, угол, высота над платой, «нагрузка» класса */
let BD=[];
/* бюджет памяти под спрайты (на телефоне скромнее): если сцена не влезает — ужимаем гигантов, потом убираем самые дальние */
let KSC=1,RS=1,X0=0,Y0=0;const DPR=Math.min(3,window.devicePixelRatio||1),COARSE=matchMedia('(pointer:coarse)').matches;
function fit(l,fw,fh){const ar=t=>{const[w,h]=dim(t.k,t.L*(1.07-.13*t.z));return Math.min(w,fw+120)*Math.min(h,fh+120)},tot=()=>l.reduce((s,t)=>s+ar(t),0);
 const V=(COARSE?40:60)*fw*fh;if(tot()<=V)return l;
 l.forEach(t=>{if(t.gi)t.L*=.72});
 const o=l.filter(t=>!t.gi).sort((a,b)=>b.z-a.z);
 while(tot()>V&&o.length>12){const t=o.shift();l.splice(l.indexOf(t),1)}
 return l}
/* два холста: SB — под матовым слоем, SF — над ним; размер = видимая часть стекла, разрешение — под экран, но с потолком */
const CV=[SB,SF].map(p=>{const c=document.createElement('canvas');c.style.cssText='position:absolute;pointer-events:none';p.appendChild(c);return{c,x:c.getContext('2d')}});
function buildScene(fw,fh){BD.forEach(b=>b.on=0);BQ.length=0;
 RS=Math.min(DPR*Math.max(1,KSC)*CS,Math.sqrt((COARSE?2.6e6:4.4e6)/(fw*fh)));X0=427.5-fw/2;Y0=273.5-fh/2;
 CV.forEach(({c})=>{c.width=Math.round(fw*RS);c.height=Math.round(fh*RS);c.style.left=X0+'px';c.style.top=Y0+'px';c.style.width=fw+'px';c.style.height=fh+'px'});
 BD=fit(compose(fw,fh),fw,fh).sort((a,b)=>b.z-a.z).map(t=>{const[w,h]=dim(t.k,t.L*(1.07-.13*t.z)),zr=Math.max(.03,t.z),zf=Math.max(.03,zr*.18);
  return{k:t.k,t:{k:t.k,r:t.r,fl:t.fl,w,h},lay:t.z<.4?1:0,cx:427.5+t.x,cy:273.5+t.y,z0:t.z,zr,zf,m:Math.max(.5,w*h/42000),cl:CL[t.k],on:1,
   px:0,py:0,x:0,y:0,vx:0,vy:0,a:0,o:0,h:0,vh:0,L:0,sk:1,tw:0,sp:zr-zf<.05?[undefined,false,false]:[],qd:[]}});
 IMGS.then(()=>{BD.forEach(b=>bakeQ(b,0));REQ()})}
/* кадр: очищаем оба холста и рисуем предметы от дальних к ближним */
function draw(){CV.forEach(({c,x})=>{x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,c.width,c.height)});
 for(const b of BD){const w=wts(b);if(!w.length)continue;const x=CV[b.lay].x;
  x.setTransform(RS,0,0,RS,-X0*RS,-Y0*RS);x.translate(b.cx+b.x+b.px,b.cy+b.y+b.py);if(b.sk!==1)x.scale(b.sk,b.sk);if(b.a)x.rotate(b.a*DG);
  for(const[s,al]of w)if(al>.01){x.globalAlpha=al;x.drawImage(s.img,-s.W/2,-s.H/2,s.W,s.H)}x.globalAlpha=1}}
let DQ=0;const REQ=()=>{if(!DQ){DQ=1;requestAnimationFrame(()=>{DQ=0;draw()})}};

gl("background:linear-gradient(115deg,#fff0 calc(var(--gx,38%) - 14%),#ffffff4d var(--gx,38%),#fff0 calc(var(--gx,38%) + 14%),#ffffff1c 72%,#fff0 85%),radial-gradient(ellipse at var(--gx,38%) 0%,#ffffff40,#fff0 55%),rgba(255,255,255,.1)");
gl("background:"+NZ+";opacity:.3;mix-blend-mode:overlay");
gl("box-shadow:inset 1px 1px 1px #ffffffe6,inset -1px -1px 2px #0006,inset 0 0 0 1px #ffffff8c,inset 0 0 0 5px #ffffff1f,inset 0 0 0 6px #ffffff55,inset 0 0 0 7px #a8d6cf22,inset 0 0 26px 3px #0003,inset 0 -14px 24px -12px #fff5");
/* ---- состояние ---- */
let ctx,pre,shp,trem,dly,fb,wet,mst,lfo,lfoP,lfoF,lfoA,vib,vibG,nb,held=null,arpT,pb;
const S={oc:0,ec:.25,k:[.5,.25,.35,0,.15],f:.55,iv:.7,ov:.6,pi:0,oi:0,ei:4,b:1,mt:.49,at:.69,re:.64,ly:0,vid:1,vb:0,de:0,di:0,d:0,ar:0,st:0,dl:[1,0,0],dr:[0,0,0],lp:0,lg:0,la:0,fr:0,fg:0,gl:0};
const P=[['SIN',[['sine',1,1]],.02,.4,.5,.2],['SAW',[['sawtooth',1,1]],.01,.3,2.5,.25],['SQR',[['square',1,.8]],.01,.3,2,.15],['BAS',[['sawtooth',1,1],['sine',.5,1.2]],.01,.2,3,.12],['CHO',[['sawtooth',1,.7],['triangle',2.005,.5],['sawtooth',.995,.7]],.25,.9,.5,.8],['ORG',[['sine',1,1],['sine',2,.6],['sine',3,.4],['sine',4,.25]],.02,.15,0,.1],['NOI',[['noise',1,.9],['square',1,.3]],.005,.12,3,.08],['SPC',[['triangle',1,1],['sawtooth',1.5,.35],['sine',.5,.8]],.9,2,1.5,1.5]];
/* ---- инструменты: живой (оркестр) и синтезаторный слои ---- */
const OR=[{n:'STR',cls:'str',L:[['sawtooth',1,.8],['sawtooth',1.005,.7],['triangle',2,.25]],a:.35,r:.9,fe:.5,ft:.5,vib:9},
{n:'WND',cls:'wnd',L:[['triangle',1,1],['square',1,.28],['sine',2,.2],['noise',1,.05]],a:.07,r:.25,fe:1.1,ft:.12,vib:5},
{n:'HRP',cls:'hrp',L:[['sine',1,1],['triangle',2,.35],['sine',3,.18],['sine',4,.1]],a:.004,r:.55,fe:1.6,ft:.25,dc:.55,sus:.03}];
const EL=P.map(p=>({n:p[0],L:p[1],a:p[2],r:p[3],fe:p[4],ft:p[5]})),INS=[...OR,...EL],NI=INS.length-1;
const AT=v=>.003*Math.pow(1000,v),RE=v=>.03*Math.pow(200,v),fmt=x=>x<1?Math.round(x*1000)+'ms':x.toFixed(1)+'s',lg1=(x,a,b)=>Math.max(0,Math.min(1,Math.log(x/a)/Math.log(b)));
const modeOf=s=>S.ly?(s<6?'e':'o'):undefined;
function selIns(i){i=Math.max(0,Math.min(NI,i));if(i===S.pi)return;S.pi=i;if(i<3){S.oi=i;S.b=1}else{S.ei=i-3;S.b=0}S.at=lg1(INS[i].a,.003,1000);S.re=lg1(INS[i].r,.03,200);refresh()}
/* какой класс инструментов сейчас играет -> поднимается к стеклу */
let ACT=[];const LT={str:0,wnd:0,hrp:0},CL={vb:'str',v:'str',bow:'str',tr:'wnd',sxr:'wnd',sxg:'wnd',sxb:'wnd',sx1:'wnd',clar:'wnd',hh:'wnd',hf:'wnd',acc:'wnd',harp:'hrp',ban:'hrp'};

/* ---- клавиши ---- */
const keys=new Set(),KB='awsedftgyhujk',els=[];
const wh=[0,2,4,5,7,9,11,12],bl=[[1,0],[3,1],[6,3],[8,4],[10,5]];
function mk(s,c,st){const e=$(c,KW,st,KB[s].toUpperCase());e.classList.add(s<6?'el':'or');els[s]=e;e.onpointerdown=ev=>{e.setPointerCapture(ev.pointerId);press(s)};e.onpointerup=e.onpointercancel=()=>unpress(s)}
function press(s){if(keys.has(s))return;keys.add(s);els[s].classList.add('on');play(s)}
function unpress(s){if(!keys.has(s))return;keys.delete(s);els[s].classList.remove('on');release(s)}
addEventListener('keydown',e=>{if(e.repeat||e.ctrlKey||e.metaKey||e.key.length!==1)return;const i=KB.indexOf(e.key.toLowerCase());if(i>=0)press(i)});
addEventListener('keyup',e=>{if(e.key.length!==1)return;const i=KB.indexOf(e.key.toLowerCase());if(i>=0)unpress(i)});
addEventListener('blur',()=>[...keys].forEach(unpress));

/* ---- звук ---- */
let an,duck,rvg,db,nt,tm,D,M,vs={};
const Q={bpm:100,sw:.2,dv:.8,sc:0,pump:1,play:0,step:0};
const SC=[[0,3,5,7,10],[0,2,3,5,7,8,10],[0,2,4,5,7,9,11],[0,2,3,5,7,9,10],[0,1,3,5,7,8,10],[0,1,2,3,4,5,6,7,8,9,10,11]];
const sem=m=>{const c=SC[Q.sc],n=c.length;return c[(m%n+n)%n]+12*Math.floor(m/n)};
function init(){if(ctx)return;ctx=new(window.AudioContext||window.webkitAudioContext)();const g=()=>ctx.createGain();
pre=g();shp=ctx.createWaveShaper();shp.oversample=COARSE?'2x':'4x';trem=g();duck=g();db=g();dly=ctx.createDelay(1);fb=g();fb.gain.value=.4;wet=g();mst=g();rvg=g();
const cp=ctx.createDynamicsCompressor(),lp=ctx.createBiquadFilter(),rv=ctx.createConvolver(),n=ctx.sampleRate*2,ir=ctx.createBuffer(2,n,ctx.sampleRate);lp.frequency.value=3000;
for(let c=0;c<2;c++){const d=ir.getChannelData(c);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,3)}rv.buffer=ir;
pre.connect(shp);shp.connect(trem);trem.connect(duck);duck.connect(mst);duck.connect(dly);dly.connect(lp);lp.connect(fb);fb.connect(dly);lp.connect(wet);wet.connect(mst);duck.connect(rv);db.connect(rv);rv.connect(rvg);rvg.connect(mst);db.connect(mst);mst.connect(cp);cp.connect(ctx.destination);an=ctx.createAnalyser();an.fftSize=1024;cp.connect(an);
lfo=ctx.createOscillator();lfoP=g();lfoF=g();lfoA=g();lfo.connect(lfoP);lfo.connect(lfoF);lfo.connect(lfoA);lfoA.connect(trem.gain);
vib=ctx.createOscillator();vib.frequency.value=5.5;vibG=g();vib.connect(vibG);lfo.start();vib.start();
nb=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate);const d=nb.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
const c=new Float32Array(1024);for(let i=0;i<1024;i++)c[i]=Math.tanh((i/512-1)*10);shp.curve0=c;apply()}
function apply(){if(!ctx)return;const n=ctx.currentTime,f=80*Math.pow(150,S.f),d=S.k[3];
lfo.frequency.value=.2*Math.pow(100,S.k[2]);lfoP.gain.value=S.lp?d*600:0;lfoF.gain.value=S.lg?d*f*.8:0;lfoA.gain.value=S.la?d*.5:0;trem.gain.value=S.la?1-d*.5:1;
pre.gain.value=S.iv*1.3;mst.gain.value=Math.pow(S.ov,2)*.9;vibG.gain.value=S.vb?12:0;wet.gain.value=S.ec*.55;rvg.gain.value=S.ec*.5;dly.delayTime.value=45/Q.bpm;shp.curve=S.di?shp.curve0:null;
for(const k in vs)vs[k].fls.forEach(fl=>{fl.Q.value=.5+S.k[4]*16;fl.frequency.cancelScheduledValues(n);fl.frequency.setTargetAtTime(f,n,.03)})}
const trn=()=>{const t=S.k[0]*24-12;return S.st?Math.round(t):t};
const base=s=>261.63*Math.pow(2,S.oc+(s+trn())/12)*(S.d?.5:1);
const rel=()=>RE(S.re)*(S.fg?6:1),dcn=(a,b)=>{try{a.disconnect(b)}catch(e){}};
/* не больше CAPO осцилляторов одновременно: самые старые голоса быстро гасим (иначе на длинных затуханиях узлы копятся, и аудиопоток/память не выдерживают) */
const LV=[],CAPO=COARSE?44:96;
function cap(){const n=ctx.currentTime;let c=0;LV.forEach(v=>{if(!v.st)c+=v.all.length});for(const v of LV){if(c<=CAPO)break;if(v.st)continue;v.st=1;c-=v.all.length;try{end(v,n,.03,1)}catch(e){}}}
function voice(s,t,dur,vel=1,mode){const bal=mode=='o'?1:mode=='e'?0:S.b,ow=Math.sin(bal*Math.PI/2),ew=Math.cos(bal*Math.PI/2),LY=[];
if(ow>.02)LY.push([OR[S.oi],ow]);if(ew>.02)LY.push([EL[S.ei],ew]);
const f=base(s),fc=80*Math.pow(150,S.f),a=S.fr?Math.max(AT(S.at),.6):AT(S.at),os=[],all=[],envs=[],fls=[],vgs=[],acts=[];
LY.forEach(([d,w])=>{const L=[...d.L];if(d===EL[S.ei]){S.dl.forEach((x,i)=>x&&L.push([['sine','sawtooth','square'][i],1,.8]));S.dr.forEach((x,i)=>{if(x)L.push([['sine',.5,1],['noise',1,.5],['triangle',1,.8]][i])})}
const env=ctx.createGain(),fl=ctx.createBiquadFilter(),amt=vel*.5*w/Math.sqrt(L.length*(S.vid?2:1));let vg=null;
if(d.vib){vg=ctx.createGain();vg.gain.value=d.vib;vib.connect(vg);vgs.push(vg)}
fl.Q.value=.5+S.k[4]*16;fl.frequency.setValueAtTime(Math.min(18000,fc*Math.pow(2,d.fe)),t);fl.frequency.setTargetAtTime(fc,t,d.ft);lfoF.connect(fl.frequency);
env.gain.setValueAtTime(0,t);env.gain.linearRampToValueAtTime(1,t+a);if(d.dc)env.gain.setTargetAtTime(d.sus,t+a,d.dc);env.connect(fl);fl.connect(pre);
L.forEach(l=>(S.vid?[0,1]:[0]).forEach(c=>{const g=ctx.createGain();g.gain.value=l[2]*amt;g.connect(env);let o;
if(l[0]=='noise'){o=ctx.createBufferSource();o.buffer=nb;o.loop=true}else{o=ctx.createOscillator();o.type=l[0];o.frequency.value=f*l[1];o.detune.value=c?S.k[1]*40+3:0;lfoP.connect(o.detune);vibG.connect(o.detune);if(vg){vg.connect(o.detune);o.vg=vg}os.push({o,r:l[1]})}
o.connect(g);o.start(t);all.push(o)}));
envs.push(env);fls.push(fl);if(d.cls){const ac={c:d.cls,w,s:t,e:1e9};ACT.push(ac);acts.push(ac)}});
if(ACT.length>300)ACT.splice(0,150);
const x={envs,all,os,fls,vgs,acts};LV.push(x);cap();if(dur!=null)end(x,t+dur,rel());return x}
function end(x,t,r,live){x.envs.forEach(e=>{const g=e.gain;if(live){g.cancelScheduledValues(t);g.setValueAtTime(g.value,t)}g.setTargetAtTime(0,t,r/4)});x.acts.forEach(a=>a.e=t);
x.te=t+r*1.6+.05;x.all.forEach(o=>{o.stop(x.te);o.onended=()=>{dcn(lfoP,o.detune);dcn(vibG,o.detune);o.vg&&dcn(o.vg,o.detune);o.disconnect()}});
x.all[0].addEventListener('ended',()=>{x.fls.forEach(fl=>{dcn(lfoF,fl.frequency);fl.disconnect()});x.envs.forEach(e=>e.disconnect());x.vgs.forEach(v=>{dcn(vib,v);v.disconnect()});LV.splice(LV.indexOf(x)>>>0,1)})}
function stop1(s,fast){const x=vs[s];if(!x)return;delete vs[s];end(x,ctx.currentTime,fast?.03:rel(),1)}
const MAXV=8;
function start(s){stop1(s,1);const ks=Object.keys(vs);if(ks.length>=MAXV)stop1(ks[0],1);vs[s]=voice(s,ctx.currentTime,undefined,1,modeOf(s))}
function retune(){if(!ctx)return;const n=ctx.currentTime;for(const k in vs)vs[k].os.forEach(x=>x.o.frequency.setTargetAtTime(base(+k)*x.r,n,.02))}
function refresh(){if(!ctx||held==null)return;if(S.ar)arp();else(keys.size?[...keys]:[held]).forEach(start)}
function arp(){clearTimeout(arpT);if(!S.ar||held==null)return;for(const k in vs)stop1(k,1);let i=0;
const tick=()=>{if(!S.ar||held==null)return;const k=[...keys].sort((a,b)=>a-b),L=k.length>1?k:[held,held+4,held+7,held+12,held+7,held+4],r=15000/Q.bpm;const nn=L[i++%L.length];voice(nn,ctx.currentTime,r/1000*.8,1,modeOf(nn));pulse(4);arpT=setTimeout(tick,r)};tick()}
function play(s){init();ctx.resume();if(S.ar){held=s;arp();return}
const k=Object.keys(vs);if(S.gl&&k.length==1&&held!=null){const x=vs[k[0]];delete vs[k[0]];x.os.forEach(o=>o.o.frequency.setTargetAtTime(base(s)*o.r,ctx.currentTime,.12));vs[s]=x}else start(s);held=s;pulse(4,1.25-s/16)}
function release(s){stop1(s);const k=[...keys];held=k.length?k[k.length-1]:null;if(held==null)clearTimeout(arpT)}

/* ---- ударные ---- */
function drum(r,t,s){const v=Q.dv,g=ctx.createGain();g.connect(db);
if(r==0){const o=ctx.createOscillator();o.frequency.setValueAtTime(170,t);o.frequency.exponentialRampToValueAtTime(40,t+.14);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.5);o.connect(g);o.start(t);o.stop(t+.55);o.onended=()=>{o.disconnect();g.disconnect()};
if(Q.pump){duck.gain.setValueAtTime(.25,t);duck.gain.linearRampToValueAtTime(1,t+.22)}return}
const n=ctx.createBufferSource(),f=ctx.createBiquadFilter(),d=r==2?(s%4==2?.2:.05):r==1?.18:.16;n.buffer=nb;n.loop=true;
f.type=r==2?'highpass':'bandpass';f.frequency.value=r==2?7500:r==1?1900:1300;f.Q.value=r==3?1.2:.8;n.connect(f);f.connect(g);
g.gain.setValueAtTime(v*(r==2?.5:.9),t);
if(r==3)[.012,.02,.032,.04].forEach((x,i)=>g.gain.setValueAtTime(v*(i%2?.2:.9),t+x));
g.gain.exponentialRampToValueAtTime(.001,t+d+(r==3?.04:0));n.start(t,Math.random());n.stop(t+d+.1);n.onended=()=>{n.disconnect();f.disconnect();g.disconnect()};
if(r==1){const o=ctx.createOscillator(),h=ctx.createGain();o.type='triangle';o.frequency.value=185;o.connect(h);h.connect(db);h.gain.setValueAtTime(v*.6,t);h.gain.exponentialRampToValueAtTime(.001,t+.1);o.start(t);o.stop(t+.12);o.onended=()=>{o.disconnect();h.disconnect()}}}

/* ---- секвенсор ---- */
const cl=v=>Math.max(-5,Math.min(9,v));
const PR=['1000100010001000 0000100000001000 0010001000100010 0000000000001000','1000001000100000 0000000010000000 1010101011101111 0000000010000000','1000001000110000 0000100000001001 1010101010101010 0000000000000000','1000000010000000 0000000010000000 0010001000100011 0000000000001000'].map(s=>s.split(' ').map(r=>[...r].map(Number)));
function roll(){let d=0;M=Array.from({length:16},()=>Math.random()<.35?null:(d=cl(d+[-2,-1,0,1,2,3][Math.random()*6|0])))}
const GR=[['acc','ban','hf'],['tr','sxr','sxg'],['hh','clar'],['sxb','harp'],['vb','sx1','v','bow']];
function tick(s,t){for(let r=0;r<4;r++)if(D[r][s])drum(r,t,s);const m=M[s];if(m!=null)voice(sem(m),t,60/Q.bpm/4*1.8);
setTimeout(()=>{D.forEach((d,r)=>d[s]&&pulse(r));if(m!=null)pulse(4)},Math.max(0,(t-ctx.currentTime)*1000))}
function sched(){const sd=60/Q.bpm/4;if(nt<ctx.currentTime-.05)nt=ctx.currentTime+.05;while(nt<ctx.currentTime+.12){const s=Q.step;tick(s,nt+(s%2?Q.sw*sd*.6:0));Q.step=(s+1)%16;nt+=sd}}
function go(on){Q.play=on;pb.classList.toggle('on',on);clearInterval(tm);if(on){init();ctx.resume();Q.step=0;nt=ctx.currentTime+.06;tm=setInterval(sched,25)}}

/* ---- интерфейс: всё напечатано и закреплено на стекле ---- */
const R=[],reg=(e,w,n)=>(R.push({e,w,n}),e),bx=(c,w,n,h,st='')=>reg($(c,GL,'position:absolute;'+st,h),w,n);
const sq=(a)=>[a[0],a[1],a[2],a[2]];
[[[10,10],[10,10]],[[813,10],[398,10]],[[10,518],[10,702]],[[813,518],[398,702]]].forEach(a=>bx('bolt',[...a[0],32,32],[...a[1],32,32],''));

const lb=(t,w,n,c='')=>bx('lb '+c,w,n,'<span>'+t+'</span>');
const BN=['HSE','TRP','BRK','DUB'];let bs=0;
const KN=[{n:'INST',g:()=>S.pi/NI,s:v=>selIns(Math.round(v*NI)),t:()=>INS[S.pi].n,st:1/NI},
{n:'BAL',g:()=>S.b,s:v=>{S.b=v},t:()=>'ORC '+Math.round(S.b*100)+'%'},
{n:'CUT',g:()=>S.mt,s:v=>{S.mt=v;S.f=1-.92*v;GL.style.setProperty('--mb',(Math.max(0,v-.49)/.51*9).toFixed(1)+'px');apply()}},
{n:'ATK',g:()=>S.at,s:v=>{S.at=v},t:()=>fmt(AT(S.at))},{n:'REL',g:()=>S.re,s:v=>{S.re=v},t:()=>fmt(RE(S.re))},
{n:'FX',g:()=>S.ec,s:v=>{S.ec=v;apply()}},{n:'VOL',g:()=>S.ov,s:v=>{S.ov=v;apply()}},
{n:'BPM',g:()=>(Q.bpm-60)/140,s:v=>{Q.bpm=Math.round(60+v*140);apply()},t:()=>Q.bpm},
{n:'OCT',g:()=>(S.oc+2)/4,t:()=>(S.oc>0?'+':'')+S.oc}];
const KP=Array.from({length:8},(_,i)=>[44+100*i,20,66]),KQ=Array.from({length:8},(_,i)=>[36+102*(i%4),44+102*(i/4|0),66]);
let cur=0,ct;const show=i=>{cur=i;clearTimeout(ct);ct=setTimeout(()=>cur=0,2500)},rot=()=>KN.slice(0,8).forEach(k=>k.r.style.transform=`rotate(${-135+k.g()*270}deg)`);
KN.slice(0,8).forEach((k,i)=>{const a=KP[i],b=KQ[i];k.e=bx('kn',sq(a),sq(b),'<i><b></b></i>');k.r=k.e.firstChild;
lb(k.n,[a[0]-14,a[1]+a[2]+6,a[2]+28,16],[b[0]-14,b[1]+b[2]+6,b[2]+28,16]);let y0,v0;const e=k.e,set=v=>{k.s(Math.max(0,Math.min(1,v)));rot()};
e.onpointerdown=ev=>{e.setPointerCapture(ev.pointerId);y0=ev.clientY;v0=k.g();show(i);ev.preventDefault()};
e.onpointermove=ev=>{if(y0!=null)set(v0+(y0-ev.clientY)/150)};e.onpointerup=e.onpointercancel=()=>y0=null;
e.onwheel=ev=>{ev.preventDefault();set(k.g()+(ev.deltaY<0?1:-1)*(k.st||.03));show(i)}});
const pill=(c,w,n,h,cb)=>{const e=bx('pl '+c,w,n,h);e.onclick=cb;return e};
const bb=pill('',[122,163,110,64],[24,352,96,64],'<span>'+BN[0]+'</span><small>PTN</small>',()=>{bs=(bs+1)%4;D=PR[bs].map(r=>[...r]);bb.firstChild.textContent=BN[bs]});
pb=pill('rb',[28,157,76,76],[28,244,76,76],'',()=>go(!Q.play));
const ar=pill('',[616,163,84,64],[224,352,72,64],'<span>ARP</span>',()=>{S.ar^=1;ar.classList.toggle('on',!!S.ar);S.ar?arp():(held!=null&&start(held))});
const oc=d=>{S.oc=Math.max(-2,Math.min(2,S.oc+d));retune();rot();show(8);cur=8};
pill('',[710,163,52,64],[302,352,52,64],'<span>−</span><small>OCT</small>',()=>oc(-1));pill('',[770,163,52,64],[360,352,52,64],'<span>+</span><small>OCT</small>',()=>oc(1));
const lyb=pill('',[502,163,104,64],[126,352,92,64],'<span>LYR</span><small>EL | ORC</small>',()=>{S.ly^=1;lyb.classList.toggle('on',!!S.ly);W.classList.toggle('ly',!!S.ly)});
const dsp=bx('ds',[242,140,250,110],[116,244,296,76],''),cv=document.createElement('canvas');dsp.appendChild(cv);const g2=cv.getContext('2d'),fq=new Uint8Array(512),FT="'IBM Plex Mono','Courier New',monospace";
(function dr(){const w=cv.width,h=cv.height,u=h/100,k=KN[cur],v=k.g();if(an)an.getByteFrequencyData(fq);let sg=(FC||(FC=document.fonts.check('12px "IBM Plex Mono"')))+k.n+'|'+(k.t?k.t():'')+'|'+v+'|'+w;for(let i=0;i<24;i++)sg+=','+fq[1+Math.floor(Math.pow(i/24,1.8)*150)];if(sg===dr.sg)return requestAnimationFrame(dr);dr.sg=sg;
g2.clearRect(0,0,w,h);g2.fillStyle='#f2f2f2';g2.font=`${13*u}px ${FT}`;g2.textAlign='left';g2.fillText(k.n.toUpperCase(),w*.07,17*u);g2.textAlign='right';g2.fillText(String(k.t?k.t():Math.round(v*100)).toUpperCase(),w*.93,17*u);
for(let i=0;i<21;i++){g2.fillStyle=i%5?'#6b6b70':'#bdbdc2';g2.fillRect(w*.07+i*w*.043,30*u,1.5*u,(i%5?5:8)*u)}g2.fillStyle='#fff';g2.fillRect(w*.07+v*w*.86-1.5*u,26*u,3*u,16*u);
const n=24,bw=w*.86/n;for(let i=0;i<n;i++){const a=an?fq[1+Math.floor(Math.pow(i/n,1.8)*150)]/255:0,hh=(4+a*40)*u;g2.fillStyle='#f2f2f2';g2.fillRect(w*.07+i*bw,95*u-hh,bw*.6,hh)}requestAnimationFrame(dr)})();
const KW=bx('kw',[20,290,815,226],[14,452,412,248],'','overflow:hidden;border-radius:10px');
wh.forEach((n,i)=>mk(n,'key w',`left:${i*12.5}%;top:0;width:12.5%;height:100%`));
bl.forEach(a=>mk(a[0],'key b',`left:${(a[1]+1)*12.5-3.6}%;top:0;width:7.2%;height:58%`));
addEventListener('keydown',e=>{if(e.code=='Space'&&!e.repeat){e.preventDefault();go(!Q.play)}});
D=PR[0].map(r=>[...r]);roll();rot();
/* ---- наклон, параллакс и физика предметов под стеклом ---- */
let GV=0,GS=16.7,MD=15.5;const PXL=[[deep,1.5],[farW,1.2]];let tx=0,ty=0,gx=0,gy=0;
const aim=(x,y)=>{x=Math.max(-1,Math.min(1,x));y=Math.max(-1,Math.min(1,y));if(Math.abs(x-tx)+Math.abs(y-ty)>.002)AW=240;tx=x;ty=y};
addEventListener('pointermove',e=>aim((e.clientX/innerWidth-.5)*2,(e.clientY/innerHeight-.5)*2));
addEventListener('deviceorientation',e=>{if(e.gamma!=null&&e.beta!=null)aim(e.gamma/25,(e.beta-45)/25)});
document.addEventListener('pointerdown',()=>{try{const r=DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission();r&&r.catch&&r.catch(()=>{})}catch(_){}},{once:true});
const RM=/[?&]calm/.test(location.search);['pointerdown','pointerup','keydown','keyup','touchstart','wheel'].forEach(n=>addEventListener(n,()=>{AW=240},{capture:true,passive:true}));
/* у каждого предмета: масса, положение, угол, высота над платой (h) — чем он ближе к стеклу, тем резче */
const PF=[[230,6,10],[150,30,40],[70,55,60],[130,35,30],[110,20,25]],rd=()=>Math.random()*2-1;
/* удар: корпус подбрасывает предметы вверх (кик — сильнее всего), лёгкие подлетают выше, тяжёлые лениво */
function pulse(g,s=1){if(RM)return;AW=240;const p=PF[g];BD.forEach(b=>{if(!GR[g].includes(b.k))return;const i=1/b.m;
b.vh+=p[0]*s*Math.pow(i,.7)*(.75+Math.random()*.5);b.vx+=rd()*p[1]*s*i;b.vy+=rd()*p[1]*s*i;b.o+=rd()*p[2]*s*Math.pow(i,.8)})}
const LS=PXL.map(()=>[0,0,0,0]);
/* защита от лагов слабых видеокарт: если кадры стабильно долгие — по шагам облегчаем сцену (30 к/с и реже смена фокуса → без гигантов → без самых дальних) */
function degrade(g){const cut=f=>{BD=BD.filter(b=>f(b)?(b.on=0,false):true)};if(g==1)MD=24;else if(g==2)cut(b=>b.z0>.9);else cut(b=>b.z0>.62)}
if(!RM){let t0=performance.now(),bass=0;requestAnimationFrame(function loop(t){if(FR>25&&LK){t0=t;return requestAnimationFrame(loop)}if(t-t0<MD)return requestAnimationFrame(loop);FR++;if(AW<=0){let e0=0;if(an){for(let i=1;i<9;i++)e0+=fq[i];e0/=2040}if(e0>.08||ACT.length)AW=240;else{t0=t;return requestAnimationFrame(loop)}}AW--;GS+=(Math.min(t-t0,100)-GS)*.04;if(GV<3&&FR>150&&GS>(GV?44:34)){GV++;GS=16.7;degrade(GV)}const dt=Math.min(.033,Math.max(.001,(t-t0)/1000));t0=t;
gx+=(tx-gx)*(1-Math.exp(-dt*2.5));gy+=(ty-gy)*(1-Math.exp(-dt*2.5));
PXL.forEach(([e,f],i)=>{const s=LS[i],k=34+i*14,c=2*Math.sqrt(k)*.8;s[2]+=(k*(-tx*22*f-s[0])-c*s[2])*dt;s[3]+=(k*(-ty*16*f-s[1])-c*s[3])*dt;s[0]+=s[2]*dt;s[1]+=s[3]*dt;const tf=`translate(${(OX+s[0]).toFixed(2)}px,${(OY+s[1]).toFixed(2)}px) scale(${CS})`;if(tf!==s.tf){s.tf=tf;e.style.transform=tf}});
let e=0;if(an){for(let i=1;i<9;i++)e+=fq[i];e/=2040}bass+=(e-bass)*.3;const rm=bass*bass;
const nw=ctx?ctx.currentTime:0;LT.str=LT.wnd=LT.hrp=0;for(let i=ACT.length;i--;){const a=ACT[i];if(a.e<nw-.1){ACT.splice(i,1);continue}if(a.s<=nw+.03&&a.e>nw&&a.w>LT[a.c])LT[a.c]=a.w}
BD.forEach(b=>{const lt=LT[b.cl]||0;b.L+=(lt-b.L)*(1-Math.exp(-dt*(lt>b.L?7:2.5)));const im=1/b.m,air=b.h>.6,fr=air?.3:2.6;
/* басы динамика трясут корпус */
if(rm>.01){b.vh+=Math.random()*rm*1400*Math.pow(im,.7)*dt;b.vx+=rd()*rm*900*im*dt;b.vy+=rd()*rm*900*im*dt}
/* наклон = «гравитация» вдоль платы; лёгкая резинка держит предмет у своего места */
b.vx+=(gx*55-2.2*b.x)*dt;b.vy+=(gy*55-2.2*b.y)*dt;const d=Math.exp(-fr*dt);b.vx*=d;b.vy*=d;b.x+=b.vx*dt;b.y+=b.vy*dt;
if(Math.abs(b.x)>42){b.x=Math.sign(b.x)*42;b.vx*=-.4}if(Math.abs(b.y)>42){b.y=Math.sign(b.y)*42;b.vy*=-.4}
b.o+=-5*b.a*dt;b.o*=Math.exp(-(air?.4:2.2)*dt);b.a+=b.o*dt;
b.vh-=520*dt;b.h+=b.vh*dt;if(b.h<0){b.h=0;if(b.vh<-25){b.vh*=-.3;b.o+=rd()*8*im}else b.vh=0}
const hm=b.z0*40+2;if(b.h>hm){b.h=hm;b.vh*=-.35}
const f=b.z0*1.1,lg=1-Math.exp(-dt*(3+(1-b.z0)*9));b.px+=(-gx*22*f-b.px)*lg;b.py+=(-gy*16*f-b.py)*lg;b.sk=1+b.h*.0016+b.L*.1;
/* фокус: чем выше предмет поднят (класс играет / подпрыгнул), тем резче */
if(b.sp[1]!==false){const z=Math.max(.03,b.z0*(1-.82*b.L)-b.h/40);b.tw=Math.round(Math.min(1,Math.max(0,(b.zr-z)/(b.zr-b.zf)))*20)/20}});
draw();
const vk=(38+tx*14).toFixed(1)+'|'+(3-tx*3).toFixed(1)+'|'+(5-ty*2).toFixed(1);if(vk!==loop.vk){loop.vk=vk;const q=vk.split('|');W.style.setProperty('--gx',q[0]+'%');W.style.setProperty('--lx',q[1]+'px');W.style.setProperty('--ly',q[2]+'px')}requestAnimationFrame(loop)})}


/* ---- вход: сцена с названием, линиями и крупными буквами (тексты в HERO) ---- */
(function(){
const HERO={t:'SubVitro—16',keep:[0,3,8,9,10],big:['S','V','1','6'],tag:'Музыка начинается там,<br>где кончается оркестр.',pill:'Листайте вниз'};
const calm=RM;
const SC2=document.createElement('div');SC2.id='sc';document.body.insertBefore(SC2,O);
const ST=$('',SC2);ST.id='stg';
const hd=$('sv-h',ST,'','<div class="sv-t">'+[...HERO.t].map(c=>'<span>'+c+'</span>').join('')+'</div><div class="sv-s"><div class="sv-g2">'+HERO.tag+'</div><div class="sv-p">'+HERO.pill+'</div><button class="sv-th" type="button" aria-label="Сменить тему"></button></div>');
const ch=[...hd.querySelectorAll('.sv-t span')];
/* переключатель темы: явный выбор хранится в localStorage; пока его нет — тема устройства */
{const R=document.documentElement,mq=matchMedia('(prefers-color-scheme:dark)'),tm=[...document.querySelectorAll('meta[name=theme-color]')],bt=hd.querySelector('.sv-th');
 const dk=()=>R.dataset.theme?R.dataset.theme=='dark':mq.matches;
 const syn=()=>{bt.setAttribute('aria-pressed',dk());if(R.dataset.theme)tm.forEach(m=>m.content=dk()?'#1c1c1c':'#fcfcfc')};
 try{const t=localStorage.getItem('sv-theme');if(t=='dark'||t=='light')R.dataset.theme=t}catch(e){}
 bt.onclick=()=>{const t=dk()?'light':'dark';R.dataset.theme=t;try{localStorage.setItem('sv-theme',t)}catch(e){}syn()};
 syn()}
const LN=$('sv-n',ST),rows=[0,1,2].map(()=>$('sv-r',LN,'','<i></i><b></b><i></i><b></b><i></i>')),tag=$('sv-g',LN,'',HERO.tag);
const bg=$('sv-b',ST),grp=[HERO.big.slice(0,2),HERO.big.slice(2)].map((a,i)=>$('L'+(i?' r':''),bg,'',a.map(c=>'<span>'+c+'</span>').join(''))),lt=[...bg.querySelectorAll('span')];
ST.appendChild(W);W.style.cssText+=';width:0;height:0;transform-origin:0 0';GL.style.cssText+=';left:0;top:0;transform:none';
let vw,vh,mob,fs,k0,kF,cy0,cyF,SH,RG,locked=true,lm=-1,lp=-1,vwL=-1,vhM=0,key0='';
const sm=x=>x*x*(3-2*x),cl=x=>Math.max(0,Math.min(1,x)),lr=(a,b,t)=>a+(b-a)*t;
function render(f){const p=calm?1:cl(scrollY/RG);if(!f&&p===lp)return;lp=p;
const e=sm(cl((p-.04)/.9)),t=mob?1:0,sw=lr(855,440,t),sh=lr(560,740,t);
if(t!==lm){lm=t;R.forEach(r=>{const s=r.e.style;s.left=lr(r.w[0],r.n[0],t)+'px';s.top=lr(r.w[1],r.n[1],t)+'px';s.width=lr(r.w[2],r.n[2],t)+'px';s.height=lr(r.w[3],r.n[3],t)+'px'});
GL.style.width=sw+'px';GL.style.height=sh+'px';const cw=Math.round(lr(472,564,t)),chh=Math.round(lr(192,124,t));if(cv.width!==cw||cv.height!==chh){cv.width=cw;cv.height=chh}
CS=Math.max(sw/855,sh/547)*1.09;OX=(sw-855*CS)/2;OY=(sh-547*CS)/2;[SB,SF].forEach(c=>c.style.transform=`translate(${OX}px,${OY}px) scale(${CS})`);buildScene(sw/CS,sh/CS)}
W.style.transform=`translate(${vw/2}px,${lr(cy0,cyF,e)}px) rotate(${(3.5*Math.sin(Math.PI*e)).toFixed(2)}deg) scale(${lr(k0,kF,e)}) translate(${-sw/2}px,${-sh/2}px)`;
const c=sm(cl((p-.2)/.14));ch.forEach((s,i)=>{if(HERO.keep.includes(i)||!s.nw)return;s.style.width=s.nw*(1-c)+'px';s.style.opacity=1-c});
const T=.88*vh+.14*fs;lt.forEach((s,i)=>{s.style.transform=`translateY(${-T*sm(cl((p-[.02,.06,.1,.14][i])/.34))}px)`});
const u=sm(cl((p-.35)/.4));LN.style.transform=`translateY(${-u*vh*.4}px)`;LN.style.opacity=hd.firstChild.nextSibling.firstChild.style.opacity=1-u;
locked=LK=p<.995;W.style.pointerEvents=locked?'none':'';if(calm)hd.style.display=LN.style.display=bg.style.display='none'}
function calc(force){const w=innerWidth;if(w!==vwL){vwL=w;vhM=0}vhM=Math.max(vhM,innerHeight);const m0=w<640||(w<900&&w/innerHeight<.85);vw=w;vh=m0?vhM:innerHeight;mob=m0;const key=vw+'|'+vh+'|'+mob;if(!force&&key===key0)return;key0=key;
let kD=Math.min(1.7,(vw-16)/1000,(vh-24)/700);if(kD<.6)kD=Math.min(1.7,(vw-16)/1000);if(!mob&&vh<520)kD=Math.max(.3,Math.min(1.7,(vw-16)/1000,(vh-80)/560));
const ph=mob?740:560;kF=mob?Math.min(1.3,(vw-16)/440):kD;if(Math.abs(kF-KSC)>.15){KSC=kF;lm=-1}k0=mob?Math.min(Math.max(.381*vh-39-28,.2*vh)/740,.62*vw/440):Math.min(kF,.45*vh/560);cy0=mob?.4805*vh+19.5:.493*vh;cyF=Math.max(vh/2,ph*kF/2+56);
SH=Math.max(vh,cyF+ph*kF/2+24);RG=calm?1:Math.round(vh*1.35);fs=Math.min(.346*vw,(mob?.16:.7)*vh);
ST.style.height=SH+'px';SC2.style.height=SH+RG+'px';ST.style.setProperty('--fs',fs+'px');
rows.forEach((r,i)=>r.style.top=(mob?[.29,.478,.671]:[.22,.43,.63])[i]*vh+'px');tag.style.top=.29*vh+11+'px';
grp.forEach(g=>g.style.top=((mob?.8765:.965)*vh-.864*fs)+'px');
ch.forEach(s=>{s.style.width='';s.nw=s.getBoundingClientRect().width});render(true);requestAnimationFrame(()=>render(true))}
let tk=0;addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(()=>{tk=0;render()})},{passive:true});
addEventListener('resize',()=>calc());addEventListener('orientationchange',()=>{setTimeout(()=>calc(),200);setTimeout(()=>calc(),700)});
/* пока синтезатор не приблизился, клавиши компьютера не играют */
addEventListener('keydown',e=>{if(locked)e.stopImmediatePropagation()},true);
document.fonts&&document.fonts.ready.then(()=>calc(1));calc(1)})();
window.BAKED_=BAKED;LD.imgs(Object.values(PH));

/* ---- плавный скролл колёсиком (мышь/тачпад): страница догоняет цель с инерцией, как на референсе; сенсорные экраны остаются на родном скролле ---- */
(function(){if(matchMedia('(pointer:coarse)').matches)return;
const R=document.documentElement;let cur=scrollY,tg=cur,run=0,lt=0;
const mx=()=>Math.max(0,R.scrollHeight-innerHeight),cl=v=>Math.max(0,Math.min(mx(),v));
const step=t=>{const dt=Math.min(.05,(t-lt)/1000||.016);lt=t;cur+=(tg-cur)*(1-Math.exp(-dt*7.5));
 if(Math.abs(tg-cur)<.4){cur=tg;run=0}scrollTo(0,cur);if(run)requestAnimationFrame(step)};
addEventListener('wheel',e=>{if(e.ctrlKey||e.defaultPrevented||R.classList.contains('ld'))return;e.preventDefault();
 if(!run){cur=tg=scrollY}const k=e.deltaMode==1?33:e.deltaMode==2?innerHeight:1;tg=cl(tg+e.deltaY*k);
 if(!run){run=1;lt=performance.now();requestAnimationFrame(step)}},{passive:false});
/* скролл не от нас (полоса прокрутки, клавиши) — подхватываем текущее положение */
addEventListener('scroll',()=>{if(Math.abs(scrollY-cur)>2){cur=tg=scrollY;run=0}},{passive:true})})();


/* ---- подсказки при наведении (ПК) ---- */
const TIPS={INST:'Выбор инструмента',BAL:'Баланс: электроника ↔ оркестр',CUT:'Яркость звука (фильтр)',ATK:'Атака: скорость нарастания',REL:'Затухание после отпускания',FX:'Эхо и реверберация',VOL:'Громкость',BPM:'Темп',HSE:'Ритм-паттерн: HSE/TRP/BRK/DUB',LYR:'Слои: левые клавиши — электроника, правые — оркестр',ARP:'Арпеджиатор','−':'Октава вниз','+':'Октава вверх'};
W.querySelectorAll('.pl').forEach(e=>{const t=TIPS[(e.querySelector('span')||{}).textContent];if(t)e.title=t});
KN.slice(0,8).forEach(k=>{if(k.e&&TIPS[k.n])k.e.title=TIPS[k.n]});
