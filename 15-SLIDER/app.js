const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prexBtn = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

prexBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

const carousel = () => {
  //working with slides
  //   if (counter == slides.length) {
  //     counter = 0;
  //   }
  //   if (counter < 0) {
  //     counter = slides.length - 1;
  //   }
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prexBtn.style.display = "block";
  } else {
    prexBtn.style.display = "none";
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
prexBtn.style.display = "none";
