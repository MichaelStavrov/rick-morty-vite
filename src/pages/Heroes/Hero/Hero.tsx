import React from 'react';
import useItemData from 'hooks/useItemData';
import useFetchData from 'hooks/useFetchData';
import makeCardData from 'utils/makeCardData';
import Card from 'components/Card';

const Hero = () => {
  const { heroes } = useFetchData('character');
  const data = useItemData(heroes);

  if (!data) {
    return null;
  }

  const { name, image, status, species, gender, type } = data;

  const cardData = makeCardData({
    Имя: name,
    Статус: status,
    Вид: species,
    Пол: gender,
    Тип: type,
  });

  return <Card data={cardData} image={image} />;
};

export default Hero;
