function fetchMovies() {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const KEY = 'b392cdf9c5e216c7de5c7f82b89e6069';

  return fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      Promise.reject(new Error('Something went wrong!!!'));
    }
  );
}

const api = {
  fetchMovies,
};

export default api;
