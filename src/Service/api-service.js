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

const api = {
  fetchTrendingMovies,
  fetchMoviesPage,
  fetchActors,
  fetchReviews,
  fetchSearch,
};

export default api;
