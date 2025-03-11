import { useTernion } from '../hooks/useTernion';

export const TernionComponent = ({
  simEnabled,
  brightness,
}: {
  simEnabled?: boolean;
  brightness?: number;
}) => {
  const ternionRef = useTernion(simEnabled ?? true, brightness ?? 70);
  return <div ref={ternionRef} />;
};
