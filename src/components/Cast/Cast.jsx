import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/api';
import { ListCast, ListItem, Image } from './Cast.styled';
import { Container } from 'components/App/App.styled';
import PropTypes from 'prop-types';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getMovie() {
      const data = await getMovieCast(id);
      setCast(data);
    }
    getMovie();
  }, [id]);
  const base_img_url = 'https://image.tmdb.org/t/p/w200';
  return (
    <Container>
      {cast.length === 0 ? (
        <h2>No cast</h2>
      ) : (
        <ListCast>
          {cast.map(({ profile_path, name, character, cast_id }) => {
            return (
              <ListItem key={cast_id}>
                <Image
                  src={
                    profile_path
                      ? `${base_img_url}${profile_path}`
                      : 'http://dummyimage.com/200x300&text=no+photo'
                  }
                  alt={name}
                  width="200"
                  height="300"
                />
                <h3>{name}</h3>
                <p>{character}</p>
              </ListItem>
            );
          })}
        </ListCast>
      )}
    </Container>
  );
};
Cast.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
  cast_id: PropTypes.number,
};
export default Cast;
