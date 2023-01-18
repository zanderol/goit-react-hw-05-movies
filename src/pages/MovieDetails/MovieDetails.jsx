import { useState, useEffect } from 'react';
import { getMovieById } from 'api/api';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  Details,
  Poster,
  Heading,
  Description,
  ListItem,
  ListLink,
  Image,
  Wrapper,
} from './MovieDetails.styled';
import { Container } from 'components/App/App.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getById() {
      const data = await getMovieById(id);
      setMovie(data);
    }
    getById();
  }, [id]);
  const location = useLocation();
  const base_img_url = 'https://image.tmdb.org/t/p/w500';
  const {
    original_title,
    overview,
    release_date = '',
    backdrop_path,
    vote_average,
    genres = [],
  } = movie;

  let genresList = genres.map(elem => elem.name);
  const backLink = location.state?.from ?? '/movies';
  return (
    <Container>
      <ListLink to={backLink}>Back</ListLink>
      <Details>
        <Poster>
          <Image
            src={
              backdrop_path
                ? `${base_img_url}${backdrop_path}`
                : 'https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
            }
            alt={original_title}
          />
        </Poster>
        <Wrapper>
          <Heading>
            {original_title} ({release_date.slice(0, 4)})
          </Heading>
          <Description>
            User Score: {Math.round((vote_average * 100) / 10)}%
          </Description>
          <Heading>Overview</Heading>
          <Description>{overview}</Description>
          <Heading>Genres</Heading>
          <Description>{genresList.join(', ')}</Description>
        </Wrapper>
      </Details>

      <div>
        <Heading>Additional information</Heading>
        <ul>
          <ListItem>
            <ListLink to="cast" state={location.state}>
              Cast
            </ListLink>
          </ListItem>
          <ListItem>
            <ListLink to="reviews" state={location.state}>
              Reviews
            </ListLink>
          </ListItem>
        </ul>
      </div>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
