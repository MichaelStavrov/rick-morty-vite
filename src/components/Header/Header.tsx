import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesMap } from 'routesMap';
import styles from './Header.module.scss';

const navigation = [
  { to: RoutesMap.heroes, label: 'Герои' },
  { to: RoutesMap.locations, label: 'Локации' },
  { to: RoutesMap.episodes, label: 'Эпизоды' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {navigation.map(({ to, label }) => (
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'orange' } : {})}
            className={styles.link}
            key={to}
            to={to}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
