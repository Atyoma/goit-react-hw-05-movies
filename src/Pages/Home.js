// import { NavLink, Outlet } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import api from '../Service/api-service';
// import s from './Nav.module.css';
// // import MoviesList from 'components/MoviesList/MoviesList';

// export default function Home() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     api
//       .fetchMovies()
//       .then(setMovies)
//       .catch(error => 'error');
//   }, []);
//   // const poster = movies.map(movie => movie.poster_path);
//   // let data = movies.results;
//   console.log(movies);

//   return (
//     <>
//       <header>
//         <nav>
//           <NavLink
//             exact="true"
//             to="/"
//             className={s.link}
//             style={isActive => ({
//               color: isActive ? '#2196f3' : '#2a363b',
//             })}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/movies"
//             className={s.link}
//             style={isActive => ({
//               color: isActive ? '#2196f3' : '#2a363b',
//             })}
//           >
//             Movies
//           </NavLink>
//           <hr />
//           <h1>Trending today</h1>
//           <ul>{movies && movies.map(movie => <li>{movie.id}</li>)}</ul>
//           <Outlet />
//         </nav>
//       </header>
//     </>
//   );
// }

import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../Service/api-service';
import s from './Nav.module.css';
// import MoviesList from 'components/MoviesList/MoviesL ist';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .fetchMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => 'error');
  }, []);

  return (
    <>
      <header>
        <nav className={s.nav}>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => (isActive ? s.active : s.notActive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s.active : s.notActive)}
          >
            Movies
          </NavLink>
          <hr />
          <h1>Trending today</h1>
          <ul>
            {movies &&
              movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
          </ul>
          <Outlet />
        </nav>
      </header>
    </>
  );
}
