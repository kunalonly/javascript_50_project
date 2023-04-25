const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cfb0179f0bc4482c76b436fa4728f4e7&page=1";

const Img_Path = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=cfb0179f0bc4482c76b436fa4728f4e7&query="';

getMovies(API_URL);

const form = document.getElementById("form");
const search = document.getElementById("search");

const main = document.getElementById("main");
async function getMovies(url) {
  const res = await fetch(url);

  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEle = document.createElement("div");
    movieEle.classList.add("movie");
    movieEle.innerHTML = `

<img src="${Img_Path + poster_path}" alt="" />

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="green">${vote_average}</span>
        </div>

        <div class="overview">
          <h3>Overview</h3>
         ${overview}
        </div>
`;
    main.appendChild(movieEle);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
