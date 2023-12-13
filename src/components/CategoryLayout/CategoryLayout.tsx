import React, { FC, PropsWithChildren } from 'react';
import SortControl from '../SortControl';
import styles from './CategoryLayout.module.scss';

const CategoryLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <SortControl />
      {children}
    </div>
  );
};

export default CategoryLayout;
