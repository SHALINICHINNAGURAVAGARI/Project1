import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserForm from './Forms/UserForm';
import FormDetails from './Forms/FormDetails';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const formStyle = {
  borderRadius: '18px',
  boxShadow: '0 4px 32px rgba(80, 112, 255, 0.10), 0 1.5px 6px rgba(0,0,0,0.04)',
  padding: '2.5rem',
  marginTop: '2.5rem',
  transition: 'box-shadow 0.2s',
  backgroundColor: '#f8f9fa'
};
