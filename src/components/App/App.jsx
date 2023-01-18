import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout';

const Home = lazy(() => import('pages/Home'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="movies" element={<Movies />} /> */}
          {/* <Route path="movies/:id" element={<MovieDetails />}> */}
          {/* <Route path="cast" element={<Cast />} /> */}
          {/* <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
