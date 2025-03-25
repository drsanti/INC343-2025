import { useEffect, useState } from 'react';
import { Led } from './components/LedComponent';

type BlinkingLedProps = {
  color: string;
  initialState: boolean;
  freq: number;
};

export const BlinkingLed = (props: BlinkingLedProps) => {
  const [ledState, setLedState] = useState(props.initialState);
  useEffect(() => {
    const tMs = 1000 / props.freq / 2;
    const timer = setInterval(() => {
      setLedState((oldState) => !oldState);
    }, tMs);
    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return <Led color={props.color} state={ledState} />;
};

export const App = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-12 gap-8">
      <BlinkingLed color={'red'} initialState={false} freq={1} />
    </div>
  );
};
