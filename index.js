// Mobile Nav Display
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// On Card Scroll effect
const card = document.querySelectorAll('.price-card');
const galleryImage = document.querySelectorAll(".gallery__image");

function handleScroll() {
  const scrollPosition = window.scrollY;
  card.forEach(element => {
    if (scrollPosition > element.offsetTop - window.innerHeight / 2) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });

  galleryImage.forEach(element => {
    if (scrollPosition > element.offsetTop - window.innerHeight / 2) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', handleScroll);