export const App = () => {
  const data: number = 100.23;
  const name: string = 'INC343';
  const status: boolean = false;
  return (
    <div className="text-3xl">
      <div className="text-green-500">Voltage: {data} V</div>
      <div className="text-red-600">Name: {name}</div>
      <div className="text-yellow-300">Status: {status ? 'ON' : 'OFF'}</div>
    </div>
  );
};
