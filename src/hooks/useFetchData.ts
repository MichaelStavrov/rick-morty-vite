import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from 'context/DataProvider';
import { CharacterData, EpisodData, LocationData } from 'types';

interface FetchDataParams {
  page: number;
}

interface FetchDataReturnTypeInfo {
  count: number;
  next: string;
  pages: number;
  prev: null;
}

interface FetchDataReturnType<T> {
  info: FetchDataReturnTypeInfo;
  results: T[];
}

const fetchData = async <T>(
  url: string,
  params?: FetchDataParams
): Promise<FetchDataReturnType<T>> => {
  const res = await axios(url, { params });

  return res.data;
};

const BASE_URL = 'https://rickandmortyapi.com/api';

type DataType = 'character' | 'location' | 'episode';

const useFetchData = <T>(dataType: DataType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const { heroes, setHeroes, locations, setLocations, episodes, setEpisodes } =
    useDataContext();

  useEffect(() => {
    setIsLoading(true);

    fetchData<T>(`${BASE_URL}/${dataType}`, {
      page,
    })
      .then((res) => {
        if (res.results.length > 0) {
          const { results: data } = res;
          switch (dataType) {
            case 'character':
              setHeroes(data as CharacterData[]);
              break;
            case 'location':
              setLocations(data as LocationData[]);
              break;
            case 'episode':
              setEpisodes(data as EpisodData[]);
              break;

            default:
              break;
          }
          setIsError(false);
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      })
      .catch(() => {
        console.log('ERROR');

        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, [page, dataType, setHeroes, setLocations, setEpisodes]);

  useEffect(() => {
    return () => {
      switch (dataType) {
        case 'character':
          setHeroes([]);
          break;
        case 'location':
          setLocations([]);
          break;
        case 'episode':
          setEpisodes([]);
          break;

        default:
          break;
      }
    };
  }, [dataType, setEpisodes, setHeroes, setLocations]);

  const onLoad = () => setPage((prev) => prev + 1);

  return {
    heroes,
    locations,
    episodes,
    isLoading,
    isError,
    hasMore,
    onLoad,
  };
};

export default useFetchData;
