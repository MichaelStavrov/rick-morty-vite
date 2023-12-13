import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ListItem.module.scss';

interface ListItemProps {
  id: string | number;
  name: string;
  [key: string]: unknown;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((data, ref) => {
  const { id, name } = data;

  return (
    <li ref={ref}>
      <NavLink
        style={({ isActive }) => (isActive ? { color: 'orange' } : {})}
        className={styles.item}
        to={id.toString()}
        onClick={() => window.scrollTo(0, 0)}
      >
        {typeof data?.image === 'string' && <img src={data.image} alt={name} />}
        {name}
      </NavLink>
    </li>
  );
});

export default ListItem;
