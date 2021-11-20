import { useState, useEffect } from 'react';

const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetch(url);
        const resultJson = await result.json();
        setData(resultJson);
      } catch (e) {
        setIsError(true);
      }

      setIsLoading(false);
    }

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
}

export default useDataApi;
