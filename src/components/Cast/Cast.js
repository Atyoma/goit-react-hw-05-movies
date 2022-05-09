import s from './Cast.module.css';
import { useParams } from 'react-router-dom';
import api from 'Service/api-service';
import { useState, useEffect } from 'react';
import avatarDefault from '../../Images/avatardefault_92824.png';

export default function Cast() {
  const [actorsInfo, setActorsInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    api
      .fetchActors(movieId)
      .then(({ cast }) => {
        setActorsInfo(cast);
      })
      .catch(error => 'error');
  }, [movieId]);
  console.log(actorsInfo);

  return (
    <div className={s.actorCard}>
      <ul>
        {actorsInfo ? (
          actorsInfo.map(actor => (
            <li key={actor.id}>
              {actor.profile_path !== null ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                          alt={`Foto ${actor.name}`}
                          className={s.actorIcon}
                />
              ) : (
                <img src={avatarDefault} alt="There is no icon of the actor" className={s.actorIcon} />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))
        ) : (
          <p>We don't have any actors for this movie</p>
        )}
      </ul>
    </div>
  );
}
