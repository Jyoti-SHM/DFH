function escHTML(s){
  return String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function money(n,l){
  return typeof n==='number' ? '₹'+n.toLocaleString('en-IN') : (l || 'Pricing on request');
}
function panel(sid,tid){
  const s=SERVICES.find(x=>x.id===sid);
  const rec=(HOTEL_PLAN_MAP[tid] && HOTEL_PLAN_MAP[tid][sid]) || [];
  const tiers=PLANS[sid].tiers.filter(t=>!rec.length || rec.includes(t.key));
  return `
    <div class="service-block-head">
      <div>
        <div class="fname">${escHTML(s.name)}</div>
        <div class="fnote" style="margin-top:6px">${escHTML((s.perType&&s.perType[tid])||'')}</div>
      </div>
      <a class="chip" href="service-${sid}.html">Full service page →</a>
    </div>
    <div style="margin:16px 0 6px"><span class="badge badge-yes">Recommended: ${rec.map(k=>TIER_META[k].label).join(', ')}</span></div>
    <div class="tier-grid" style="margin-top:18px">
      ${tiers.map((t,i)=>`<div class="tier ${i===Math.min(1,tiers.length-1)?'mid':''}">
        <div class="tnum">TIER ${i+1} OF ${tiers.length}</div>
        <div class="tname">${escHTML(t.name)}</div>
        <div class="tprice">${money(t.price,t.priceLabel)}</div>
        <ul>${t.items.map(x=>`<li>${escHTML(x)}</li>`).join('')}</ul>
      </div>`).join('')}
    </div>`;
}
window.renderServicePanel=panel;
window.renderTypePanel=panel;

document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.getElementById('primaryNav');
  const btn=document.getElementById('hamburgerBtn');
  if(btn&&nav) btn.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('.primary a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));

  const st=document.getElementById('svcTabs'), sp=document.getElementById('svcPanel');
  if(st&&sp) st.addEventListener('click',e=>{
    const b=e.target.closest('.tabbtn'); if(!b)return;
    st.querySelectorAll('.tabbtn').forEach(x=>x.classList.toggle('active',x===b));
    sp.innerHTML=panel(b.dataset.svc,document.body.dataset.hotel);
  });

  const tt=document.getElementById('typeTabs'), tp=document.getElementById('typePanel');
  if(tt&&tp) tt.addEventListener('click',e=>{
    const b=e.target.closest('.tabbtn'); if(!b)return;
    tt.querySelectorAll('.tabbtn').forEach(x=>x.classList.toggle('active',x===b));
    tp.innerHTML=panel(document.body.dataset.service,b.dataset.type);
  });

  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const n=document.getElementById('cf-name');
      const em=document.getElementById('cf-email');
      const m=document.getElementById('cf-message');
      let ok=true;
      [[n,'Please enter your name.'],[em,'Please enter a valid email address.'],[m,"Let us know what you're trying to fix."]].forEach(([el,msg])=>{
        let good=!!el.value.trim();
        if(el===em) good=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
        el.closest('.field').classList.toggle('invalid',!good);
        document.getElementById('err-'+el.id.slice(3)).textContent=good?'':msg;
        if(!good&&ok) el.focus();
        ok=ok&&good;
      });
      if(!ok)return;
      const v=id=>document.getElementById(id).value.trim();
      const lines=[
        'Name: '+v('cf-name'),'Email: '+v('cf-email'),
        v('cf-phone')?'Phone: '+v('cf-phone'):null,
        v('cf-property')?'Property: '+v('cf-property'):null,
        v('cf-type')?'Property type: '+v('cf-type'):null,
        v('cf-service')?'Service of interest: '+v('cf-service'):null,
        '',v('cf-message')
      ].filter(Boolean).join('\n');
      location.href='mailto:hello@digitalforhotels.studio?subject='+encodeURIComponent('Proposal request'+(v('cf-property')?' — '+v('cf-property'):''))+'&body='+encodeURIComponent(lines);
      document.getElementById('cf-fallback').hidden=false;
      document.getElementById('cf-fallback-text').value=lines;
    });
    const c=document.getElementById('cf-copy');
    if(c)c.addEventListener('click',()=>{
      const ta=document.getElementById('cf-fallback-text'); ta.select();
      if(navigator.clipboard) navigator.clipboard.writeText(ta.value);
      c.textContent='Copied ✓'; setTimeout(()=>c.textContent='Copy message',2000);
    });
  }
});
