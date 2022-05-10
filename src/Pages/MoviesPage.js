import s from './Nav.module.css';
import { useState, useCallback } from 'react';
import api from '../Service/api-service';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function MoviesPage() {
  const [movies, setMovies] = useState(null);

  const getQuery = useCallback(e => {
    const inputQuery = e.currentTarget.elements.searchInput.value;
    // console.log(inputQuery);
    if (inputQuery === '') {
      toast.warning('Please enter search name'); //info    success   warning  error  default
      return;
    }

    api
      .fetchSearch(inputQuery)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => 'error');
  }, []);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   ;
  // };

  const handleSubmit = e => {
    e.preventDefault();
    getQuery(e);
    setMovies('');
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

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import * as moviesAPI from '../../services/movies-api';
// import {
//   SearchForm,
//   SearchFormButton,
//   SearchFormInput,
// } from './MoviesPage.styled';

// export default function MoviesPage() {
//   const [query, setQuery] = useState('');
//   const [searchResult, setSearchResult] = useState(null);

//   useEffect(() => {
//     if (!query) {
//       return;
//     }
//     moviesAPI.fetchSearchMovie(query).then(({ results }) => {
//       setSearchResult(results);
//     });
//   }, [query]);

//   const handleFormSubmit = evt => {
//     evt.preventDefault();
//     setQuery(document.forms.queryForm.query.value);
//     document.forms.queryForm.query.value = '';
//   };

//   return (
//     <>
//       <SearchForm name="queryForm" onSubmit={handleFormSubmit}>
//         <SearchFormInput
//           type="text"
//           name="query"
//           autocomplete="off"
//           autoFocus
//           placeholder="Search movies "
//         />
//         <SearchFormButton type="submit">Search</SearchFormButton>
//       </SearchForm>

//       {searchResult && (
//         <>
//           <h2>Result by search "{query}"</h2>
//           <ul>
//             {searchResult.map(el => (
//               <li key={el.id}>
//                 <Link
//                   to={{
//                     pathname: `./movies/${el.id}`,
//                   }}
//                 >
//                   {el.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </>
//   );
// }
