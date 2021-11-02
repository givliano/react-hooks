import React from 'react';

const INITIAL_LIST = [
  {
    id: '0',
    title: 'React with RxJS for State Management Tutorial',
    url:
      'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
  },
  {
    id: '1',
    title: 'React with Apollo and GraphQL Tutorial',
    url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
  },
];

function UseStateApp() {
  // useState returns two variables, the first one is the actual state,
  // the second one is a function to update the state by providing a new state
  const [list, setList] = React.useState(INITIAL_LIST);

  function onRemoveItem(id) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  return (
    <div>
      <h1>Simple Use State</h1>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <a href={item.url}>{item.title}</a>
            <button type="button" onClick={() => onRemoveItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateApp;
