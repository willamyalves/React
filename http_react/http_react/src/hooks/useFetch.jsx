import { useState, useEffect } from "react";

export const useFetch = (url, method) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {

        setLoading(true);

      if (method === "GET") {
        const response = await fetch(url);
        const json = await response.json();

        setLoading(false);

        setData(json);
      }
    };
    fetchData();
  }, [url, method]);

  return { data, loading };
};