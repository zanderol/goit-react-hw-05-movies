import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 10px;
  font-size: 30px;
  transition: all 0.3s;
  :last-child {
    margin: 0;
  }

  &.active {
    color: lightslategrey;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
  }
`;

const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 10;
  display: flex;
  justify-content: start;
  align-items: center;
  min-height: 64px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 10px;
  color: #fff;
  background-color: #30d5c8;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export { StyledLink, Header };
