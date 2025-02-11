import { useState } from 'react';

export const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl">{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};
