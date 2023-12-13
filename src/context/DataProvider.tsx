import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';
import { CharacterData, LocationData, EpisodData } from 'types';

interface DataState {
  heroes: CharacterData[];
  locations: LocationData[];
  episodes: EpisodData[];
  setHeroes: (data: CharacterData[]) => void;
  setLocations: (data: LocationData[]) => void;
  setEpisodes: (data: EpisodData[]) => void;
}

const DataContext = createContext<DataState>({} as DataState);

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [heroes, setHeroes] = useState<CharacterData[]>([]);
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [episodes, setEpisodes] = useState<EpisodData[]>([]);

  const cachedSetHeroes = useCallback(
    (data: CharacterData[]) => setHeroes((prev) => [...prev, ...data]),
    []
  );

  const cachedsetLocations = useCallback(
    (data: LocationData[]) => setLocations((prev) => [...prev, ...data]),
    []
  );

  const cachedsetEpisodes = useCallback(
    (data: EpisodData[]) => setEpisodes((prev) => [...prev, ...data]),
    []
  );

  const state: DataState = {
    heroes,
    locations,
    episodes,
    setHeroes: cachedSetHeroes,
    setLocations: cachedsetLocations,
    setEpisodes: cachedsetEpisodes,
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);

export default DataProvider;
