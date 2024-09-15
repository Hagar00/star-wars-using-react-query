import React from 'react'
import Person from '../pages/Person'
import { useQuery } from 'react-query';

const fetchPeople=async()=>{
  const res= await fetch('https://swapi.dev/api/people/')
  return res.json();
}
function People() {
    const { data , status } = useQuery('people', fetchPeople);
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
        <h3>people</h3>
       { data.results.map(person => <Person key={person.name} person={person} /> ) }
    
      </div>
    }

    </>
  )
}

export default People