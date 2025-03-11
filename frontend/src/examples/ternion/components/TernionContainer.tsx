import { ReactNode } from 'react';

interface TernionContainerProps {
  children: ReactNode;
}
export const TernionContainer = ({ children }: TernionContainerProps) => {
  return (
    <div className="select-none">
      <div className="text-6xl text-center mt-12 mb-8 text-teal-500">
        TERNION Virtual Lab.
      </div>
      <div className="text-3xl text-center mt-12 mb-8 text-teal-500">
        Embedded System vs. Digital Twin
      </div>
      <div className="flex justify-center h-screen items-start">{children}</div>
    </div>
  );
};
