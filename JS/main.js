const toggleMenu = document
  .querySelector(".toggle-menu")
  .addEventListener("click", toggle);
const switchMobileMenu = document.querySelector(".mobile-menu");

function toggle() {
  this.classList.toggle("active");
  switchMobileMenu.classList.toggle("active");
}
