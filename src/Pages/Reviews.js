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

  return (
    <>
      {reviewsInfo && reviewsInfo.length > 0 ? (
        <ul>
          {reviewsInfo.map(review => {
            const { id, author, content } = review;
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
