import { useState, useEffect } from 'react';
import api from '../Service/api-service';
import { Link } from 'react-router-dom';
import s from './Nav.module.css';
export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .fetchTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => 'error');
    // console.log(Location);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id} className={s.list}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
