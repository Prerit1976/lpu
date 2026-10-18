/* Poorit Technologies · GenAI Foundations course · shared runtime */
(function(){
  const KEY='poorit_genai_unlocked', PKEY='poorit_genai_progress';
  const root = document.currentScript.getAttribute('data-root') || '';
  const pageId = document.body.getAttribute('data-page') || '';

  /* ---- gate: redirect module pages when not unlocked ---- */
  let unlocked=false; try{ unlocked = localStorage.getItem(KEY)==='1'; }catch(e){}
  if(!unlocked && pageId && pageId!=='home'){ var rel=location.pathname.split('/genai-course/').pop(); location.replace(root+'index.html?next='+encodeURIComponent(rel)); return; }

  /* ---- protection: deterrents only ---- */
  document.body.classList.add('protected');
  document.addEventListener('contextmenu', e=>e.preventDefault());
  document.addEventListener('dragstart', e=>e.preventDefault());
  document.addEventListener('copy', e=>{ if(!/^(INPUT|TEXTAREA)$/.test(e.target.tagName)){ e.preventDefault(); } });
  document.addEventListener('keydown', e=>{
    const k=e.key.toLowerCase();
    if((e.ctrlKey||e.metaKey) && ['s','p','u'].includes(k)){ e.preventDefault(); }
    if((e.ctrlKey||e.metaKey) && e.shiftKey && ['i','j','c'].includes(k)){ e.preventDefault(); }
    if(e.key==='F12'){ e.preventDefault(); }
  });
  window.addEventListener('beforeprint', ()=>{});

  /* ---- watermark ---- */
  const wm=document.createElement('div'); wm.className='wm'; wm.setAttribute('aria-hidden','true');
  const cols=6, rows=10;
  for(let r=0;r<rows;r++){ for(let c=0;c<cols;c++){ const s=document.createElement('span'); s.textContent='POORIT TECHNOLOGIES · © '+new Date().getFullYear();
    s.style.left=(c*22-10+(r%2)*8)+'vw'; s.style.top=(r*12-4)+'vh'; wm.appendChild(s);} }
  document.body.appendChild(wm);
  const pb=document.createElement('div'); pb.className='print-block';
  pb.innerHTML='<strong>Poorit Technologies — GenAI Foundations.</strong><br>This course material is licensed for personal online viewing only. Printing and copying are not permitted. Contact Poorit Technologies for licensing: https://poorit.in';
  document.body.appendChild(pb);

  /* ---- progress ---- */
  const progress = () => { try{ return JSON.parse(localStorage.getItem(PKEY)||'{}'); }catch(e){ return {}; } };
  window.PooritCourse = {
    isDone: id => !!progress()[id],
    setDone: (id,v) => { const p=progress(); if(v) p[id]=1; else delete p[id]; try{ localStorage.setItem(PKEY, JSON.stringify(p)); }catch(e){} },
    progress,
    unlock: () => { try{ localStorage.setItem(KEY,'1'); }catch(e){} },
    isUnlocked: () => unlocked,
    reset: () => { try{ localStorage.removeItem(KEY); localStorage.removeItem(PKEY); }catch(e){} }
  };

  /* module "mark complete" checkbox */
  const box=document.getElementById('doneBox');
  if(box && pageId){ box.checked=window.PooritCourse.isDone(pageId); box.addEventListener('change',()=>window.PooritCourse.setDone(pageId, box.checked)); }

  /* footer year */
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
