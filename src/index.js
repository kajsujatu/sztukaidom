import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { FontSizeProvider } from './contexts/FontSizeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FontSizeProvider>
      <App />
    </FontSizeProvider>
  </React.StrictMode>
);