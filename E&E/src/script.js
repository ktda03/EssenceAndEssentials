/* ── Nav: shrink on scroll ── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 40 ? '12px 52px' : '18px 52px';
}, { passive: true });

/* ── Scroll reveal for episode cards ── */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${i * 0.08}s`;
        entry.target.classList.add('anim-up');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.ep-card').forEach(card => {
  card.style.opacity = '0';
  revealObserver.observe(card);
});

/* ── Philanthropy slider ── */
(function () {
  const track = document.getElementById('philanthropyTrack');
  if (!track) return;

  const dots  = document.querySelectorAll('.slider-dot');
  const prev  = document.getElementById('philanthropyPrev');
  const next  = document.getElementById('philanthropyNext');
  const total = document.querySelectorAll('.philanthropy-slide').length;
  let current = 0;

  function goTo(index) {
    current = Math.max(0, Math.min(index, total - 1));
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
    prev.classList.toggle('is-disabled', current === 0);
    next.classList.toggle('is-disabled', current === total - 1);
  }

  prev.addEventListener('click', () => goTo(current - 1));
  next.addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  /* Touch / swipe support */
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 48) goTo(dx < 0 ? current + 1 : current - 1);
  }, { passive: true });

  goTo(0);
}());
