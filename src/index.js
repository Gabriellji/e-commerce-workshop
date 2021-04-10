import './index.css';

import App from './App';
import ContextProvider from './context';
import AuthContext from './context/AuthProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <ContextProvider>
          <App />
        </ContextProvider>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


