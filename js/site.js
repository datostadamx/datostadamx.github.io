/* ============ Canvas: red de nodos (hero) ============ */
(function(){
  const canvas = document.getElementById('net');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W, H, particles = [], mouse = {x:-9999, y:-9999};
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const LINK = 150;

  function resize(){
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    ctx.setTransform(DPR,0,0,DPR,0,0);
    const n = Math.min(110, Math.floor(W * H / 16000));
    particles = Array.from({length:n}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-.5)*.35, vy: (Math.random()-.5)*.35,
      r: Math.random()*1.8 + 1.2,
      cream: Math.random() < .18
    }));
  }

  function step(){
    ctx.clearRect(0,0,W,H);
    for(const p of particles){
      p.x += p.vx; p.y += p.vy;
      if(p.x < -20) p.x = W+20; if(p.x > W+20) p.x = -20;
      if(p.y < -20) p.y = H+20; if(p.y > H+20) p.y = -20;
      // ligera atracción al cursor
      const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx,dy);
      if(d < 160 && d > 0){ p.x += dx/d*.25; p.y += dy/d*.25; }
    }
    // líneas
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a = particles[i], b = particles[j];
        const d = Math.hypot(a.x-b.x, a.y-b.y);
        if(d < LINK){
          ctx.strokeStyle = 'rgba(133,220,177,' + (0.28*(1-d/LINK)).toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }
    // nodos
    for(const p of particles){
      ctx.fillStyle = p.cream ? 'rgba(247,230,161,.9)' : 'rgba(133,220,177,.85)';
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    }
    if(!reduced) requestAnimationFrame(step);
  }

  window.addEventListener('resize', resize);
  canvas.parentElement.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  canvas.parentElement.addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999; });
  resize(); step();
})();

/* ============ Nav: scroll + menú móvil ============ */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40), {passive:true});
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); })
  );
}

/* ============ Reveal on scroll ============ */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* ============ FAQ accordion ============ */
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    q.setAttribute('aria-expanded', open);
    a.style.maxHeight = open ? a.scrollHeight + 'px' : '0px';
  });
});
