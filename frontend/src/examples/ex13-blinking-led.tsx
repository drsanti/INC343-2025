import { useEffect, useState } from 'react';
import { Led } from './components/LedComponent';

export const App = () => {
  const [ledState, setLedState] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setLedState((old) => !old);
    }, 250);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-row items-center justify-center mt-12 gap-8">
      <Led color={'red'} state={ledState} />
      <Led color={'yellow'} state={ledState} />
      <Led color={'green'} state={ledState} />
      <Led color={'blue'} state={ledState} />
    </div>
  );
};
