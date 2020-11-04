import React from 'react';
import { BrowserRouter } from 'react-router-dom';
/**
 * Stalys
 */
import GlobalStyles from './styles/globalStyles'
import './App.css';
/**
 * Router
 */
import Router from './router';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
