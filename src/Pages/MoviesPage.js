// import { Outlet } from 'react-router-dom';
// import s from './Nav.module.css';
// import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useCallback } from 'react';
import api from '../Service/api-service';
import { Link } from 'react-router-dom';
export default function MoviesPage() {
  const [movies, setMovies] = useState(null);

  const getQuery = useCallback(e => {
    const inputQuery = e.currentTarget.elements.searchInput.value;

    if (inputQuery === '') {
      return;
    }

    api
      .fetchSearch(inputQuery)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => 'error');
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    getQuery(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="searchInput" />
        <button>Search</button>
      </form>
      <ul>
        {movies
          ? movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                    {movie.title ?? movie.name}
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
  // const [query, setQuery] = useState([]);

  // useEffect(() => {
  //   if (query === []) {
  //     return;
  //   }
  //   api
  //     .fetchSearch(query)
  //     .then(({ results }) => {
  //       console.log(results);
  //     })
  //     .catch(error => 'error');
  // }, [query]);

  // const handleFormSubmit = query => {
  //   setQuery(query);
  // };
  // return (
  //   <>
  //     <Searchbar onSubmit={handleFormSubmit} />

  //   </>
  // );
}
