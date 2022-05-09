
import{Routes, Route} from 'react-router-dom'
import s from './app.module.css';
import Cast from 'Pages/Cast/Cast'
import Reviews from 'Pages/Reviews'
import 'react-toastify/dist/ReactToastify.css';
import NotFoundPage from 'Pages/NotFoundPage';
import Home from 'Pages/Home';
import MoviesPage from 'Pages/MoviesPage';
import Navigation from './Navigation/Navigation';
import MovieDetailsPage from "Pages/MovieDetailsPage"

export default function App() {

  return (
    <div className={s.app}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home/>}></Route>
          <Route path='movies' element={<MoviesPage />}></Route>
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
        </Route>
        <Route path='*' element={ <NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

