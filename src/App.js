import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.scss';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
