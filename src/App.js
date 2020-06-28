import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import BasicForm from './components/BasicForm';
// import SignUpForm from './components/SignUpForm';
import FormWithUILib from './components/FormWithUILib';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BasicForm />
        <SignUpForm />
      </header> */}
      <FormWithUILib />
    </div>
  );
}

export default App;
