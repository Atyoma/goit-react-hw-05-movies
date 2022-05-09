import { NavLink, Outlet } from 'react-router-dom';
import s from '../../Pages/Nav.module.css';

export default function Navigation() {
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
        </nav>
      </header>
      <Outlet />
    </>
  );
}
