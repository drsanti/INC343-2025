import { useState } from 'react';

export const App = () => {
  const clsGreen = 'bg-green-500';
  const clsRed = 'bg-red-500';
  const clsShape = `w-14 h-14 rounded-full`;

  const [clsColor, setClsColor] = useState<string>(clsGreen);

  function red() {
    setClsColor(clsRed);
  }

  function green() {
    setClsColor(clsGreen);
  }

  return (
    <div className="flex flex-col items-center mt-7">
      <div className={`${clsShape} ${clsColor}`}></div>
      <div className="flex flex-row gap-4 mt-4">
        <button className="w-24" onClick={red}>
          RED
        </button>
        <button className="w-24" onClick={green}>
          GREEN
        </button>
      </div>
    </div>
  );
};
