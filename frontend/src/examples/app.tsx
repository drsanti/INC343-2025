// import { useState } from 'react';

// export const App = () => {
//   return (
//     <div className="flex flex-col justify-center my-8 mx-2">
//       <Ex04 />
//       <HLine />
//       <Ex05 />
//       <HLine />
//       <Ex06 />
//     </div>
//   );
// };

// const Ex04 = () => {
//   const [counter, setCounter] = useState<number>(0);
//   function handleClick() {
//     setCounter(counter + 1);
//   }

//   return (
//     <div className="flex flex-col items-center">
//       <div className="text-2xl text-blue-400">ex04: Simple Counter</div>
//       <span className="text-4xl">{counter}</span>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// };

// const Ex05 = () => {
//   const [colorClass, setColorClass] = useState<string>('bg-red-500');
//   function red() {
//     setColorClass('bg-red-500');
//   }
//   function green() {
//     setColorClass('bg-green-500');
//   }
//   return (
//     <div className="flex flex-col items-center mt-4">
//       <h2 className="text-2xl text-yellow-500 mb-2">ex05: LED Dynamic Class</h2>
//       <div className={`w-12 h-12 rounded-full text-2xl ${colorClass}`}></div>
//       <div className="flex flex-row gap-2 pt-2">
//         <button className="w-24 text-red-500" onClick={red}>
//           Red
//         </button>
//         <button className="w-24 text-green-500" onClick={green}>
//           Green
//         </button>
//       </div>
//     </div>
//   );
// };

// const Ex06 = () => {
//   const [value, setValue] = useState<number>(20);

//   function increment() {
//     if (value >= 100) {
//       setValue(100);
//     } else {
//       setValue(value + 5);
//     }
//   }

//   function decrement() {
//     if (value <= 0) {
//       setValue(0);
//     } else {
//       setValue(value - 5);
//     }
//   }

//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-2xl text-green-500 mb-2">
//         ex06: Styling with Dynamic Arbitrary Values
//       </h2>
//       <div className="flex flex-row justify-center items-center gap-1">
//         <div>Value:</div>
//         <div className="bg-gray-900 p-[2px] rounded-[8px] w-[200px] border border-gray-700">
//           <div
//             style={{ width: `${value * 2}px` }}
//             className="h-[8px] rounded-[4px] bg-blue-500"
//           ></div>
//         </div>

//         <div className="w-14">{value}%</div>
//       </div>
//       <div className="flex flex-row justify-center gap-2">
//         <button onClick={decrement}>[-]</button>
//         <button onClick={increment}>[+]</button>
//       </div>
//     </div>
//   );
// };

// const HLine = () => (
//   <div className="w-full h-[2px] bg-gray-500 mb-4 mt-8"></div>
// );

//-----------------------------------------------------------------------

// import { TernionSimulator } from './simulator';
// import { useEffect, useRef } from 'react';

// export const App = () => {
//   const divRef = useRef<HTMLDivElement | null>(null);
//   const simulatorRef = useRef<TernionSimulator | null>(null);

//   useEffect(() => {
//     if (divRef.current && !simulatorRef.current) {
//       const simulator = new TernionSimulator(divRef.current);
//       simulatorRef.current = simulator;
//       simulator.start();
//     } else {
//       throw new Error('divRef.current is null');
//     }

//     return () => {
//       if (simulatorRef.current) {
//         simulatorRef.current.stop();
//         simulatorRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div className="flex justify-center items-center mt-4">
//       <div
//         ref={divRef}
//         className="relative h-[762px]" // Ensure it has a fixed size
//       ></div>
//     </div>
//   );
// };

//------------------------------------------------------------------------
import { useTBoard } from './simulator/useTBoard';

import { ReactNode } from 'react';

interface CenteredContainerProps {
  children: ReactNode;
}

export const CenteredContainer = ({ children }: CenteredContainerProps) => {
  return (
    <div className="flex justify-center h-screen items-center">{children}</div>
  );
};
export const App = () => {
  const containerRef = useTBoard();

  return (
    <CenteredContainer>
      <div ref={containerRef} />
    </CenteredContainer>
  );
};
