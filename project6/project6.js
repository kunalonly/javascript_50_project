const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkbox);

function checkbox() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const tpbox = box.getBoundingClientRect().top;
    if (tpbox < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
