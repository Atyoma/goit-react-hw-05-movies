import s from './Nav.module.css';
import { useState, useCallback } from 'react';
import api from '../Service/api-service';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
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
        <input
          name="searchInput"
          className={s.inputSearch}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <button type="button" className={s.btnSearch}>
          <ImSearch /> search
        </button>
      </form>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  {movie.title ?? movie.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
