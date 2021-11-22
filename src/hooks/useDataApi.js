import { useState, useEffect, useReducer } from 'react';

function dataFetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
       };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
       };
    default:
    throw new Error();
  }
}

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  useEffect(() => {
    // Flag to prevent setting state when the component is unmounted.
    let didCancel = true;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await fetch(url);
        const resultJson = await result.json();

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: resultJson });
        }
      } catch (e) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    }

    fetchData();

    return () {
      didCancel = true;
    }
  }, [url]);

  return [state, setUrl]
}

export default useDataApi;
