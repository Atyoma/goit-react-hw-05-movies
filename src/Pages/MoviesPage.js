import s from './Nav.module.css';
import { useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../Service/api-service';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  // const [currrentLocation, setCurrentLocation] = useState('');
  const [, setSearchParams] = useSearchParams();
  // const location = useLocation();
  // const navigate = useNavigate();
  // const backLinkMovies = () => navigate(`/movies${location.search}`);
  // export{ backLinkMovies }
  const getQuery = useCallback(
    e => {
      const inputQuery = e.currentTarget.elements.searchInput.value;
      if (inputQuery.trim() === '') {
        toast.warning('Please enter search name');
        return;
      }
      setSearchParams({ query: inputQuery.trim() });
      api
        .fetchSearch(inputQuery)
        .then(({ results }) => {
          setMovies(results);
        })
        .catch(error => 'error');
      // console.log(location);
    },
    [setSearchParams]
  );

  const handleSubmit = e => {
    e.preventDefault();
    getQuery(e);
    setMovies('');
    // setCurrentString(location);

    // const order = new URLSearchParams(location.search).get('query');
    // console.log(order);
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
        <button className={s.btnSearch}>
          <ImSearch /> search
        </button>
      </form>

      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} className={s.list}>
                  {movie.title ?? movie.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
