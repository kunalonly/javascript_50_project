const toggle = document.getElementById("btntoggle");

const nav = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
