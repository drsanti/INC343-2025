import { useState } from 'react';

export const App = () => {
  const [value, setValue] = useState<number>(50);

  function increment() {
    if (value >= 100) {
      setValue(100);
    } else {
      setValue(value + 5);
    }
  }

  function decrement() {
    if (value <= 0) {
      setValue(0);
    } else {
      setValue(value - 5);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center p-4 m-4">
      <div className="flex flex-row gap-2 items-center">
        <div>Value:</div>
        <div className="flex items-center px-1 w-[200px] h-4 bg-blue-950 border border-gray-700 rounded-full">
          <div
            className="h-[8px] bg-blue-500 rounded-full"
            style={{ width: `${value * 2}px` }}
          ></div>
        </div>
        <div className="w-12">{value}%</div>
      </div>

      <div className="flex justify-center gap-2">
        <button onClick={decrement}>[-]</button>
        <button onClick={increment}>[+]</button>
      </div>
    </div>
  );
};
