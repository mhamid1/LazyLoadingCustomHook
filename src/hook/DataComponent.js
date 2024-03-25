import React from 'react';
import useFetchData from './useFetchData';

function DataComponent() {
  const { data, isLoading, error } = useFetchData('https://jsonplaceholder.typicode.com/comments');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataComponent;