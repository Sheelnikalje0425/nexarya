// ── CURSOR ────────────────────────────────────────────────────
const cursor=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
function animateCursor(){
  cursor.style.left=mx+'px';cursor.style.top=my+'px';
  rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();
document.querySelectorAll('a,button,.service-card,.project-card,.team-card,.pricing-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.transform='translate(-50%,-50%) scale(2)';ring.style.transform='translate(-50%,-50%) scale(1.5)';ring.style.borderColor='rgba(0,245,255,0.8)';});
  el.addEventListener('mouseleave',()=>{cursor.style.transform='translate(-50%,-50%) scale(1)';ring.style.transform='translate(-50%,-50%) scale(1)';ring.style.borderColor='rgba(0,245,255,0.5)';});
});

// ── CANVAS ───────────────────────────────────────────────────
const canvas=document.getElementById('bg-canvas'),ctx=canvas.getContext('2d');
let W,H,mouseX=0,mouseY=0;
function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
resize();window.addEventListener('resize',resize);
document.addEventListener('mousemove',e=>{mouseX=e.clientX;mouseY=e.clientY;});
class Particle{
  constructor(){this.reset();}
  reset(){this.x=Math.random()*W;this.y=Math.random()*H;this.vx=(Math.random()-.5)*.3;this.vy=(Math.random()-.5)*.3;this.size=Math.random()*1.5+.3;this.life=Math.random()*.5+.1;this.maxLife=this.life;this.color=['#00f5ff','#7b2fff','#00ff88','#ff2d7a'][Math.floor(Math.random()*4)];}
  update(){const dx=mouseX-this.x,dy=mouseY-this.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<200){this.vx+=dx/dist*.03;this.vy+=dy/dist*.03;}this.vx=Math.max(-1.5,Math.min(1.5,this.vx));this.vy=Math.max(-1.5,Math.min(1.5,this.vy));this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>W||this.y<0||this.y>H)this.reset();}
  draw(){ctx.save();ctx.globalAlpha=this.life/this.maxLife;ctx.fillStyle=this.color;ctx.shadowBlur=8;ctx.shadowColor=this.color;ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fill();ctx.restore();}
}
const particles=[];for(let i=0;i<140;i++)particles.push(new Particle());
function drawGrid(){ctx.save();ctx.strokeStyle='rgba(0,245,255,0.03)';ctx.lineWidth=1;const gs=80;for(let x=0;x<W;x+=gs){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}for(let y=0;y<H;y+=gs){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}ctx.restore();}
function drawConnections(){const maxDist=120;for(let i=0;i<particles.length;i++){for(let j=i+1;j<particles.length;j++){const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<maxDist){ctx.save();ctx.globalAlpha=(1-d/maxDist)*.15;ctx.strokeStyle='#00f5ff';ctx.lineWidth=.5;ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.stroke();ctx.restore();}}}}
const orbs=[{x:.15,y:.2,r:200,color:'#00f5ff',speed:.0003,angle:0},{x:.85,y:.7,r:250,color:'#7b2fff',speed:.0004,angle:2},{x:.5,y:.5,r:180,color:'#ff2d7a',speed:.0002,angle:4}];
function drawOrbs(t){orbs.forEach(orb=>{const ox=orb.x*W+Math.cos(t*orb.speed+orb.angle)*60,oy=orb.y*H+Math.sin(t*orb.speed+orb.angle)*60,grad=ctx.createRadialGradient(ox,oy,0,ox,oy,orb.r);grad.addColorStop(0,orb.color+'0a');grad.addColorStop(1,'transparent');ctx.fillStyle=grad;ctx.beginPath();ctx.arc(ox,oy,orb.r,0,Math.PI*2);ctx.fill();});}
let t=0;function renderCanvas(){t++;ctx.clearRect(0,0,W,H);drawGrid();drawOrbs(t);particles.forEach(p=>{p.update();p.draw();});drawConnections();requestAnimationFrame(renderCanvas);}
renderCanvas();

// ── NAVBAR ───────────────────────────────────────────────────
window.addEventListener('scroll',()=>document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50));

// ── SCROLL REVEAL ─────────────────────────────────────────────
const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry,i)=>{if(entry.isIntersecting)setTimeout(()=>entry.target.classList.add('visible'),i*80);});
},{threshold:.1});
document.querySelectorAll('.service-card,.stat-item,.why-point,.project-card,.pricing-card,.team-card,.blog-card,.reveal').forEach(el=>observer.observe(el));

// ── COUNTER ANIMATION ─────────────────────────────────────────
const counterObs=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting){const el=entry.target.querySelector('.stat-num');if(el&&!el.dataset.done){el.dataset.done=true;const target=+el.dataset.target;let current=0;const step=target/60;const timer=setInterval(()=>{current+=step;if(current>=target){current=target;clearInterval(timer);}el.textContent=(target===99?Math.floor(current)+'%':Math.floor(current)+'+');},25);}}});
},{threshold:.5});
document.querySelectorAll('.stat-item').forEach(el=>counterObs.observe(el));

// ── MOBILE MENU ───────────────────────────────────────────────
function toggleMobileMenu(){
  const links=document.querySelector('.nav-links');
  if(links.style.display==='flex'){links.style.display='';}
  else{Object.assign(links.style,{display:'flex','flex-direction':'column',position:'fixed',top:'60px',left:'0',right:'0',background:'rgba(2,4,8,0.98)',padding:'30px 24px','border-bottom':'1px solid rgba(0,245,255,0.12)',gap:'20px','z-index':'999'});}
}

// ── FLASH AUTO DISMISS ────────────────────────────────────────
setTimeout(()=>document.querySelectorAll('.flash-msg').forEach(el=>el.remove()),5000);
