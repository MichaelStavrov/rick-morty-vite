import { useParams } from 'react-router-dom';

const useItemData = <T extends { id: number }>(data: T[]): T | undefined => {
  const params = useParams();
  const item = data.find(({ id }) => params.id === id.toString());

  return item;
};

export default useItemData;
