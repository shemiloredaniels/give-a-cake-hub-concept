// ── DATA STORE ──
const data = {
  states: [
    { code: 'AL', name: 'Alabama', vols: 8 },
    { code: 'CA', name: 'California', vols: 31 },
    { code: 'FL', name: 'Florida', vols: 24 },
    { code: 'GA', name: 'Georgia', vols: 17 },
    { code: 'IL', name: 'Illinois', vols: 19 },
    { code: 'MA', name: 'Massachusetts', vols: 14 },
    { code: 'MD', name: 'Maryland', vols: 11 },
    { code: 'MI', name: 'Michigan', vols: 16 },
    { code: 'MN', name: 'Minnesota', vols: 9 },
    { code: 'NC', name: 'North Carolina', vols: 22 },
    { code: 'NJ', name: 'New Jersey', vols: 13 },
    { code: 'NY', name: 'New York', vols: 38 },
    { code: 'OH', name: 'Ohio', vols: 18 },
    { code: 'PA', name: 'Pennsylvania', vols: 20 },
    { code: 'TX', name: 'Texas', vols: 29 },
    { code: 'VA', name: 'Virginia', vols: 15 },
    { code: 'WA', name: 'Washington', vols: 21 },
    { code: 'WI', name: 'Wisconsin', vols: 12 },
  ],
  bakers: [
    { id: 1, initials: 'MJ', name: 'Marcus J.', color: '#FAC775', textColor: '#412402', dist: '1.4 mi', bio: 'Home baker of 8 years. Loves celebration cakes and seasonal breads for community events.', tags: ['Layer cakes', 'Sourdough', 'Muffins'], avail: true },
    { id: 2, initials: 'TA', name: 'Theresa A.', color: '#9FE1CB', textColor: '#04342C', dist: '2.7 mi', bio: 'Pastry chef background. Specializes in allergy-friendly baking — nut-free and gluten-free options available.', tags: ['Gluten-free', 'Cookies', 'Tarts'], avail: true },
    { id: 3, initials: 'RK', name: 'Rosario K.', color: '#CECBF6', textColor: '#26215C', dist: '3.1 mi', bio: 'Weekend baker focused on cultural breads and traditional Central American pastries.', tags: ['Pan dulce', 'Empanadas', 'Tres leches'], avail: false },
    { id: 4, initials: 'DB', name: 'Donna B.', color: '#F5C4B3', textColor: '#4A1B0C', dist: '4.0 mi', bio: 'Retired chef who bakes at scale. Can deliver large batches of individually wrapped items.', tags: ['Brownies', 'Banana bread', 'Sheet cakes'], avail: true },
    { id: 5, initials: 'LP', name: 'Luis P.', color: '#C0DD97', textColor: '#173404', dist: '4.8 mi', bio: 'Certified food handler. Focuses on low-sugar and diabetic-friendly options for senior centers.', tags: ['Low-sugar', 'Oat bars', 'Fruit breads'], avail: true },
    { id: 6, initials: 'YN', name: 'Yuna N.', color: '#B5D4F4', textColor: '#042C53', dist: '5.2 mi', bio: 'Artisan baker with a love for Japanese-style milk bread and East Asian sweets.', tags: ['Milk bread', 'Mochi', 'Dorayaki'], avail: false },
  ],
  nonprofits: [
    { id: 1, name: 'Harvest Share Food Bank', dist: '2.1 mi', accepts: 'Breads, pastries, wrapped items', days: 'Mon–Fri 9am–4pm' },
    { id: 2, name: 'Sunrise Homeless Shelter', dist: '3.4 mi', accepts: 'Cakes, cookies, individually wrapped', days: 'Daily 7am–7pm' },
    { id: 3, name: 'Community Kitchen Co-op', dist: '5.8 mi', accepts: 'All baked items accepted', days: 'Tue, Thu, Sat 10am–2pm' },
    { id: 4, name: 'Bright Horizons Children's Center', dist: '6.1 mi', accepts: 'Nut-free items only, no fresh cream', days: 'Mon–Fri 8am–3pm' },
    { id: 5, name: 'Senior Care Alliance', dist: '7.0 mi', accepts: 'Low-sugar and diabetic-friendly preferred', days: 'Mon, Wed, Fri 10am–1pm' },
    { id: 6, name: 'New Roots Refugee Center', dist: '8.3 mi', accepts: 'Any culturally diverse baked goods welcome', days: 'Tue–Sat 9am–5pm' },
  ],
  slots: {
    july: [
      { id: 1, day: 5, label: 'Jul 5', org: 'Harvest Share Food Bank', type: 'Breads & pastries', taken: true, volunteer: 'Marcus J.' },
      { id: 2, day: 12, label: 'Jul 12', org: 'Sunrise Shelter', type: 'Cakes & cookies', taken: true, volunteer: 'Theresa A.' },
      { id: 3, day: 14, label: 'Jul 14', org: 'Community Kitchen Co-op', type: 'All items', taken: false, volunteer: null },
      { id: 4, day: 19, label: 'Jul 19', org: 'Harvest Share Food Bank', type: 'Any', taken: false, volunteer: null },
      { id: 5, day: 21, label: 'Jul 21', org: 'Senior Care Alliance', type: 'Low-sugar preferred', taken: false, volunteer: null },
      { id: 6, day: 26, label: 'Jul 26', org: 'Sunrise Shelter', type: 'Cakes & cookies', taken: false, volunteer: null },
    ],
    august: [
      { id: 7, day: 2, label: 'Aug 2', org: 'Harvest Share Food Bank', type: 'Breads & pastries', taken: true, volunteer: 'Donna B.' },
      { id: 8, day: 9, label: 'Aug 9', org: 'Bright Horizons', type: 'Nut-free only', taken: false, volunteer: null },
      { id: 9, day: 16, label: 'Aug 16', org: 'Community Kitchen', type: 'All items', taken: false, volunteer: null },
      { id: 10, day: 23, label: 'Aug 23', org: 'New Roots Center', type: 'Any welcome', taken: false, volunteer: null },
      { id: 11, day: 30, label: 'Aug 30', org: 'Senior Care Alliance', type: 'Low-sugar preferred', taken: false, volunteer: null },
    ],
    september: [
      { id: 12, day: 6, label: 'Sep 6', org: 'Harvest Share Food Bank', type: 'Breads & pastries', taken: false, volunteer: null },
      { id: 13, day: 13, label: 'Sep 13', org: 'Sunrise Shelter', type: 'Cakes & cookies', taken: false, volunteer: null },
      { id: 14, day: 20, label: 'Sep 20', org: 'Community Kitchen', type: 'All items', taken: false, volunteer: null },
      { id: 15, day: 27, label: 'Sep 27', org: 'Bright Horizons', type: 'Nut-free only', taken: false, volunteer: null },
    ]
  }
};

// ── RENDER STATE GRID ──
function renderStateGrid() {
  const el = document.getElementById('state-grid');
  if (!el) return;
  el.innerHTML = data.states.map(s => `
    <a class="state-tile" href="state.html?state=${s.code}">
      <div>${s.name}</div>
      <div class="vol-count">${s.vols} bakers</div>
    </a>
  `).join('');
}

// ── RENDER BAKER CARDS ──
function renderBakers() {
  const el = document.getElementById('baker-grid');
  if (!el) return;
  el.innerHTML = data.bakers.map(b => `
    <div class="baker-card">
      <div class="baker-head">
        <div class="baker-avatar" style="background:${b.color};color:${b.textColor}">${b.initials}</div>
        <div>
          <div class="baker-name">${b.name}</div>
          <div class="baker-dist">${b.dist} away</div>
        </div>
      </div>
      <p class="baker-bio">${b.bio}</p>
      <div class="baker-tags">${b.tags.map(t => `<span class="baker-tag">${t}</span>`).join('')}</div>
      <span class="baker-avail ${b.avail ? 'avail-yes' : 'avail-later'}">
        ${b.avail ? '● Available this month' : '◌ Available next month'}
      </span>
    </div>
  `).join('');
}

// ── RENDER NONPROFITS ──
function renderNonprofits() {
  const el = document.getElementById('npo-grid');
  if (!el) return;
  el.innerHTML = data.nonprofits.map(n => `
    <div class="npo-card">
      <div class="npo-icon">
        <svg viewBox="0 0 24 24"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/></svg>
      </div>
      <div class="npo-name">${n.name}</div>
      <div class="npo-meta">${n.dist} · ${n.days}</div>
      <div class="npo-accepts">Accepts: <span>${n.accepts}</span></div>
      <button class="sign-up-btn" onclick="openSignUpModal(${n.id})">Sign up to donate</button>
    </div>
  `).join('');
}

// ── RENDER CALENDAR ──
let activeMonth = 'july';
function renderCalendar(month) {
  activeMonth = month;
  const el = document.getElementById('slots-grid');
  if (!el) return;
  document.querySelectorAll('.month-tab').forEach(t => t.classList.toggle('active', t.dataset.month === month));
  el.innerHTML = data.slots[month].map(s => `
    <div class="slot-row ${s.taken ? 'slot-taken' : ''}">
      <div class="slot-date">${s.day}</div>
      <div class="slot-info">
        <div class="slot-org">${s.org}</div>
        <div class="slot-type">${s.type} ${s.taken ? '· ' + s.volunteer : ''}</div>
      </div>
      <button class="slot-btn" ${s.taken ? 'disabled' : `onclick="openSlotModal(${s.id})"`}>
        ${s.taken ? 'Taken' : 'Claim'}
      </button>
    </div>
  `).join('');
}

// ── MODALS ──
let currentSlotId = null;
let currentNpoId = null;

function openSlotModal(id) {
  const months = ['july','august','september'];
  let slot = null;
  for (const m of months) {
    slot = data.slots[m].find(s => s.id === id);
    if (slot) break;
  }
  if (!slot) return;
  currentSlotId = id;
  document.getElementById('modal-slot-title').textContent = `Claim slot — ${slot.label}`;
  document.getElementById('modal-slot-org').textContent = slot.org + ' · ' + slot.type;
  document.getElementById('slot-modal').classList.add('open');
}
function closeSlotModal() { document.getElementById('slot-modal').classList.remove('open'); }

function submitSlot() {
  const name = document.getElementById('slot-name').value.trim();
  const email = document.getElementById('slot-email').value.trim();
  const item = document.getElementById('slot-item').value.trim();
  if (!name || !email) { showToast('Please fill in your name and email.'); return; }
  // mark taken
  const months = ['july','august','september'];
  for (const m of months) {
    const s = data.slots[m].find(s => s.id === currentSlotId);
    if (s) { s.taken = true; s.volunteer = name; break; }
  }
  closeSlotModal();
  renderCalendar(activeMonth);
  showToast('Slot claimed! You\'ll receive a confirmation email shortly.');
  document.getElementById('slot-name').value = '';
  document.getElementById('slot-email').value = '';
  document.getElementById('slot-item').value = '';
}

function openSignUpModal(id) {
  currentNpoId = id;
  const n = data.nonprofits.find(x => x.id === id);
  document.getElementById('signup-npo-name').textContent = n.name;
  document.getElementById('signup-modal').classList.add('open');
}
function closeSignUpModal() { document.getElementById('signup-modal').classList.remove('open'); }

function submitSignUp() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  if (!name || !email) { showToast('Please fill in your name and email.'); return; }
  closeSignUpModal();
  showToast('You\'re signed up! The nonprofit will reach out to confirm details.');
  document.getElementById('signup-name').value = '';
  document.getElementById('signup-email').value = '';
}

// ── STATE SEARCH ──
function searchState() {
  const val = document.getElementById('state-search-input')?.value.trim().toLowerCase();
  if (!val) return;
  const found = data.states.find(s => s.name.toLowerCase().includes(val) || s.code.toLowerCase() === val);
  if (found) {
    window.location.href = `state.html?state=${found.code}`;
  } else {
    showToast('State not found. Try typing the full state name.');
  }
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderStateGrid();
  renderBakers();
  renderNonprofits();
  renderCalendar('july');

  const inp = document.getElementById('state-search-input');
  if (inp) inp.addEventListener('keydown', e => { if (e.key === 'Enter') searchState(); });

  // close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) { o.classList.remove('open'); } });
  });
});
