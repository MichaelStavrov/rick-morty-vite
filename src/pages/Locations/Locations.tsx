import React from 'react';
import { Outlet } from 'react-router-dom';
import List from 'components/List';
import CategoryLayout from 'components/CategoryLayout';
import useFetchData from 'hooks/useFetchData';

const Locations = () => {
  const { locations, isLoading, isError, hasMore, onLoad } =
    useFetchData<CharacterData>('location');

  return (
    <CategoryLayout>
      <Outlet />
      <List
        data={locations}
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

export default Locations;
