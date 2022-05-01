import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={s.link} activeclassname={s.activelink}>
        HomePage
      </NavLink>
      <NavLink to="/movies" className={s.link}>
        MoviesPage
      </NavLink>
      <NavLink to="/movies/:movieId" className={s.link}>
        MovieDetailsPage
      </NavLink>
      <NavLink to="/ movies /: movieId / cast" className={s.link}>
        Cast
      </NavLink>
      <NavLink to="/ movies /: movieId / reviews" className={s.link}>
        Reviews
      </NavLink>
      <Outlet />
    </nav>
  );
}

// '/' - компонент < HomePage >, домашняя
// страница со списком популярных кинофильмов.
// '/movies' - компонент < MoviesPage >,
//     страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент < MovieDetailsPage >,
//     страница с детальной информацией о кинофильме.
// / movies /: movieId / cast - компонент < Cast >,
//     информация о актерском составе.Рендерится на странице < MovieDetailsPage >.
// / movies /: movieId / reviews - компонент < Reviews >,
//     информация об обзорах.Рендерится на странице < MovieDetailsPage >.
