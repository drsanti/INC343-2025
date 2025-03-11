const Led = () => {
  return (
    <div
      className="w-12 h-12 rounded-full"
      style={{
        background: 'radial-gradient(circle, #ff0000 30%, #8b0000 70%)',
        boxShadow: '0 0 10px 4px rgba(255, 0, 0, 0.7)',
      }}
    ></div>
  );
};

export const App = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-12 gap-8">
      <Led />
      <Led />
      <Led />
      <Led />
    </div>
  );
};
