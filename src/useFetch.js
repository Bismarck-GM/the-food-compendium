import { useEffect, useState, useCallback } from 'react';

const useFetch = (service) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const fetchAPI = useCallback(async () => {
    try {
      const res = await fetch(service);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [service]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return { data, error, loading };
};

export default useFetch;
