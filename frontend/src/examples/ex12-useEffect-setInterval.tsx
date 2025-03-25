import { useEffect, useState } from 'react';

export const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((oldCounter) => oldCounter + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h1>{counter}</h1>;
};
