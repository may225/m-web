// ============================================================
// MOMIN GAMES — Game data & UI logic
// Fields:
//   title       — game display name
//   genre       — "casual" | "puzzle" | "hyper-casual"
//   icon        — path to image in assets/images/ (e.g. "assets/images/stop-animals.png")
//                 set to null to use emoji + gradient fallback instead
//   emoji       — fallback emoji (used when icon is null)
//   gradient    — CSS gradient string (fallback card-icon background)
//   appstore    — App Store URL string, or null to hide the button
//   googleplay  — Google Play URL string, or null to hide the button
// ============================================================

const GAMES = [
  {
    id: 1,
    title: "Stop Animals: Draw Puzzle 3D",
    genre: "hyper-casual",
    icon: "assets/images/icon_stopanimals.png",
    emoji: "🐾",
    gradient: "linear-gradient(145deg, #4ECDC4, #44A08D)",
    appstore: null,
    googleplay: "https://play.google.com/store/apps/details?id=com.drawpuzzle.draw3d.stopanimals",
  },
  {
    id: 2,
    title: "Jeweland",
    genre: "hybrid-puzzle",
    icon: "assets/images/icon_jeweland.png",
    emoji: "🐾",
    gradient: "linear-gradient(145deg, #4ECDC4, #44A08D)",
    appstore: null,
    googleplay: "https://play.google.com/store/apps/details?id=com.sugarscone.jeweland",
  },
];

// --- SVG icons ---
const APPLE_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`;

const ANDROID_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.135c.576.332.876.998.738 1.66l-.066.251-.672.38-2.302-2.302 2.302-2.302c.577.333.877.998.739 1.661l.066.25zM5.864 3.658L16.8 9.99l-2.302 2.302-8.635-8.635z"/></svg>`;

// --- Render a single game card ---
function createCard(game) {
  const genreLabel = game.genre.replace('-', '‑');

  const iconHtml = game.icon
    ? `<div class="card-icon card-icon--image">
        <img src="${game.icon}" alt="${game.title} icon" loading="lazy">
       </div>`
    : `<div class="card-icon" style="background: ${game.gradient}">
        <span class="icon-emoji" role="img" aria-label="${game.title} icon">${game.emoji}</span>
       </div>`;

  const appleBtn = game.appstore
    ? `<a href="${game.appstore}" class="store-btn store-btn--apple" target="_blank" rel="noopener" aria-label="${game.title} on App Store">
        ${APPLE_SVG} App Store
       </a>`
    : '';

  const androidBtn = game.googleplay
    ? `<a href="${game.googleplay}" class="store-btn store-btn--android" target="_blank" rel="noopener" aria-label="${game.title} on Google Play">
        ${ANDROID_SVG} Google Play
       </a>`
    : '';

  return `
    <div class="game-card" data-genre="${game.genre}">
      ${iconHtml}
      <div class="card-body">
        <span class="card-genre genre-${game.genre}">${genreLabel}</span>
        <h3 class="card-title">${game.title}</h3>
        <div class="store-buttons">
          ${appleBtn}
          ${androidBtn}
        </div>
      </div>
    </div>`;
}

// --- Render the grid ---
function renderGames(filter) {
  const grid = document.getElementById('game-grid');
  const empty = document.getElementById('empty-state');
  const list = filter === 'all' ? GAMES : GAMES.filter(g => g.genre === filter);

  if (list.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
  } else {
    grid.innerHTML = list.map(createCard).join('');
    empty.style.display = 'none';
  }
}

// --- Tab filter ---
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderGames(tab.dataset.filter);
  });
});

// --- Mobile nav ---
const hamburger = document.getElementById('hamburger');
const navClose  = document.getElementById('nav-close');
const mainNav   = document.getElementById('main-nav');

function openNav()  { mainNav.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeNav() { mainNav.classList.remove('open'); document.body.style.overflow = ''; }

hamburger.addEventListener('click', openNav);
navClose.addEventListener('click', closeNav);

mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));

// Close nav on outside click
document.addEventListener('click', e => {
  if (mainNav.classList.contains('open') && !mainNav.contains(e.target) && e.target !== hamburger) {
    closeNav();
  }
});

// --- Initial render ---
renderGames('all');
