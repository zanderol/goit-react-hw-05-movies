import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';

import { Container } from 'components/App/App.styled';
import { Header, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <StyledLink to={'/'}>Home</StyledLink>
            {/* <StyledLink to={'/movies'}>Movies</StyledLink> */}
          </nav>
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
