const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".responsive");


hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

/* const closeMenu = document.querySelector(".closeMenu")

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
}) */

const closeMenu = document.querySelectorAll(".closeMenu");

closeMenu.forEach(btn => {
  btn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});