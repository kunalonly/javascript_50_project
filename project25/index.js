const tostecontainer = document.querySelector(".toster-container");

const button = document.querySelector(".btn");

const array1 = ["message1", "message2", "messege3", "message4"];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notify = document.createElement("div");

  notify.classList.add("toste");

  notify.innerText = ramdomMessage();
  tostecontainer.appendChild(notify);
  setTimeout(() => {
    notify.remove();
  }, 5000);
}

function ramdomMessage() {
  return array1[Math.floor(Math.random() * array1.length)];
}
