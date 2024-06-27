const navBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("menu");

navBtn.addEventListener("click", function () {
  console.log("click");
  navBtn.classList.toggle("open");
  mobileNav.classList.toggle("hidden");
});
