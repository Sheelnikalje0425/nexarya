// ── BG CANVAS ─────────────────────────────────────────────────
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H;
function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resize(); window.addEventListener('resize', resize);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W; this.y = Math.random() * H;
    this.vx = (Math.random() - .5) * .25; this.vy = (Math.random() - .5) * .25;
    this.size = Math.random() * 1.2 + .3;
    this.opacity = Math.random() * .4 + .1;
    this.color = ['#cdaa80','#997953','#e8c99a','#8fa8c0'][Math.floor(Math.random()*4)];
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  }
  draw() {
    ctx.save(); ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color; ctx.shadowBlur = 6; ctx.shadowColor = this.color;
    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
}

const particles = [];
for (let i = 0; i < 80; i++) particles.push(new Particle());

function drawGrid() {
  ctx.save(); ctx.strokeStyle = 'rgba(205,170,128,0.03)'; ctx.lineWidth = 1;
  const gs = 90;
  for (let x = 0; x < W; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  ctx.restore();
}

function drawConnections() {
  const maxDist = 130;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < maxDist) {
        ctx.save(); ctx.globalAlpha = (1 - d / maxDist) * .1;
        ctx.strokeStyle = '#cdaa80'; ctx.lineWidth = .5;
        ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); ctx.restore();
      }
    }
  }
}

const orbs = [
  { x: .1, y: .2, r: 220, color: '#213a56', speed: .0003, angle: 0 },
  { x: .9, y: .75, r: 280, color: '#1a2a3f', speed: .0004, angle: 2 },
  { x: .5, y: .9, r: 200, color: '#cdaa8018', speed: .0002, angle: 4 }
];

let t = 0;
function renderCanvas() {
  t++;
  ctx.clearRect(0, 0, W, H);
  drawGrid();
  orbs.forEach(orb => {
    const ox = orb.x * W + Math.cos(t * orb.speed + orb.angle) * 50;
    const oy = orb.y * H + Math.sin(t * orb.speed + orb.angle) * 50;
    const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
    grad.addColorStop(0, orb.color + '18'); grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(ox, oy, orb.r, 0, Math.PI * 2); ctx.fill();
  });
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(renderCanvas);
}
renderCanvas();

// ── NAVBAR ───────────────────────────────────────────────────
window.addEventListener('scroll', () =>
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50)
);

// ── SCROLL REVEAL ─────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('visible'), i * 80);
  });
}, { threshold: .1 });
document.querySelectorAll('.service-card,.stat-item,.why-point,.project-card,.pricing-card,.team-card,.blog-card,.reveal').forEach(el => observer.observe(el));

// ── MOBILE MENU ───────────────────────────────────────────────
function toggleMobileMenu() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') { links.style.display = ''; }
  else {
    Object.assign(links.style, {
      display: 'flex', 'flex-direction': 'column', position: 'fixed',
      top: '60px', left: '0', right: '0',
      background: 'rgba(10,22,40,0.98)', padding: '30px 5%',
      'border-bottom': '1px solid rgba(205,170,128,0.2)',
      gap: '20px', 'z-index': '999'
    });
  }
}

// ── FLASH AUTO DISMISS ────────────────────────────────────────
setTimeout(() => document.querySelectorAll('.flash-msg').forEach(el => el.remove()), 5000);
