import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Searchbar from '../components/SearchBar/SearchBar';
import api from '../Service/api-service';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? ''
  );
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setSearchParams({ query: searchQuery.trim() });
    setMovies([]);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    api
      .fetchSearch(searchQuery)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => 'error');
  }, [searchQuery]);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesPage;
