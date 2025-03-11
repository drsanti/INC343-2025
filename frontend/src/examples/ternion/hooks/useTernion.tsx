import { TBoard } from '../TBoard';
import { useTBoard } from './useTBoard';

export const useTernion = (
  simEnabled: boolean = true,
  simulationInterval: number = 70,
) => {
  const ternionRef = useTBoard((ternion: TBoard) => {
    if (simEnabled) ternion.simulate();
  }, simulationInterval);

  return ternionRef;
};
