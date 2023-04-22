const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokebtn");

jokeBtn.addEventListener("click", getjoke);

async function getjoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com/", config);

  const data = await response.json();

  jokeElement.innerHTML = data.joke;
}

/*
function getjoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", config)
    .then((response) => response.json())
    .then((data) => {
      jokeElement.innerHTML = data.joke;
    });
}
*/
