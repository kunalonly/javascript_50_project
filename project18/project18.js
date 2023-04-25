const miniteele = document.querySelector(".minite");
const secondele = document.querySelector(".second");
const hourele = document.querySelector(".hour");
const timeele = document.querySelector(".time");

const toggle = document.querySelector(".toggle");

const dateele = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
];

const Months = [
  "Jan",
  "Feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

function setTimeout() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const minite = time.getMinutes();
  const second = time.getSeconds();
  const hoursForClock = hours % 12;

  hourele.style.transform = `translate(-50%,-100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  miniteele.style.transform = `translate(-50%,-100%) rotate(${scale(
    minite,
    0,
    59,
    0,
    360
  )}deg)`;

  secondele.style.transform = `translate(-50%,-100%) rotate(${scale(
    second,
    0,
    59,
    0,
    360
  )}deg)`;

  timeele.innerHTML = `${hoursForClock}:${minite < 10 ? `0${minite}` : minite}`;

  dateele.innerHTML = `${days[day]},${Months[month]} <span class="circle">${date}</span>`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setTimeout();
setInterval(setTimeout, 1000);
