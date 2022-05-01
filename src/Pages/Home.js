import { NavLink, Outlet } from 'react-router-dom';
import s from './Nav.module.css';
export default function Home() {
  return (
    <>
      <header>
        <nav>
          <NavLink
            exact="true"
            to="/"
            className={s.link}
            style={isActive => ({
              color: isActive ? '#2196f3' : '#2a363b',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={s.link}
            style={isActive => ({
              color: isActive ? '#2196f3' : '#2a363b',
            })}
          >
            Movies
          </NavLink>
          <hr />
          <h1>Trending today</h1>
          <ul>
            <li>list</li>
          </ul>
          <Outlet />
        </nav>
      </header>
    </>
  );
}
