import './index.css';

import App from './App';
import ContextProvider from './context';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
  <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


