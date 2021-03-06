import { useRef, useState, useEffect } from "react";
/**
 * Hook for fetching remote data from given endpoints
 *
 * @param url the url you want to fetch from
 *
 * @example const { data, status } = useFetch('www.google.com')
 */
export const useFetch = (url) => {
  const cache = useRef({});
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setStatus("fetched");
      } else {
        const response = await fetch(url);
        const data = await response.json();
        cache.current[url] = data; // set response in cache;
        setData(data);
        setStatus("fetched");
      }
    };

    fetchData();
  }, [url]);

  return { status, data };
};
