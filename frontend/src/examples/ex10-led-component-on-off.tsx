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
    case 'blue':
      return {
        light: '#0044ff',
        dark: '#002277',
      };
    default:
      return {
        light: '#ffffff',
        dark: '#555555',
      };
  }
};

const Led = ({ color, state }: { color: string; state: boolean }) => {
  const colors = colorProvider(color);
  return (
    <div
      className="w-12 h-12 rounded-full"
      style={{
        background: `radial-gradient(circle, ${state ? colors.light : colors.dark} 20%, ${colors.dark} 70%)`,
        boxShadow: state ? `0 0 10px 4px ${colors.dark}` : 'none',
      }}
    ></div>
  );
};

export const App = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-12 gap-8">
      <Led color={'red'} state={true} />
      <Led color={'green'} state={true} />
      <Led color={'yellow'} state={true} />
      <Led color={'blue'} state={true} />
    </div>
  );
};
