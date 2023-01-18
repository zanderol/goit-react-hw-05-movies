import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'api/api';
import { Review, ReviewTitle } from './Reviews.styled';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function getReviews() {
      const data = await getMovieReviews(id);
      setReview(data);
    }
    getReviews();
  }, [id]);

  return (
    <Review>
      <ul>
        {review.map(({ author, content, id }) => (
          <li key={id}>
            <ReviewTitle>{author}</ReviewTitle>
            <p>{content}</p>
          </li>
        ))}
      </ul>
      {review.length === 0 && <h3>We don't have any reviews for this movie</h3>}
    </Review>
  );
};

Reviews.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
};

export default Reviews;
