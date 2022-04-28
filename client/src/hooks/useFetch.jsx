import { useState, useEffect } from "react";

export const useFetch = (url, init) => {
  const [data, setData] = useState(init);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = () => {
    setData(init);
    setError(false);
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch(url);
        const resData = await resp.json();

        setData(resData);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
    return () => handleReset();
  }, [url]);

  return { data, error, isLoading };
};
