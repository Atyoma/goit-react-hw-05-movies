import { Link, Outlet } from 'react-router-dom';
import s from 'Pages/Nav.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../Service/api-service';
import { useState, useEffect } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function MovieDetailsPage() {
  const [moviesInfo, setMoviesInfo] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();
  // const location = useLocation();
  const backLinkMovies = () => {
    navigate(-1);
  };

  useEffect(() => {
    api
      .fetchMoviesPage(movieId) //.then(data => {console.log(data)})
      .then(setMoviesInfo)
      .catch(error => 'error');
  }, [movieId]);

  const userScore = 10;

  return (
    <>
      <button type="button" className={s.back} onClick={backLinkMovies}>
        <HiArrowNarrowLeft />
        Go back
      </button>
      {moviesInfo && (
        <>
          <div className={s.filmCard}>
            <div className={s.posterCard}>
              <img
                className={s.poster}
                src={`https://image.tmdb.org/t/p/w300/${moviesInfo.poster_path}`}
                alt={moviesInfo.original_title}
              />
            </div>
            <div className={s.info}>
              <h2>{moviesInfo.original_title}</h2>
              <p>User score: {`${moviesInfo.vote_average * userScore} %`}</p>
              <h3>Overview</h3>
              <p>{moviesInfo.overview}</p>
              <h4>Genres</h4>
              {moviesInfo.genres.map(genre => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </div>
          </div>
          <hr />
          <div className={s.actors}>
            <p>Additional Info</p>
            <ul className={s.actorsList}>
              <Link to={`cast`} className={s.cast}>
                Cast
              </Link>
              <Link to={`reviews`}>Reviews</Link>
            </ul>
          </div>
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
}
