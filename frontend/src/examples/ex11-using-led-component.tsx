import { Led } from './components/LedComponent';

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
