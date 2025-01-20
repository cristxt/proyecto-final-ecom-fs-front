import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from '../src/app';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
