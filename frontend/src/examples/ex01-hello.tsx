/**----- Example 1: Using inline style -----------------------------------*/
export const App = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <div className="text-4xl bg-green-600 w-full text-center">Hello</div>
    <div className="text-xl bg-yellow-800 w-full text-center">INC343</div>
  </div>
);

/**----- Example 2: Using css file -----------------------------------*/
// import './styles/ex01-hello.css';
// export const App = () => (
//   <div className="container">
//     <div className="hello">Hello</div>
//     <div className="inc343">INC343</div>
//   </div>
// );
