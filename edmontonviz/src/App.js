import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Test from "./Containers/Test"

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            showTest: false
        }
    }
    setShow(home){
        if (home === false){
            this.setState({showTest: true});
        }else if (home === true){
            this.setState({showTest: false});
        }
    }

    render(e){
        if (this.state.showTest === false){
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div>
                            <Button> Edmonton Bus Locations </Button>
                            <Button> Edmonton Properties </Button>
                            <Button> Edmonton Trees </Button>
                            <Button onClick={()=>{this.setShow(false)}}> Map Testing </Button>
                        </div>
                    </header>
                </div>
                );
        }else{
            return(
                <Test goHome={this.setShow} />
            );
        }

    }
}

export default App;
