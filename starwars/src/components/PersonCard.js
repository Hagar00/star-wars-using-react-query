import React from 'react'

function PersonCard({person}) {
  return (
    <div className="card">
      <h3>{ person.name }</h3>
      <p>Gender - { person.gender }</p>
      <p>Birth year - { person.birth_year }</p>
    </div>
  )
}

export default PersonCard