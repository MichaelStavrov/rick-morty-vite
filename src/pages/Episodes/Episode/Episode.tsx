import React from 'react';
import useItemData from 'hooks/useItemData';
import useFetchData from 'hooks/useFetchData';
import makeCardData from 'utils/makeCardData';
import Card from 'components/Card';

const Episode = () => {
  const { episodes } = useFetchData('episode');
  const data = useItemData(episodes);

  if (!data) return null;

  const { name, episode: ep } = data;

  const cardData = makeCardData({
    Имя: name,
    Эпизод: ep,
  });

  return <Card data={cardData} />;
};

export default Episode;
