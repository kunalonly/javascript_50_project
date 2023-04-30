const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");

const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);

    const userHtml = ` <div class="card">
<div>
  <img src="${data.avatar_url}" alt="${data.name}" />
</div>
<div class="personal-info">
  <h3>${data.name}</h3>
  <p>
    ${data.bio}
  </p>
  <ul>
    <li>${data.followers}<strong>Follower</strong></li>
    <li>${data.following}<strong>Following</strong></li>
    <li>${data.public_repos}<strong>Repos</strong></li>
  </ul>

  <div class="repos">
    <a href="#" class="repo">repo1</a>
    <a href="#" class="repo">repo2</a>
    <a href="#" class="repo">repo3</a>
  </div>
</div>
</div>`;

    main.innerHTML = userHtml;
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard();
    }
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = search.value;

  if (username) {
    getUser(username);
    search.value = "";
  }
});

function createErrorCard() {
  main.innerHTML = `<div class="card">
    <div class="personal-info"><h3>User Not found</h3></div>
    </div> `;
}
