import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(async () => {
    const result = await fetch('https://hn.algolia.com/api/v1/search?query=redux');
    const resultJson = await result.json();
    console.log(resultJson);
    setData(resultJson);
  }, []);

  return (
    <ul>
      {data.hits.map(item => {
        <li key={item.objectId}>
          <a href={item.url}>{item.title}</a>
        </li>
      })}
    </ul>
  )
}

export default App;
