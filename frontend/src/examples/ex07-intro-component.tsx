export const App = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-12 gap-8">
      {/* Red LED */}
      <div
        className="w-12 h-12 rounded-full"
        style={{
          background: 'radial-gradient(circle, #ff0000 30%, #8b0000 70%)',
          boxShadow: '0 0 10px 4px rgba(255, 0, 0, 0.7)',
        }}
      ></div>

      {/* Green LED */}
      <div
        className="w-12 h-12 rounded-full"
        style={{
          background: 'radial-gradient(circle, #00ff00 30%, #008b00 70%)',
          boxShadow: '0 0 10px 4px rgba(0, 255, 0, 0.7)',
        }}
      ></div>

      {/* Blue LED */}
      <div
        className="w-12 h-12 rounded-full"
        style={{
          background: 'radial-gradient(circle, #0000ff 30%, #00008b 70%)',
          boxShadow: '0 0 10px 4px rgba(0, 0,255, 0.7)',
        }}
      ></div>
    </div>
  );
};
