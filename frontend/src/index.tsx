import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './pages/Home';
import AuthProvider from './providers/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(

  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
  ,
  document.getElementById('root')
);
