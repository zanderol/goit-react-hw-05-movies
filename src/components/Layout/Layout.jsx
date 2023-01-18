import { Suspense } from 'react';
// import { lazy } from 'react';

import { Spinner } from 'components/Spinner/Spinner';
import { AppBar } from 'components/AppBar/AppBar';
// import { Box } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}
