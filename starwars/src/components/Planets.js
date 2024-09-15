import React from 'react'
import { useQuery } from 'react-query'
import Planet from '../pages/Planet';

const fetchPlanets=async()=>{
  const res= await fetch('https://swapi.dev/api/planets/')
  return res.json();
}
function Planets() {
  const { data , status } = useQuery('planets', fetchPlanets);

  return (
    <>
    {status==='error'&& 
    <div>
      Error Fetching Data 
      </div>
    }
    {status ==='loading'&&
    <div>
      loading Data .....
      </div>
    }
    {
      status==='success'&&
      <div>
        <h3>Planets</h3>
        {data.results.map(planet=><Planet key={planet.name} planet={planet} />)}
    
      </div>
    }

    </>
  )
}

export default Planets