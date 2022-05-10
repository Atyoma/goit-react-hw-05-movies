import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import s from './app.module.css';
import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = lazy(() => import ('./Navigation/Navigation'))
const Home = lazy(() => import('Pages/Home'))
const MoviesPage = lazy(() => import('Pages/MoviesPage'))
const MovieDetailsPage = lazy(() => import('Pages/MovieDetailsPage'))
const Cast = lazy(() => import('Pages/Cast/Cast'))
const Reviews = lazy(() => import('Pages/Reviews'))
const NotFoundPage = lazy(() => import('Pages/NotFoundPage'))
export default function App() {

  return (
    <div className={s.app}>
      <Suspense fallback={<Loader/>}>
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
      </Suspense>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

