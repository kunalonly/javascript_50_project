const smallcups = document.querySelectorAll(".small");
const liter = document.getElementById("liters");
const percentage = document.getElementById("percentage");

const remained = document.getElementById("remained");

updateFullCup();

smallcups.forEach((cup, inx) => {
  cup.addEventListener("click", () => highlight(inx));
});

function highlight(inx) {
  if (
    smallcups[inx].classList.contains("full") &&
    !smallcups[inx].nextElementSibling.classList.contains("full")
  ) {
    inx--;
  }
  smallcups.forEach((cup, inx2) => {
    if (inx2 <= inx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateFullCup();
}

function updateFullCup() {
  const fullCups = document.querySelectorAll(".small.full").length;

  const totalCups = smallcups.length;

  if (smallcups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 240}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  if (totalCups === fullCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liter.innerText = `${2 - (250 * fullCups) / 1000}`;
  }
}
