import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import parseDate from 'utils/parseDate';

export interface RequiredProps {
  id: string | number;
  name: string;
  created: string;
}

const useSortData = <T extends RequiredProps>(data: T[]) => {
  const [searchParams] = useSearchParams();
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    const currentSort =
      searchParams.get('sort') ?? localStorage.getItem('sort');

    const newData = [...data].sort((a, b) =>
      currentSort === 'ASC'
        ? +parseDate(a.created) - +parseDate(b.created)
        : +parseDate(b.created) - +parseDate(a.created)
    );

    setSortedData(newData);
  }, [data, searchParams]);

  return sortedData;
};

export default useSortData;
