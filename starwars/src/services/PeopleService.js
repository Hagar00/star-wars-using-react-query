// fetch data planets from SWAPI api 

export const fetchPlanets = async () => {
  const response = await fetch('https://swapi.dev/api/people/');
  
  if (!response.ok) {
    throw new Error('Failed to fetch people data');
  }
  
  return response.json();
};