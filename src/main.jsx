import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDom from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import AuthState from './context/index.jsx';

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthState>
   <App />
  </AuthState>
  </BrowserRouter>
);
