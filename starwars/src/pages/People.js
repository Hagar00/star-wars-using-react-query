import React from 'react'
import { usePeople } from '../hooks/usePeople';
import PeopleList from '../components/PeopleList';



function People() {
    const { data, status, error } = usePeople();

  if (status === 'loading') {
    return <div>Loading data...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }

return (
    <div>
      <h3>People</h3>
      <PeopleList people={data.results} />
    </div>
  );
}

export default People