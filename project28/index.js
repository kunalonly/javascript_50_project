const textEle = document.getElementById("text");

const speedEle = document.getElementById("speed");
let speed = 300 / speedEle.value;
const text = "We Welcoming You...!!!!!!!!!!!!!!!!!!!!!!!";

let index = 1;

writeText();

function writeText() {
  textEle.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 1;
  }
  setTimeout(writeText, speed);
}

speedEle.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
