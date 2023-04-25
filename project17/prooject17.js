const body = document.body;
const slides = document.querySelectorAll(".slide");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");

let activeSlide = 0;

btnRight.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgtoBody();
  setbgImage();
});

btnLeft.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length;
  }

  setBgtoBody();
  setbgImage();
});

function setBgtoBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setbgImage() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[activeSlide].classList.add("active");
}
