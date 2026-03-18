let startX = 0;
let endX = 0;
const slides = document.querySelector(".slider-slides");
const slide = [...document.querySelectorAll(".slider-slides--slide")]
  .filter(el => el.offsetParent !== null);
let index = 1;

slides.style.transform = `translateX(-${index * 100}%)`;

const preV = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");

let isMoving = false;

next.addEventListener("click", () => {

  if(index >= slide.length - 1) return;

  index++;

  slides.style.transition = "0.5s";
  slides.style.transform = `translateX(-${index * 100}%)`;

});

preV.addEventListener("click", () => {

  if(index <= 0) return;

  index--;

  slides.style.transition = "0.5s";
  slides.style.transform = `translateX(-${index * 100}%)`;

});

slides.addEventListener("transitionend", () => {

  if(slide[index].classList.contains("clone")){

    slides.style.transition = "none";

    if(index === slide.length - 1){
      index = 1;
    }

    if(index === 0){
      index = slide.length - 2;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;

  }

});

//Mobile swipe

slides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {

  const swipeDistance = startX - endX;

  if (swipeDistance > 50) {
    next.click();
  }

  if (swipeDistance < -50) {
    preV.click();
  }

}