const navBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("menu");
const nav = document.getElementById("nav");
const navContainer = document.querySelector(".menu-container");
const btnSlide = document.querySelectorAll(".btn-slide");

// Fixed Nav
window.addEventListener("scroll", function () {
  const navHeight = nav.getBoundingClientRect().height;
  const scroll = window.scrollY;

  if (scroll > navHeight) {
    nav.classList.add("bg-white");
  } else {
    nav.classList.remove("bg-white");
  }
});

// Hamburger Menu
navBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("hidden");
});

// Testimonial Navigator
btnSlide.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.currentTarget.classList.remove("bg-blue", "text-white");
    e.currentTarget.classList.add("focus:bg-blue", "focus:text-white");
  });
});

// Why section swiper
var swiper = new Swiper(".brandSwiper", {
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// Testimonial section Swiper slider
var swiper = new Swiper(".testimSwiper", {
  navigation: {
    nextEl: ".testim-next",
    prevEl: ".testim-prev",
  },
  breakpoints: {
    768: { slidesPerView: 1 },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
