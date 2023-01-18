import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7df42cbfe556b51b9350073f107b848c';
const TREND_DAY = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
const ID_URL = `${BASE_URL}/movie/`;
const SEARCH_MOVIE_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&page=1&include_adult=false`;

const getMovieTrendDay = async () => {
  try {
    const { data } = await axios.get(`${TREND_DAY}`);
    console.log(data);
    return data;
  } catch (error) {
    return console.log(error);
  }
};

const getMovieById = async id => {
  try {
    const { data } = await axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    return console.log(error);
  }
};

const getMovieCast = async id => {
  try {
    const { data } = await axios.get(
      `${ID_URL}${id}/credits?api_key=${API_KEY}`
    );
    return data.cast;
  } catch (error) {
    return console.log(error);
  }
};

const getMovieReviews = async id => {
  try {
    const { data } = await axios.get(
      `${ID_URL}${id}/reviews?api_key=${API_KEY}&page=1`
    );
    return data.results;
  } catch (error) {
    return console.log(error);
  }
};

const searchMovieByValue = async value => {
  try {
    const { data } = await axios.get(`${SEARCH_MOVIE_URL}&query=${value}`);
    return data.results;
  } catch (error) {
    return console.log(error);
  }
};

export {
  getMovieTrendDay,
  getMovieById,
  getMovieCast,
  getMovieReviews,
  searchMovieByValue,
};
