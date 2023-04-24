const counter = document.querySelectorAll(".counter");

counter.forEach((counter) => {
  counter.innerText = "0";

  function updatecounter() {
    const target = +counter.getAttribute("data-target");

    const c = +counter.innerText;

    const interval = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + interval)}`;

      setTimeout(updatecounter, 1);
    }
  }

  updatecounter();
});
