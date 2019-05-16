import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'shards-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <Button pill theme="light"> Edmonton Bus Locations </Button>
        <Button pill theme="light"> Edmonton Properties </Button>
        <Button pill theme="light"> Edmonton Trees </Button>
        <Button pill theme="light"> Map Testing </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
