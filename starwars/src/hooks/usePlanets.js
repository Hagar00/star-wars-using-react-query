
import { useQuery } from 'react-query';
import { fetchPlanets } from '../services/PlanetService';

export const usePlanets = () => {
  return useQuery('planets', fetchPlanets, {
    staleTime: 5000, // Cache data for 5 seconds
    cacheTime: 10000, // Keep data for 10 seconds after inactive
    retry: 1, // Retry once if it fails
  });
};
