const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;

const showSlide = (n) => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[n].classList.add('active');
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const menuItems = document.querySelectorAll('li');

const navItems = document.querySelectorAll("nav li");

navItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.querySelector(".submenu").style.display = "block";
    });

    item.addEventListener("mouseout", () => {
        item.querySelector(".submenu").style.display = "none";
    });
});

