import React from 'react';
import { Outlet } from 'react-router-dom';
import useFetchData from 'hooks/useFetchData';
import List from 'components/List';
import CategoryLayout from 'components/CategoryLayout';
import { CharacterData } from 'types';

const Heroes = () => {
  const { heroes, isLoading, isError, hasMore, onLoad } =
    useFetchData<CharacterData>('character');

  return (
    <CategoryLayout>
      <Outlet />
      <List
        data={heroes}
        infinityScroll={{
          hasMore,
          loading: isLoading,
          onLoad,
          isError,
        }}
      />
    </CategoryLayout>
  );
};

export default Heroes;
