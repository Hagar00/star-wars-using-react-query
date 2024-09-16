// fetch data planets from SWAPI api 

export const fetchPlanets = async () => {
  const response = await fetch('https://swapi.dev/api/planets/');
  
  if (!response.ok) {
    throw new Error('Failed to fetch planets data');
  }
  
  return response.json();
};
