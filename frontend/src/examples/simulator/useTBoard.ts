import { useEffect, useRef } from 'react';
import { TBoard } from './TBoard';

export const useTBoard = (callback?: (board: TBoard) => void) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boardRef = useRef<TBoard | null>(null);

  useEffect(() => {
    const container = containerRef.current; // Store initial ref value

    if (container) {
      boardRef.current = new TBoard();
      container.appendChild(boardRef.current.container);
      callback?.(boardRef.current);
    }

    return () => {
      if (boardRef.current) {
        boardRef.current.dispose();
        if (container && boardRef.current.container) {
          container.removeChild(boardRef.current.container);
        }
      }
    };
  }, [callback]);

  return containerRef;
};
