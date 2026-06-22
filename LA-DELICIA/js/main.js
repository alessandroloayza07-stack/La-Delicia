// ═══ LOADER ═══
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2200);
});

// ═══ NAVBAR SCROLL ═══
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ═══ REVEAL ON SCROLL ═══
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));

// ═══ MENÚ FILTROS ═══
const catBtns = document.querySelectorAll('.menu-cat-btn');
const menuItems = document.querySelectorAll('.menu-item');
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    menuItems.forEach(item => {
      if (cat === 'todos' || item.dataset.cat === cat) {
        item.classList.remove('menu-hidden');
      } else {
        item.classList.add('menu-hidden');
      }
    });
  });
});

// ═══ BOTÓN RESERVAR ═══
document.getElementById('btn-reservar').addEventListener('click', function() {
  this.textContent = '✓  Reserva Enviada — Te contactaremos pronto';
  this.style.background = '#1a3a1a';
  this.style.color = '#7dcf7d';
});