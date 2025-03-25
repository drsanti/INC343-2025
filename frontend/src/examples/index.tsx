import React from 'react';
import ReactDOM from 'react-dom/client';

//----------------------------------------------------

import { App } from './ex11-using-led-component';

//----------------------------------------------------
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found.');
}
