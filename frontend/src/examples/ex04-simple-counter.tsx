import { useState } from 'react';

export const App = () => {
  const [counter, setCounter] = useState<number>(0);
  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl text-blue-400">Simple Counter</div>
      <span className="text-4xl">{counter}</span>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
