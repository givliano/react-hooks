import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('react');
  const [search, setSearch] = useState('react');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://hn.algolia.com/api/v1/search?query=${search}`);
      const resultJson = await result.json();
      setData(resultJson);
    }

    fetchData();
  }, [search]);

  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />

      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>

      <ul>
        {data.hits.map(item => (
          <li key={item.objectId}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default App;
