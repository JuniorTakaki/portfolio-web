import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './globals.css'; // Garanta que esta linha exista em main.tsx ou App.tsx
import './index.css' // Aqui importa o Tailwind
import { LanguageProvider } from './context/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
