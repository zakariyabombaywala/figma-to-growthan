const navBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("menu");
const nav = document.getElementById("nav");

navBtn.addEventListener("click", function () {
  console.log("click");
  navBtn.classList.toggle("open");
  mobileNav.classList.toggle("hidden");
});

window.addEventListener("scroll", function () {
  const navHeight = nav.getBoundingClientRect().height;
  console.log(navHeight);
  const scroll = window.scrollY;
  console.log(scroll);

  if (scroll > navHeight) {
    nav.classList.add("bg-white");
  } else {
    nav.classList.remove("bg-white");
  }
});
