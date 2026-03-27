// JavaScript entry point for portfolio functionality

// 1. Theme Toggle (Minimalist implementation)
const themeToggle = document.querySelector('.theme-toggle');
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  isDarkMode = document.documentElement.classList.contains('dark-mode');
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

// 2. Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// 3. Navbar Background Toggle on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
    navbar.style.padding = '1rem 5%';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.boxShadow = 'none';
    navbar.style.padding = '1.5rem 5%';
  }
});

// 4. Reveal Animations on Scroll
const revealOnScroll = () => {
  const elements = document.querySelectorAll('.section-title, .about-grid, .info-item, .skill-group-card, .project-card-new, .contact-box, .timeline-item');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
};

// Initialize opacity for elements that will be revealed
window.addEventListener('load', () => {
  const elementsToAnimate = document.querySelectorAll('.section-title, .about-grid, .info-item, .skill-group-card, .project-card-new, .contact-box, .timeline-item');
  elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  });
  
  revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

console.log('Portfolio Elhadji Fallou Sall initialisé avec succès 💻');
