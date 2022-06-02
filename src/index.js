import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CarsProvider } from './context/CarsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CarsProvider>
      <App />
    </CarsProvider>
  </React.StrictMode>
);
