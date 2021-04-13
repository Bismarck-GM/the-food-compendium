import React from 'react';
import useFetch from '../useFetch';

function App() {
  const { data, error, loading } = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.ph',
  );

  if (error) {
    return `Error: ${error} `;
  }

  if (loading) {
    return 'Loading...';
  }

  if (data) {
    console.log(data);
    return `${data}`;
  }

  return (
    <div className="App">
      Tuvieja
    </div>
  );
}

export default App;
