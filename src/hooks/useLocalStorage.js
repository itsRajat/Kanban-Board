import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  const [data, setData] = useState(stored ? JSON.parse(stored) : defaultValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
};

export default useLocalStorage;
