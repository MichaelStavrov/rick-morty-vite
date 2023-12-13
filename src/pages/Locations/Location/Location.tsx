import React from 'react';
import useItemData from 'hooks/useItemData';
import useFetchData from 'hooks/useFetchData';
import makeCardData from 'utils/makeCardData';
import Card from 'components/Card';

const Location = () => {
  const { locations } = useFetchData('location');
  const data = useItemData(locations);

  if (!data) {
    return null;
  }

  const { name, dimension, type } = data;

  const cardData = makeCardData({
    Имя: name,
    Измерение: dimension,
    Тип: type,
  });

  return <Card data={cardData} />;
};

export default Location;
