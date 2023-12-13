import React from 'react';
import { Outlet } from 'react-router-dom';
import useFetchData from 'hooks/useFetchData';
import List from 'components/List';
import CategoryLayout from 'components/CategoryLayout';

const Episodes = () => {
  const { episodes, isLoading, isError, hasMore, onLoad } =
    useFetchData<CharacterData>('episode');

  return (
    <CategoryLayout>
      <Outlet />
      <List
        data={episodes}
        infinityScroll={{
          hasMore,
          loading: isLoading,
          onLoad,
          isError,
        }}
        dir='column'
      />
    </CategoryLayout>
  );
};

export default Episodes;
