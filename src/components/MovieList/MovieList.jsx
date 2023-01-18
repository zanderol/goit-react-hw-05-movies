import { Link, useLocation } from 'react-router-dom';
import { Container } from 'components/App/App.styled';
// import {
//   MoviesGallery,
//   MoviesImage,
//   MovieTitle,
//   MovieItem,
// } from './MovieList.styled';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      <MoviesGallery>
        {movies.map(({ id, title, poster_path }) => {
          const base_img_url = 'https://image.tmdb.org/t/p/w500';
          return (
            <MovieItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <MoviesImage
                  src={
                    poster_path
                      ? `${base_img_url}${poster_path}`
                      : 'https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
                  }
                  alt={title}
                  width="500"
                />
              </Link>
              <MovieTitle>{title}</MovieTitle>
            </MovieItem>
          );
        })}
      </MoviesGallery>
    </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};

export default MovieList;
