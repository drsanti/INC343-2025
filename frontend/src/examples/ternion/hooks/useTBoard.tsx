import { useEffect, useRef } from 'react';
import { TBoard } from '../TBoard';

export const useTBoard = (
  callback?: (board: TBoard) => void,
  brightness: number = 100,
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boardRef = useRef<TBoard | null>(null);

  useEffect(() => {
    const container = containerRef.current; // Store initial ref value

    if (container) {
      boardRef.current = new TBoard((ternion) => {
        callback?.(ternion);
      }, brightness);
      container.appendChild(boardRef.current.container);
    }

    return () => {
      if (boardRef.current) {
        boardRef.current.dispose();
        if (container && boardRef.current.container) {
          container.removeChild(boardRef.current.container);
        }
      }
    };
  }, [brightness, callback]);

  return containerRef;
};
