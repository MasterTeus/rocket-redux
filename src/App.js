import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

/**
 * Router
 */
import Router from './router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
