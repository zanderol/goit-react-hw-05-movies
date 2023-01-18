import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Details = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }
`;

const Poster = styled.div`
  width: 300px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

const Heading = styled.h3`
  color: #000;
  font-size: 24px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-style: italic;
  color: grey;
`;
const ListLink = styled(NavLink)`
  border-radius: 4px;
  padding: 2px 10px;
  background-color: teal;
  font-size: 18px;
  color: #000;
  transition: all 0.3s;
  &:hover,
  &:focus {
    box-shadow: 0 4px 4px #000;
  }
`;
const ListItem = styled.li`
  margin-bottom: 15px;
`;
export {
  Details,
  Poster,
  Heading,
  Description,
  ListItem,
  ListLink,
  Image,
  Wrapper,
};
