import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import styles from './Home.module.scss';
import AuthStatus from 'components/AuthStatus';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <AuthStatus />
      <Outlet />
    </div>
  );
};

export default Home;
