import React from 'react';
import ReactDOM from 'react-dom/client';

//----------------------------------------------------

import { App } from './ex10-led-component-on-off';

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
