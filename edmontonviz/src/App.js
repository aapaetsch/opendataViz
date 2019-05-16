import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import test from "./Containers/test"

class App extends Component{

    render(e){
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            <div>
            <Button> Edmonton Bus Locations </Button>
            <Button> Edmonton Properties </Button>
            <Button> Edmonton Trees </Button>
            <Button onClick="test"> Map Testing </Button>
            </div>
        </header>
        </div>
    );
    }
}

export default App;
