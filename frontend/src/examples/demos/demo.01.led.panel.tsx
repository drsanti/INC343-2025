import { ReactNode, useState } from 'react';

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

const Led = ({ color, state }: { color: string; state: boolean }) => {
  const colors = colorProvider(color);
  return (
    <div
      className="w-12 h-12 rounded-full"
      style={{
        background: `radial-gradient(circle, ${state ? colors.light : colors.dark} 20%, ${colors.dark} 70%)`,
        boxShadow: state ? `0 0 10px 4px ${colors.dark}` : `none`,
      }}
    ></div>
  );
};

const Panel = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row items-center justify-center w-1/2 mt-12 gap-8 bg-black rounded-2xl border-2 border-blue-900 p-4">
      {children}
    </div>
  );
};

export const App = () => {
  const [ledRed, setLedRed] = useState(false);
  const [ledGreen, setLedGreen] = useState(false);
  const [ledYellow, setLedYellow] = useState(false);

  const clickHandler = (id: string) => {
    switch (id) {
      case 'red':
        setLedRed(!ledRed);
        break;
      case 'green':
        setLedGreen(!ledGreen);
        break;
      case 'yellow':
        setLedYellow(!ledYellow);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex flex-row items-center justify-center gap-4">
        <span className="text-2xl text-green-400">Santi Nuratch</span>
        <span className="text-2xl text-orange-400">0123456789</span>
      </div>
      <Panel
        children={
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-md">LED Indicator</p>
            <div className="flex flex-row gap-4">
              <Led color="red" state={ledRed} />
              <Led color="green" state={ledGreen} />
              <Led color="yellow" state={ledYellow} />
            </div>
          </div>
        }
      ></Panel>

      <Panel
        children={
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-md">LED Controller</p>
            <div className="flex flex-row gap-4">
              <button
                onClick={() => clickHandler('red')}
                className="bg-blue-900 rounded-lg p-2 w-[100px] !outline-none"
                style={{
                  color: ledRed
                    ? colorProvider('red').light
                    : colorProvider('red').dark,
                }}
              >
                Red
              </button>
              <button
                onClick={() => clickHandler('green')}
                className="bg-blue-900 rounded-lg p-2 w-[100px] !outline-none"
                style={{
                  color: ledGreen
                    ? colorProvider('green').light
                    : colorProvider('green').dark,
                }}
              >
                Green
              </button>
              <button
                onClick={() => clickHandler('yellow')}
                className="bg-blue-900 rounded-lg p-2 w-[100px] !outline-none"
                style={{
                  color: ledYellow
                    ? colorProvider('yellow').light
                    : colorProvider('yellow').dark,
                }}
              >
                Yellow
              </button>
            </div>
          </div>
        }
      ></Panel>
    </div>
  );
};
