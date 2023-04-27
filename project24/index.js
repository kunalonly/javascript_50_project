const slidesContainer = document.querySelector(".slider-container");

const slideLeft = document.querySelector(".left-slider");

const slideRight = document.querySelector(".right-slider");

const buttonUp = document.querySelector(".up-arrow");

const buttonDown = document.querySelector(".down-arrow");

const lenghtSlides = slideLeft.querySelectorAll("div").length;

let activeSlidesIndex = 0;

slideLeft.style.top = `-${(lenghtSlides - 1) * 100}vh`;

buttonDown.addEventListener("click", () => changeSlides("down"));
buttonUp.addEventListener("click", () => changeSlides("up"));

const changeSlides = (direction) => {
  const sliderHeight = slidesContainer.clientHeight;

  if (direction === "up") {
    activeSlidesIndex++;
    if (activeSlidesIndex > lenghtSlides - 1) {
      activeSlidesIndex = 0;
    }
  } else if (direction === "down") {
    activeSlidesIndex--;
    if (activeSlidesIndex < 0) {
      activeSlidesIndex = lenghtSlides - 1;
    }
  }

  slideLeft.style.transform = `translateY(${
    activeSlidesIndex * sliderHeight
  }px)`;
  slideRight.style.transform = `translateY(-${
    activeSlidesIndex * sliderHeight
  }px)`;
};
