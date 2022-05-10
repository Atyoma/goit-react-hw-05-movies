const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'b392cdf9c5e216c7de5c7f82b89e6069';

function fetchTrendingMovies() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      Promise.reject(new Error('Something went wrong!!!'));
    }
  );
}

function fetchMoviesPage(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    Promise.reject(new Error('Something went wrong!!!'));
  });
}

function fetchActors(id) {
  return fetch(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      Promise.reject(new Error('Something went wrong!!!'));
    }
  );
}

function fetchReviews(id) {
  return fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      Promise.reject(new Error('Something went wrong!!!'));
    }
  );
}

function fetchSearch(query) {
  return fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      Promise.reject(new Error('Something went wrong!!!'));
    }
  );
}
// `${BASE_URL}/search/movie?query=${querry}&api_key=${API_KEY}`
const api = {
  fetchTrendingMovies,
  fetchMoviesPage,
  fetchActors,
  fetchReviews,
  fetchSearch,
};

export default api;

// movie / { movie_id } / credits;

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
