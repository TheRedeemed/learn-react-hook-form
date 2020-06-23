import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicForm from './components/BasicForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BasicForm />
      </header>
    </div>
  );
}

export default App;
