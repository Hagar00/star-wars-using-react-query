import React from 'react'
import PlanetList from '../components/PlanetList';
import { usePlanets } from '../hooks/usePlanets';


function Planets() {
 const { data, status, error } = usePlanets();

  if (status === 'loading') {
    return <div>Loading data...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>Planets</h3>
      <PlanetList planets={data.results} />
    </div>
  );
}

export default Planets