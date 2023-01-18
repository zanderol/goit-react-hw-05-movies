import styled from 'styled-components';

const ListCast = styled.ul`
  display: block;
  margin: o auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
  }
`;

const ListItem = styled.li`
  @media screen and (max-width: 1279px) {
    text-align: center;
  }
`;
const Image = styled.img`
  @media screen and (max-width: 1279px) {
    margin: 0 auto;
  }
`;
export { ListCast, ListItem, Image };
