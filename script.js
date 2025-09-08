const slides = document.querySelector('[data-slides]');
if (slides) {
  let currentIndex = 0;
  const slideElements = slides.children;
  const totalSlides = slideElements.length;

  function showNextSlide() {
    const activeSlide = slides.querySelector('[data-active]');
    if (activeSlide) delete activeSlide.dataset.active;

    currentIndex = (currentIndex + 1) % totalSlides;
    slideElements[currentIndex].dataset.active = true;
  }

  setInterval(showNextSlide, 4000);
}


const toggleButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.menu-mobile');
const overlay = document.querySelector('.overlay');

if (toggleButton && mobileMenu && overlay) {
  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll(
    '.fade-up, .fade-down, .fade-left, .fade-right'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((el) => observer.observe(el));
});

function sendEmail(event) {
  event.preventDefault(); 

  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;

  const link = `https://mail.google.com/mail/?view=cm&fs=1&to=aicagravatai@gmail.com&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank"); 
}