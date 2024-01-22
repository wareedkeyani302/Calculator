import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CalProvider from './context/CalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CalProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
