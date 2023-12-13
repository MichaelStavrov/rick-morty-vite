import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Providers from 'components/Providers';
import { RoutesMap } from 'routesMap';
import Home from 'pages/Home';
import Locations from 'pages/Locations';
import Heroes from 'pages/Heroes';
import Episodes from 'pages/Episodes';
import StartPage from 'pages/StartPage';
import Hero from 'pages/Heroes/Hero';
import NotFoundPage from 'pages/NotFoundPage';
import Location from 'pages/Locations/Location';
import Episode from 'pages/Episodes/Episode';
import SignIn from 'pages/SignIn';
import PrivateRoutes from 'components/PrivateRoutes';

function App() {
  return (
    <Providers>
      <Routes>
        <Route path={RoutesMap.home} element={<Home />}>
          <Route index element={<StartPage />} />

          <Route
            path={RoutesMap.locations}
            element={
              <PrivateRoutes>
                <Locations />
              </PrivateRoutes>
            }
          >
            <Route path={RoutesMap.location} element={<Location />} />
          </Route>
          <Route
            path={RoutesMap.heroes}
            element={
              <PrivateRoutes>
                <Heroes />
              </PrivateRoutes>
            }
          >
            <Route path={RoutesMap.hero} element={<Hero />} />
          </Route>
          <Route
            path={RoutesMap.episodes}
            element={
              <PrivateRoutes>
                <Episodes />
              </PrivateRoutes>
            }
          >
            <Route path={RoutesMap.episode} element={<Episode />} />
          </Route>
        </Route>
        <Route path={RoutesMap.signIn} element={<SignIn />} />
        <Route path={RoutesMap.notFound} element={<NotFoundPage />} />
      </Routes>
    </Providers>
  );
}

export default App;
