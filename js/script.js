const NZ="url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1.4 0 0 0 -.38'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>\") 0 0/240px 240px";
const $=(c,p,s,h)=>{const e=document.createElement('div');if(c)e.className=c;if(s)e.style.cssText=s;if(h!=null)e.innerHTML=h;p.appendChild(e);return e};
const W=document.getElementById('w'),O=document.getElementById('o');
const T=(t,x,y,s='')=>$('t',W,`left:${x}px;top:${y}px;${s}`,t);
let sc=1,NA=0,LK=true,FR=0,AW=240,FC=0;

/* ---- матовая плита ---- */
const GL=$('',W,'position:absolute;left:72px;top:96px;width:855px;height:560px;border-radius:8px;overflow:hidden;transform-origin:0 0;background:#a39b86;box-shadow:0 0 0 1px #ffffff80,0 0 0 5px #1b1c1e,0 0 0 7px #2a2b2e,0 0 0 8px #4a4b50,1px 2px 0 9px #0a0a0b,0 18px 40px #0004');
let CS=1.09,OX=0,OY=0;
const pcb=GL;
const deep=$('',pcb,'position:absolute;left:0;top:0;width:855px;height:547px;transform-origin:0 0;will-change:transform');
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
const ALL=[];const ph=(p,L,zb)=>L.forEach(a=>{const k=a[0];if(!PH[k])return;const e=document.createElement('img');e.src=PH[k];e.draggable=false;e.decoding='async';e.dataset.k=k;const z=Math.max(.06,Math.min(.97,zb+(Math.random()-.5)*.16)),h=a[4]*(1.07-.13*z);e.dataset.z=z;e.style.cssText=`position:absolute;left:${a[1]}px;top:${a[2]}px;height:${h}px;width:${h*AR[k]}px;transform:rotate(${a[3]}deg);will-change:transform`;ALL.push(e)});
const FAR=[["harp", 730, -50, -24, 470], ["clar", 470, -30, -22, 470], ["sx1", 430, 250, 52, 250], ["sx1", 100, 190, -52, 240], ["v", 10, 430, -8, 150], ["v", 660, 420, 12, 150], ["acc", 700, 215, 20, 230], ["tr", 210, 400, 160, 230], ["vb", 90, 330, -100, 300], ["bow", 410, 340, -42, 400]],MID=[["acc", 0, 0, -16, 260], ["harp", 165, 5, 8, 520], ["hh", 610, 0, -12, 230], ["sxb", 270, 290, 30, 320], ["ban", 560, 330, -6, 190], ["bow", 330, 110, 62, 380]],NEAR=[["sxr", 40, 100, -14, 420], ["sxg", 340, 10, 12, 400], ["vb", 570, 120, 18, 400], ["hf", 390, 285, -10, 270], ["tr", 20, 290, -35, 280]];
$('',pcb,'position:absolute;inset:0;background:radial-gradient(ellipse at 50% 45%,#0000 30%,#000a 100%);pointer-events:none');
const farW=$('',pcb,'position:absolute;left:0;top:0;width:855px;height:547px;transform-origin:0 0;will-change:transform');
ph(0,FAR,.88);
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
ph(0,MID,.55);ph(0,NEAR,.18);
const KS=Object.keys(AR),rn2=(a,b)=>a+Math.random()*(b-a);
for(let i=0;i<48;i++){const k=KS[(i*7+3)%KS.length],c=i%8,r=(i/8|0)%6,n=i>=38;ph(0,[[k,(c+.5)*107-80+rn2(-40,40),(r+.5)*91-100+rn2(-40,40),rn2(-180,180),n?rn2(110,200):rn2(160,330)]],n?rn2(.08,.3):rn2(.3,.97))}
const mkc=()=>$('',$('',GL,'position:absolute;inset:0;overflow:hidden;border-radius:inherit;pointer-events:none'),'position:absolute;left:0;top:0;width:855px;height:547px;transform-origin:0 0;will-change:transform');
const SB=mkc();
gl("background:radial-gradient(ellipse at 50% 50%,#0000 50%,#0007 100%);box-shadow:inset 0 0 70px 8px #0008");
gl("background:linear-gradient(135deg,#ffffff8c,#ffffff6b),radial-gradient(ellipse at 50% 50%,#fff0 45%,#ffffff66 100%);backdrop-filter:blur(calc(3.5px + var(--mb,0px))) saturate(.85) brightness(1.06);-webkit-backdrop-filter:blur(calc(3.5px + var(--mb,0px))) saturate(.85) brightness(1.06)");
gl("background:"+NZ+";opacity:.55;mix-blend-mode:soft-light");
gl("background:"+NZ2+";opacity:.5;mix-blend-mode:soft-light");
const SF=mkc();
ALL.sort((a,b)=>b.dataset.z-a.dataset.z).forEach(e=>(+e.dataset.z<.4?SF:SB).appendChild(e));
gl("background:linear-gradient(115deg,#fff0 calc(var(--gx,38%) - 14%),#ffffff4d var(--gx,38%),#fff0 calc(var(--gx,38%) + 14%),#ffffff1c 72%,#fff0 85%),radial-gradient(ellipse at var(--gx,38%) 0%,#ffffff40,#fff0 55%),rgba(255,255,255,.1)");
gl("background:"+NZ+";opacity:.3;mix-blend-mode:overlay");
gl("box-shadow:inset 1px 1px 1px #ffffffe6,inset -1px -1px 2px #0006,inset 0 0 0 1px #ffffff8c,inset 0 0 0 5px #ffffff1f,inset 0 0 0 6px #ffffff55,inset 0 0 0 7px #a8d6cf22,inset 0 0 26px 3px #0003,inset 0 -14px 24px -12px #fff5");
/* ---- состояние ---- */
let ctx,pre,filt,shp,trem,dly,fb,wet,mst,lfo,lfoP,lfoF,lfoA,vib,vibG,nb,v=null,held=null,drone=false,arpT;
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
const keys=new Set(),KB='awsedftgyhujk',els=Array.from({length:13},()=>({classList:{add(){},remove(){}}}));
const wh=[0,2,4,5,7,9,11,12],bl=[[1,0],[3,1],[6,3],[8,4],[10,5]];
function mk(s,c,st){const e=$(c,KW,st,KB[s].toUpperCase());e.classList.add(s<6?'el':'or');els[s]=e;e.onpointerdown=ev=>{e.setPointerCapture(ev.pointerId);press(s)};e.onpointerup=e.onpointercancel=()=>unpress(s)}
function press(s){if(keys.has(s))return;keys.add(s);els[s].classList.add('on');play(s)}
function unpress(s){if(!keys.has(s))return;keys.delete(s);els[s].classList.remove('on');release(s)}
addEventListener('keydown',e=>{if(e.repeat||e.ctrlKey||e.metaKey)return;const i=KB.indexOf(e.key.toLowerCase());if(i>=0)press(i)});
addEventListener('keyup',e=>{const i=KB.indexOf(e.key.toLowerCase());if(i>=0)unpress(i)});

/* ---- звук ---- */
let an,duck,rvg,db,nt,tm,D,M,ok=0,vs={};
const Q={bpm:100,sw:.2,dv:.8,sc:0,pump:1,mut:0,chain:0,play:0,step:0,slot:0};
const SC=[[0,3,5,7,10],[0,2,3,5,7,8,10],[0,2,4,5,7,9,11],[0,2,3,5,7,9,10],[0,1,3,5,7,8,10],[0,1,2,3,4,5,6,7,8,9,10,11]],SN=['минор пент.','минор','мажор','дорийский','фригийский','хроматика'],NN=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const sem=m=>{const c=SC[Q.sc],n=c.length;return c[(m%n+n)%n]+12*Math.floor(m/n)};
function init(){if(ctx)return;ctx=new(window.AudioContext||window.webkitAudioContext)();const g=()=>ctx.createGain();
pre=g();shp=ctx.createWaveShaper();shp.oversample='4x';trem=g();duck=g();db=g();dly=ctx.createDelay(1);fb=g();fb.gain.value=.4;wet=g();mst=g();rvg=g();
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
const x={envs,all,os,fls,vgs,acts};if(dur!=null)end(x,t+dur,rel());return x}
function end(x,t,r,live){x.envs.forEach(e=>{const g=e.gain;if(live){g.cancelScheduledValues(t);g.setValueAtTime(g.value,t)}g.setTargetAtTime(0,t,r/4)});x.acts.forEach(a=>a.e=t);
x.all.forEach(o=>{o.stop(t+r*1.6+.05);o.onended=()=>{dcn(lfoP,o.detune);dcn(vibG,o.detune);o.vg&&dcn(o.vg,o.detune)}});
x.all[0].addEventListener('ended',()=>{x.fls.forEach(fl=>dcn(lfoF,fl.frequency));x.vgs.forEach(v=>dcn(vib,v))})}
function stop1(s,fast){const x=vs[s];if(!x)return;delete vs[s];end(x,ctx.currentTime,fast?.03:rel(),1)}
function start(s){stop1(s,1);vs[s]=voice(s,ctx.currentTime,undefined,1,modeOf(s))}
function retune(){if(!ctx)return;const n=ctx.currentTime;for(const k in vs)vs[k].os.forEach(x=>x.o.frequency.setTargetAtTime(base(+k)*x.r,n,.02))}
function refresh(){if(!ctx||held==null)return;if(S.ar)arp();else(keys.size?[...keys]:[held]).forEach(start)}
function arp(){clearTimeout(arpT);if(!S.ar||held==null)return;for(const k in vs)stop1(k,1);let i=0;
const tick=()=>{if(!S.ar||held==null)return;const k=[...keys].sort((a,b)=>a-b),L=k.length>1?k:[held,held+4,held+7,held+12,held+7,held+4],r=15000/Q.bpm;const nn=L[i++%L.length];voice(nn,ctx.currentTime,r/1000*.8,1,modeOf(nn));pulse(4);arpT=setTimeout(tick,r)};tick()}
function play(s){init();ctx.resume();led.classList.add('on');if(S.ar){held=s;arp();return}
const k=Object.keys(vs);if(S.gl&&k.length==1&&held!=null){const x=vs[k[0]];delete vs[k[0]];x.os.forEach(o=>o.o.frequency.setTargetAtTime(base(s)*o.r,ctx.currentTime,.12));vs[s]=x}else start(s);held=s;pulse(4,1.25-s/16)}
function release(s){if(drone&&s===0)return;stop1(s);const k=[...keys];held=k.length?k[k.length-1]:(drone?0:null);if(held==null){clearTimeout(arpT);led.classList.remove('on')}}

/* ---- ударные ---- */
function drum(r,t,s){const v=Q.dv,g=ctx.createGain();g.connect(db);
if(r==0){const o=ctx.createOscillator();o.frequency.setValueAtTime(170,t);o.frequency.exponentialRampToValueAtTime(40,t+.14);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.5);o.connect(g);o.start(t);o.stop(t+.55);
if(Q.pump){duck.gain.setValueAtTime(.25,t);duck.gain.linearRampToValueAtTime(1,t+.22)}return}
const n=ctx.createBufferSource(),f=ctx.createBiquadFilter(),d=r==2?(s%4==2?.2:.05):r==1?.18:.16;n.buffer=nb;n.loop=true;
f.type=r==2?'highpass':'bandpass';f.frequency.value=r==2?7500:r==1?1900:1300;f.Q.value=r==3?1.2:.8;n.connect(f);f.connect(g);
g.gain.setValueAtTime(v*(r==2?.5:.9),t);
if(r==3)[.012,.02,.032,.04].forEach((x,i)=>g.gain.setValueAtTime(v*(i%2?.2:.9),t+x));
g.gain.exponentialRampToValueAtTime(.001,t+d+(r==3?.04:0));n.start(t,Math.random());n.stop(t+d+.1);
if(r==1){const o=ctx.createOscillator(),h=ctx.createGain();o.type='triangle';o.frequency.value=185;o.connect(h);h.connect(db);h.gain.setValueAtTime(v*.6,t);h.gain.exponentialRampToValueAtTime(.001,t+.1);o.start(t);o.stop(t+.12)}}

/* ---- секвенсор ---- */
const euc=(k,n=16)=>Array.from({length:n},(_,i)=>(i*k)%n<k?1:0),cp=o=>JSON.parse(JSON.stringify(o)),cl=v=>Math.max(-5,Math.min(9,v)),SL=[];
const PR=['1000100010001000 0000100000001000 0010001000100010 0000000000001000','1000001000100000 0000000010000000 1010101011101111 0000000010000000','1000001000110000 0000100000001001 1010101010101010 0000000000000000','1000000010000000 0000000010000000 0010001000100011 0000000000001000'].map(s=>s.split(' ').map(r=>[...r].map(Number)));
function roll(){let d=0;M=Array.from({length:16},()=>Math.random()<.35?null:(d=cl(d+[-2,-1,0,1,2,3][Math.random()*6|0])))}
const IM=[...W.querySelectorAll('img')],GR=[['acc','ban','hf'],['tr','sxr','sxg'],['hh','clar'],['sxb','harp'],['vb','sx1','v','bow']];
function tick(s,t){for(let r=0;r<4;r++)if(D[r][s])drum(r,t,s);const m=M[s];if(m!=null)voice(sem(m),t,60/Q.bpm/4*1.8);
setTimeout(()=>{setLd(s);D.forEach((d,r)=>d[s]&&pulse(r));if(m!=null)pulse(4)},Math.max(0,(t-ctx.currentTime)*1000))}
function sched(){const sd=60/Q.bpm/4;while(nt<ctx.currentTime+.12){const s=Q.step;tick(s,nt+(s%2?Q.sw*sd*.6:0));Q.step=(s+1)%16;if(!Q.step){if(Q.mut)mutate();if(Q.chain)pick((Q.slot+1)%4)}nt+=sd}}
function go(on){Q.play=on;pb.classList.toggle('on',on);clearInterval(tm);if(on){init();ctx.resume();Q.step=0;nt=ctx.currentTime+.06;tm=setInterval(sched,25)}else setLd(-1)}
function mutate(){const r=2+(Math.random()*2|0);D[r][Math.random()*16|0]^=1;const j=Math.random()*16|0;M[j]=Math.random()<.3?null:cl((M[j]??0)+(Math.random()<.5?-1:1));sync()}
function pick(i){SL[Q.slot]=cp({D,M});Q.slot=i;const o=cp(SL[i]);D=o.D;M=o.M;sync();sb.forEach((b,j)=>b.classList.toggle('on',j==i))}

/* ---- интерфейс: всё напечатано и закреплено на стекле ---- */
const el=(c,st,h)=>$(c,W,'position:absolute;'+st,h);
const TT=el('','left:72px;top:68px;font-size:11px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;white-space:nowrap;color:var(--fg);opacity:.55','Synth—16');
const TG=el('','left:575px;width:352px;top:34px;text-align:right;font-size:10px;letter-spacing:.1em;line-height:1.45;text-transform:uppercase;color:var(--fg)','');
const R=[],reg=(e,w,n)=>(R.push({e,w,n}),e),bx=(c,w,n,h,st='')=>reg($(c,GL,'position:absolute;'+st,h),w,n);
const sq=(a)=>[a[0],a[1],a[2],a[2]];
const BD_='M-10,-29L10,-29Q12,-12 29,-10L29,10Q12,12 10,29L-10,29Q-12,12 -29,10L-29,-10Q-12,-12 -10,-29Z',BOLT=(i,r)=>`<i><svg viewBox="-50 -50 100 100"><defs><linearGradient id="bg${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#232325"/><stop offset=".55" stop-color="#6b6b6f"/><stop offset="1" stop-color="#b0b0b4"/></linearGradient></defs><g transform="rotate(${r}) scale(1.02)"><path d="${BD_}" transform="translate(1.5,2.2)" fill="#fffd"/><path d="${BD_}" fill="url(#bg${i})"/><path d="${BD_}" transform="scale(.6)" fill="#141416" opacity=".6"/><path d="${BD_}" fill="none" stroke="#000a" stroke-width="1.1"/></g></svg></i>`;
[[[10,10],[10,10],28],[[813,10],[398,10],73],[[10,518],[10,702],-17],[[813,518],[398,702],51]].forEach((a,i)=>bx('bolt',[...a[0],32,32],[...a[1],32,32],BOLT(i,a[2])));

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
const led={classList:{add(){},remove(){}}},setLd=()=>{},sync=()=>{},sb=[];
addEventListener('keydown',e=>{if(e.code=='Space'&&!e.repeat){e.preventDefault();go(!Q.play)}});
D=PR[0].map(r=>[...r]);roll();rot();
function lay(n){const w=n?440:855,h=n?740:560;R.forEach(r=>{const a=n?r.n:r.w,t=r.e.style;t.left=a[0]+'px';t.top=a[1]+'px';t.width=a[2]+'px';t.height=a[3]+'px'});
cv.width=(n?282:236)*2;cv.height=(n?62:96)*2;CS=Math.max(w/855,h/547)*1.09;OX=(w-855*CS)/2;OY=(h-547*CS)/2;[SB,SF].forEach(c=>c.style.transform=`translate(${OX}px,${OY}px) scale(${CS})`)}
let LN=-1;
function fit(){const vw=innerWidth,vh=innerHeight,n=vw<640||(vw<900&&vw/vh<.85);if(n!==LN){LN=n;lay(n)}NA=n;const g=GL.style;
if(!n){const H=700;let k=Math.min(1.7,(vw-16)/1000,(vh-24)/H);if(k<.6)k=Math.min(1.7,(vw-16)/1000);
g.left='72px';g.top='96px';g.width='855px';g.height='560px';g.transform='none';TT.style.cssText+=';left:72px;top:68px;font-size:11px';TG.style.display='';
W.style.width='1000px';W.style.height=H+'px';W.style.transform=`scale(${k})`;O.style.width=1000*k+'px';O.style.height=H*k+'px';sc=k;return}
const k=Math.min(1.3,(vw-16)/440);g.left=(vw-440*k)/2+'px';g.top='60px';g.width='440px';g.height='740px';g.transform=`scale(${k})`;
TT.style.cssText+=';left:'+g.left+';top:36px;font-size:11px';TG.style.display='none';const Y=60+740*k+20;
W.style.width=vw+'px';W.style.height=Y+'px';W.style.transform='none';O.style.width=vw+'px';O.style.height=Y+'px';sc=k}
addEventListener('resize',fit);addEventListener('orientationchange',fit);fit();

/* ---- наклон, параллакс и физика предметов под стеклом ---- */
const PXL=[[deep,1.5],[farW,1.2]];let tx=0,ty=0,gx=0,gy=0;
const aim=(x,y)=>{x=Math.max(-1,Math.min(1,x));y=Math.max(-1,Math.min(1,y));if(Math.abs(x-tx)+Math.abs(y-ty)>.002)AW=240;tx=x;ty=y};
addEventListener('pointermove',e=>aim((e.clientX/innerWidth-.5)*2,(e.clientY/innerHeight-.5)*2));
addEventListener('deviceorientation',e=>{if(e.gamma!=null&&e.beta!=null)aim(e.gamma/25,(e.beta-45)/25)});
document.addEventListener('pointerdown',()=>{try{DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission()}catch(_){}},{once:true});
const RM=/[?&]calm/.test(location.search);['pointerdown','pointerup','keydown','keyup','touchstart','wheel'].forEach(n=>addEventListener(n,()=>{AW=240},{capture:true,passive:true}));
/* у каждого предмета: масса, положение, угол, высота над платой (h) — чем он ближе к стеклу, тем резче */
const BD=IM.map(e=>{const l=e.parentNode;return{e,z0:+e.dataset.z,px:0,py:0,m:Math.max(.5,parseFloat(e.style.width)*parseFloat(e.style.height)/42000),x:0,y:0,vx:0,vy:0,a:0,o:0,h:0,vh:0,fh:-9,L:0,cl:CL[e.dataset.k]}});
const PF=[[230,6,10],[150,30,40],[70,55,60],[130,35,30],[110,20,25]],rd=()=>Math.random()*2-1;
/* удар: корпус подбрасывает предметы вверх (кик — сильнее всего), лёгкие подлетают выше, тяжёлые лениво */
function pulse(g,s=1){if(RM)return;AW=240;const p=PF[g];BD.forEach(b=>{if(!GR[g].includes(b.e.dataset.k))return;const i=1/b.m;
b.vh+=p[0]*s*Math.pow(i,.7)*(.75+Math.random()*.5);b.vx+=rd()*p[1]*s*i;b.vy+=rd()*p[1]*s*i;b.o+=rd()*p[2]*s*Math.pow(i,.8)})}
const LS=PXL.map(()=>[0,0,0,0]);
if(!RM){let t0=performance.now(),bass=0;requestAnimationFrame(function loop(t){if(FR>25&&LK){t0=t;return requestAnimationFrame(loop)}FR++;if(AW<=0){let e0=0;if(an){for(let i=1;i<9;i++)e0+=fq[i];e0/=2040}if(e0>.08||ACT.length)AW=240;else{t0=t;return requestAnimationFrame(loop)}}AW--;const dt=Math.min(.033,Math.max(.001,(t-t0)/1000));t0=t;
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
const f=b.z0*1.1,lg=1-Math.exp(-dt*(3+(1-b.z0)*9));b.px+=(-gx*22*f-b.px)*lg;b.py+=(-gy*16*f-b.py)*lg;const st=b.e.style,tl=`${(b.x+b.px).toFixed(2)}px ${(b.y+b.py).toFixed(2)}px`,ro=b.a.toFixed(2)+'deg',sk=(1+b.h*.0016+b.L*.1).toFixed(4);if(tl!==b.tl){b.tl=tl;st.translate=tl}if(ro!==b.ro){b.ro=ro;st.rotate=ro}if(sk!==b.sk){b.sk=sk;st.scale=sk}
const fk=b.h+b.L*40;if(Math.abs(fk-b.fh)>1.4){b.fh=fk;const z=Math.max(.03,b.z0*(1-.82*b.L)-b.h/40),q=1-z;
st.filter=`drop-shadow(${(3+q*20).toFixed(1)}px ${(5+q*28).toFixed(1)}px ${(3+q*16).toFixed(1)}px #000b) blur(${(.35+8.5*Math.pow(z,1.4)).toFixed(1)}px) brightness(${(.72+.4*(1-z)).toFixed(2)}) contrast(${(.8+.2*(1-z)).toFixed(2)}) saturate(.9)`}});
const vk=(38+tx*14).toFixed(1)+'|'+(3-tx*3).toFixed(1)+'|'+(5-ty*2).toFixed(1);if(vk!==loop.vk){loop.vk=vk;const q=vk.split('|');W.style.setProperty('--gx',q[0]+'%');W.style.setProperty('--lx',q[1]+'px');W.style.setProperty('--ly',q[2]+'px')}requestAnimationFrame(loop)})}
else BD.forEach(b=>b.e.style.filter=`drop-shadow(4px 8px 5px #000b) blur(${(.35+8.5*Math.pow(b.z0,1.4)).toFixed(1)}px) brightness(${(.72+.38*(1-b.z0)).toFixed(2)})`);

/* ---- вход: сцена как на hikeys1977.com (тексты в HERO — заглушки, потом заменим) ---- */
(function(){
const HERO={t:'SubVitro—16',keep:[0,3,8,9,10],big:['S','V','1','6'],tag:'Музыка начинается там,<br>где кончается оркестр.',pill:'Листайте вниз'};
removeEventListener('resize',fit);removeEventListener('orientationchange',fit);
const calm=/[?&]calm/.test(location.search);
const SC2=document.createElement('div');SC2.id='sc';document.body.insertBefore(SC2,O);O.style.display='none';
const ST=$('',SC2);ST.id='stg';
const hd=$('hk-h',ST,'','<div class="hk-t">'+[...HERO.t].map(c=>'<span>'+c+'</span>').join('')+'</div><div class="hk-p">'+HERO.pill+'</div>');
const ch=[...hd.querySelectorAll('.hk-t span')];
const LN=$('hk-n',ST),rows=[0,1,2].map(()=>$('hk-r',LN,'','<i></i><b></b><i></i><b></b><i></i>')),tag=$('hk-g',LN,'',HERO.tag);
const bg=$('hk-b',ST),grp=[HERO.big.slice(0,2),HERO.big.slice(2)].map((a,i)=>$('L'+(i?' r':''),bg,'',a.map(c=>'<span>'+c+'</span>').join(''))),lt=[...bg.querySelectorAll('span')];
ST.appendChild(W);W.style.cssText+=';width:0;height:0;transform-origin:0 0';GL.style.cssText+=';left:0;top:0;transform:none';TT.style.display='none';
let vw,vh,mob,fs,k0,kF,cy0,cyF,SH,RG,locked=true,lm=-1,lp=-1,vwL=-1,vhM=0,key0='';
const sm=x=>x*x*(3-2*x),cl=x=>Math.max(0,Math.min(1,x)),lr=(a,b,t)=>a+(b-a)*t;
function render(f){const p=calm?1:cl(scrollY/RG);if(!f&&p===lp)return;lp=p;
const e=sm(cl((p-.04)/.9)),t=mob?1:0,sw=lr(855,440,t),sh=lr(560,740,t);
if(t!==lm){lm=t;R.forEach(r=>{const s=r.e.style;s.left=lr(r.w[0],r.n[0],t)+'px';s.top=lr(r.w[1],r.n[1],t)+'px';s.width=lr(r.w[2],r.n[2],t)+'px';s.height=lr(r.w[3],r.n[3],t)+'px'});
GL.style.width=sw+'px';GL.style.height=sh+'px';const cw=Math.round(lr(472,564,t)),chh=Math.round(lr(192,124,t));if(cv.width!==cw||cv.height!==chh){cv.width=cw;cv.height=chh}
CS=Math.max(sw/855,sh/547)*1.09;OX=(sw-855*CS)/2;OY=(sh-547*CS)/2;[SB,SF].forEach(c=>c.style.transform=`translate(${OX}px,${OY}px) scale(${CS})`)}
W.style.transform=`translate(${vw/2}px,${lr(cy0,cyF,e)}px) rotate(${(3.5*Math.sin(Math.PI*e)).toFixed(2)}deg) scale(${lr(k0,kF,e)}) translate(${-sw/2}px,${-sh/2}px)`;
const c=sm(cl((p-.2)/.14));ch.forEach((s,i)=>{if(HERO.keep.includes(i)||!s.nw)return;s.style.width=s.nw*(1-c)+'px';s.style.opacity=1-c});
const T=(mob?.88:.97)*vh+.14*fs;lt.forEach((s,i)=>{s.style.transform=`translateY(${-T*sm(cl((p-[.02,.06,.1,.14][i])/.34))}px)`});
const u=sm(cl((p-.35)/.4));LN.style.transform=`translateY(${-u*vh*.4}px)`;LN.style.opacity=1-u;
locked=LK=p<.995;W.style.pointerEvents=locked?'none':'';if(calm)hd.style.display=LN.style.display=bg.style.display='none'}
function calc(force){const w=innerWidth;if(w!==vwL){vwL=w;vhM=0}vhM=Math.max(vhM,innerHeight);const m0=w<640||(w<900&&w/innerHeight<.85);vw=w;vh=m0?vhM:innerHeight;mob=m0;const key=vw+'|'+vh+'|'+mob;if(!force&&key===key0)return;key0=key;
let kD=Math.min(1.7,(vw-16)/1000,(vh-24)/700);if(kD<.6)kD=Math.min(1.7,(vw-16)/1000);if(!mob&&vh<520)kD=Math.max(.3,Math.min(1.7,(vw-16)/1000,(vh-80)/560));
const ph=mob?740:560;kF=mob?Math.min(1.3,(vw-16)/440):kD;k0=mob?Math.min(Math.max(.381*vh-39-28,.2*vh)/740,.62*vw/440):Math.min(.7*kF,.54*vh/ph,.55*vw/855);cy0=mob?.4805*vh+19.5:.493*vh;cyF=Math.max(vh/2,ph*kF/2+56);
SH=Math.max(vh,cyF+ph*kF/2+24);RG=calm?1:Math.round(vh*1.35);fs=mob?Math.min(.346*vw,.16*vh):Math.min(.36*vw,.58*vh);
ST.style.height=SH+'px';SC2.style.height=SH+RG+'px';ST.style.setProperty('--fs',fs+'px');ST.style.setProperty('--k',(mob?1:Math.max(1,Math.min(1.9,vw/1280))).toFixed(3));
rows.forEach((r,i)=>r.style.top=[.29,.478,.671][i]*vh+'px');if(mob){tag.style.left='';tag.style.right='';tag.style.top='calc('+(.29*vh)+'px + var(--tg))'}else{const sr=ST.getBoundingClientRect(),pr=hd.querySelector('.hk-p').getBoundingClientRect();tag.style.left='auto';tag.style.right=(sr.right-pr.left+Math.max(24,.03*vw))+'px';tag.style.top=(pr.top-sr.top+pr.height/2-tag.offsetHeight/2)+'px'}
grp.forEach(g=>g.style.top=((mob?.8765:.955)*vh-.864*fs)+'px');
ch.forEach(s=>{s.style.width='';s.nw=s.getBoundingClientRect().width});render(true);requestAnimationFrame(()=>render(true))}
let tk=0;addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(()=>{tk=0;render()})},{passive:true});
addEventListener('resize',()=>calc());addEventListener('orientationchange',()=>{setTimeout(()=>calc(),200);setTimeout(()=>calc(),700)});
/* пока синтезатор не приблизился, клавиши компьютера не играют */
addEventListener('keydown',e=>{if(locked)e.stopImmediatePropagation()},true);
document.fonts&&document.fonts.ready.then(()=>calc(1));calc(1)})();
