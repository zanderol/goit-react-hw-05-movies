import { searchMovieByValue } from 'api/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Form from 'components/Form';
import MovieList from 'components/MovieList';
import { Container } from 'components/App/App.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (value === '') {
      return;
    }
    async function fetchMovies() {
      const movie = await searchMovieByValue(value);
      const results = movie.map(({ id, title, poster_path }) => ({
        id,
        title,
        poster_path,
      }));
      setMovies(results);
    }
    fetchMovies();
  }, [value]);

  const formSubmit = searchQuery => {
    setSearchParams('');
    updateSearchValue(searchQuery);
  };

  const updateSearchValue = query => {
    const nextValue = query !== '' ? { query } : {};
    setSearchParams(nextValue);
  };

  return (
    <main>
      <Form onSubmit={formSubmit} />
      {movies && <MovieList movies={movies} />}
      {movies.length > 0 && (
        <Container>
          <h2>No results, try again</h2>
        </Container>
      )}
    </main>
  );
};

export default Movies;
