const tagele = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagele.innerHTML = "";
  tags.forEach((tag) => {
    const tagelement = document.createElement("span");
    tagelement.classList.add("tag");
    tagelement.innerText = tag;
    tagele.appendChild(tagelement);
  });
}
