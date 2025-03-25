import { useEffect, useState } from 'react';
import { Led } from './LedComponent';

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
      setLedState((old) => !old);
    }, tMs);
    return () => {
      clearInterval(timer);
    };
  }, [props.freq]);
  return <Led color={props.color} state={ledState} />;
};
