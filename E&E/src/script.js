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
