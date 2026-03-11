const slides = document.querySelector(".slider-slides");
const slide = document.querySelectorAll(".slider-slides--slide");

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

const prev= document.querySelector(".slider-prev").addEventListener("click" , () => {
    index--;
    slides.style.transition = "transform 0.5 ease-in"
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