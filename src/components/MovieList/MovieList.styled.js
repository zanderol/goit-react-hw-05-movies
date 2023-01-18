import styled from 'styled-components';

const MoviesGallery = styled.ul`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 20px;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
`;
const MoviesImage = styled.img`
  box-shadow: 0 0 5px #000;
  border-radius: 6px;
`;
const MovieTitle = styled.h2`
  color: #000;
`;
const MovieItem = styled.li`
  transition: all 0.3s;
  &:hover {
    transform: scale(1.005);
  }
`;

export { MoviesGallery, MoviesImage, MovieTitle, MovieItem };
