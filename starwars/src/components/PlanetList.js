import React from 'react'
import PlanetCard from './PlanetCard'

function PlanetList({planets}) {
  return (
    <div>
      {planets.map(planet => (
        <PlanetCard key={planet.name} planet={planet} />
      ))}
    </div>
  )
}

export default PlanetList