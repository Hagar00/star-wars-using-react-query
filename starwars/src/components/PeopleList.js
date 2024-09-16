import React from 'react'
import PersonCard from './PersonCard'



function PeopleList({people}) {
  return (
   <div>
      {people.map(person => (
        <PersonCard key={person.name} person={person} />
      ))}
    </div>
  )
}

export default PeopleList