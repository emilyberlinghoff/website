function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// --- Scroll reveal: fade sections in when they enter viewport
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });
sections.forEach(sec => observer.observe(sec));

// --- Theme toggle (light/dark)
const root = document.documentElement;
const btn = document.querySelector('.theme-toggle');
const saved = localStorage.getItem('theme') || 'light';
if (saved === 'dark') root.classList.add('dark');
if (btn) {
  btn.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  });
}