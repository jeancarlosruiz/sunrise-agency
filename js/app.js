const hamburger = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".header__nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});