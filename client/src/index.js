import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/reset.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { AuthProvider } from './auth/Context';
import { SearchProvider } from './auth/Search';
import { CartProvider } from './auth/cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
        <App></App>
        </BrowserRouter>
      </CartProvider> 
    </SearchProvider>
  </AuthProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
