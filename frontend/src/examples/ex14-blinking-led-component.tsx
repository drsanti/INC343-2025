import { BlinkingLed } from './components/BlinkingLedComponent';

export const App = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-12 gap-8">
      <BlinkingLed color={'red'} initialState={true} freq={1} />
      <BlinkingLed color={'yellow'} initialState={false} freq={1} />
      <BlinkingLed color={'green'} initialState={true} freq={1} />
      <BlinkingLed color={'blue'} initialState={false} freq={1} />
    </div>
  );
};
