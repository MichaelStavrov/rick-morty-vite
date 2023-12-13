import React, { CSSProperties } from 'react';
import useSortData from 'hooks/useSortData';
import ListItem from '../ListItem';
import styles from './List.module.scss';
import useInfinityScroll, {
  UseInfinityScrollProps,
} from 'hooks/useInfinityScroll';

interface ListProps<T> {
  data: T[];
  infinityScroll: UseInfinityScrollProps;
  dir?: CSSProperties['flexDirection'];
}

const List = <
  T extends { id: string | number; name: string; created: string }
>({
  data,
  dir,
  infinityScroll,
}: ListProps<T>) => {
  const sortedData = useSortData(data);
  const { lastElemRef, isError } = useInfinityScroll(infinityScroll);

  return (
    <ul className={styles.list} style={{ flexDirection: dir }}>
      {sortedData.map(({ id, name, ...rest }, index) => (
        <ListItem
          ref={sortedData.length === index + 1 ? lastElemRef : undefined}
          key={id}
          {...{ id, name }}
          {...rest}
        />
      ))}
      {isError && <span className={styles.emptyData}>Данных больше нет</span>}
    </ul>
  );
};

export default List;
