import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
