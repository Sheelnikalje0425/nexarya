// Nexarya — minimal JS
'use strict';

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// Nav scroll state
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 10
      ? 'rgba(255,255,255,0.1)'
      : 'rgba(255,255,255,0.08)';
  }, { passive: true });
}

// Auto-dismiss flash messages
document.querySelectorAll('.flash').forEach(el => {
  setTimeout(() => {
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 300);
  }, 4000);
});

// Intercept JSON responses for admin actions and show toasts instead
async function postJson(url, body){
  const res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  });
  let data = null; let text = null;
  try { data = await res.json(); } catch(e){
    try { text = await res.text(); } catch(e2){ text = null; }
  }
  return {status: res.status, data, text};
}

// Replace inline updateStatus calls in admin pages to use postJson when available
window.updateStatus = async function(orderId, newStatus){
  try{
    if(!newStatus){
      const sel = document.getElementById(`sel-${orderId}`) || document.querySelector(`select[onchange*="${orderId}"]`);
      newStatus = sel ? sel.value : newStatus;
    }
    const r = await postJson(`/admin/order/${orderId}/update`, {status: newStatus});
    if(r && r.data && r.data.success){
      showToast(`Order #${orderId} updated: ${newStatus}`, 'success');
      const badge = document.getElementById(`badge-${orderId}`);
      if(badge) { badge.textContent = newStatus; badge.className = `status-badge s-${newStatus.toLowerCase().replace(/ /g,'-')}`; }
    } else if(r && (r.status >=200 && r.status < 300)){
      // successful HTTP status but non-JSON response; still treat as success
      showToast(`Order #${orderId} updated`, 'success');
      const badge = document.getElementById(`badge-${orderId}`);
      if(badge) { badge.textContent = newStatus; badge.className = `status-badge s-${newStatus.toLowerCase().replace(/ /g,'-')}`; }
    } else if(r && r.data){
      showToast(r.data.error || 'Update failed', 'error');
    } else {
      showToast('Update failed (non-JSON response)', 'error');
    }
  } catch(err){
    showToast('Network error — please try again', 'error');
  }
}

// --- Toast utility (self-contained) ---
function _ensureToastContainer(){
  let c = document.getElementById('toastContainer');
  if(!c){
    c = document.createElement('div');
    c.id = 'toastContainer';
    c.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:10px;';
    document.body.appendChild(c);
  }
  return c;
}

function showToast(message, type='success', timeout=3000){
  const c = _ensureToastContainer();
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.style.cssText = 'padding:12px 16px;border-radius:8px;min-width:220px;display:flex;align-items:center;gap:10px;box-shadow:0 8px 24px rgba(0,0,0,0.6);color:#fff;font-family:Inter, sans-serif;';
  const icon = document.createElement('div'); icon.style.fontWeight='700'; icon.textContent = type==='success'? '✓' : (type==='error'? '✗' : '!');
  const txt = document.createElement('div'); txt.style.flex='1'; txt.textContent = message;
  t.appendChild(icon); t.appendChild(txt);
  c.appendChild(t);
  setTimeout(()=>{ t.style.opacity = '0'; t.style.transform='translateX(20px)'; setTimeout(()=>t.remove(), 350); }, timeout);
  return t;
}

// --- Polling for order updates (user and admin) ---
function startUserOrderPolling(interval=10000){
  if(window.__userPollingStarted) return;
  window.__userPollingStarted = true;
  let lastStatuses = {};
  // initialize from DOM if available
  document.querySelectorAll('.orders-table tbody tr').forEach(tr=>{
    const cols = tr.querySelectorAll('td');
    if(!cols || cols.length<4) return;
    const viewLink = tr.querySelector('a[href^="/order/"]');
    if(!viewLink) return;
    const href = viewLink.getAttribute('href');
    const m = href.match(/\/order\/(\d+)/);
    if(!m) return;
    const id = m[1];
    const statusEl = cols[3].querySelector('.status-badge');
    lastStatuses[id] = statusEl ? statusEl.textContent.trim() : null;
  });
  async function poll(){
    try{
      const res = await fetch('/api/order-statuses');
      if(!res.ok) return;
      const j = await res.json();
      (j.orders||[]).forEach(o=>{
        const id = String(o.order_id);
        const s = o.tracking_status;
        if(lastStatuses[id] && lastStatuses[id] !== s){
          showToast(`Order #${id} status updated: ${s}`, 'success');
          // update DOM badge if present
          const badge = document.getElementById(`badge-${id}`) || document.querySelector(`tr#row-${id} .status-badge`);
          if(badge){ badge.textContent = s; }
        }
        lastStatuses[id] = s;
      });
    }catch(err){ console.debug('user poll err', err); }
    setTimeout(poll, interval);
  }
  setTimeout(poll, interval);
}

function startAdminOrderPolling(interval=10000){
  if(window.__adminPollingStarted) return;
  window.__adminPollingStarted = true;
  let lastMap = {};
  let firstRun = true;
  async function poll(){
    try{
      const res = await fetch('/admin/api/orders-summary');
      if(!res.ok) return;
      const j = await res.json();
      (j.orders||[]).forEach(o=>{
        const id = String(o.order_id);
        const s = o.tracking_status;
        const user = o.user_name || 'client';
        if(firstRun){
          // populate without notifying on initial poll
        } else {
          if(!lastMap[id]){
            // new order detected
            showToast(`New order #${id} from ${user}`, 'success');
          } else if(lastMap[id] !== s){
            showToast(`Order #${id} status changed: ${s}`, 'success');
            // update badge in DOM
            const badge = document.getElementById(`badge-${id}`);
            if(badge) badge.textContent = s;
          }
        }
        lastMap[id] = s;
      });
      firstRun = false;
    }catch(err){ console.debug('admin poll err', err); }
    setTimeout(poll, interval);
  }
  setTimeout(poll, interval);
}

// Auto-start polling based on URL
document.addEventListener('DOMContentLoaded', ()=>{
  const path = window.location.pathname;
  if(path.startsWith('/dashboard') || path === '/dashboard' || document.querySelector('.dashboard-page')){
    startUserOrderPolling();
  }
  if(path.startsWith('/admin') || document.querySelector('.sidebar')){
    startAdminOrderPolling();
  }
});
