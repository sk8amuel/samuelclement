document.addEventListener('DOMContentLoaded',function(){
  var body=document.body;
  if(!body||!body.classList.contains('home'))return;
  var active=true, cool=false;
  var wheelX=0,wheelY=0,lastT=0;
  var wThresh=120, tThresh=80, win=260, cd=900;
  function canRun(){ return !document.body.classList.contains('privacy-open'); }
  function goAbout(){ try{ location.hash='#about'; }catch(_){ location.href='index.html#about'; } }
  function goIndex(){ try{ if(location.hash){ history.replaceState(null,'',location.pathname); } }catch(_){} location.href='index.html'; }
  function trigger(dir){ if(cool||!canRun())return; cool=true; if(dir<0){ goAbout(); } else { goIndex(); } setTimeout(function(){ cool=false; }, cd); }
  function onWheel(e){ if(!active) return; var now=Date.now(); if(now-lastT>win){ wheelX=0; wheelY=0; } lastT=now; wheelX+=e.deltaX||0; wheelY+=e.deltaY||0; var ax=Math.abs(wheelX), ay=Math.abs(wheelY); if(ax>=wThresh&&ax>ay*1.25){ trigger(wheelX<0?-1:1); wheelX=0; wheelY=0; }}
  var startX=0,startY=0,dx=0,dy=0,tracking=false,coarse=(function(){ try{return matchMedia('(hover: none) and (pointer: coarse)').matches;}catch(_){return false;} })();
  function tStart(e){ if(!coarse||!active) return; if(e.touches&&e.touches.length>1) return; var t=e.touches?e.touches[0]:e; startX=t.clientX; startY=t.clientY; dx=0; dy=0; tracking=true; }
  function tMove(e){ if(!tracking) return; var t=e.touches?e.touches[0]:e; dx=t.clientX-startX; dy=t.clientY-startY; if(Math.abs(dy)>Math.abs(dx)) { return; } }
  function tEnd(){ if(!tracking) return; tracking=false; if(Math.abs(dx)>=tThresh&&Math.abs(dx)>Math.abs(dy)*1.2){ trigger(dx<0?-1:1); } }
  window.addEventListener('wheel',onWheel,{passive:true});
  document.addEventListener('touchstart',tStart,{passive:true});
  document.addEventListener('touchmove',tMove,{passive:true});
  document.addEventListener('touchend',tEnd,{passive:true});
  document.addEventListener('touchcancel',tEnd,{passive:true});
});