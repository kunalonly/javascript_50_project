const clickPuppy = document.getElementById("puppy");

const span = document.getElementById("span");
const img = document.querySelector(".img");
let counter = 0;

clickPuppy.addEventListener("dblclick", () => {
  counter++;
  img.classList.add("fa-heart");

  span.innerText = counter;
});
