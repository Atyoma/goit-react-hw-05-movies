import s from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import api from 'Service/api-service';
import { useState, useEffect } from 'react';

export default function Cast() {
  const [reviewsInfo, setReviewsInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    api
      .fetchReviews(movieId)
      .then(({ results }) => {
        setReviewsInfo(results);
      })
      .catch(error => 'error');
  }, [movieId]);
  console.log(reviewsInfo);

  return (
    <div className={s.actorCard}>
      <ul>
        {reviewsInfo ? (
          reviewsInfo.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don`n have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
}
