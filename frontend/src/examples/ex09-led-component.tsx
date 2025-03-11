const colorProvider = (color: string) => {
  switch (color) {
    case 'red':
      return {
        light: '#ff0000',
        dark: '#550000',
      };
    case 'green':
      return {
        light: '#00ff00',
        dark: '#005500',
      };
    case 'yellow':
      return {
        light: '#ffff00',
        dark: '#555500',
      };
    default:
      return {
        light: '#ffffff',
        dark: '#555555',
      };
  }
};

const Led = ({ color }: { color: string }) => {
  const colors = colorProvider(color);
  return (
    <div
      className="w-12 h-12 rounded-full"
      style={{
        background: `radial-gradient(circle, ${colors.light} 20%, ${colors.dark} 70%)`,
        boxShadow: `0 0 10px 4px ${colors.dark}`,
      }}
    ></div>
  );
};

export const App = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-12 gap-8">
      <Led color="red" />
      <Led color="green" />
      <Led color="yellow" />
      <Led color="white" />
    </div>
  );
};
