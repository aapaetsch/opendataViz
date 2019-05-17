import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
// import { Button } from 'antd';
import { Button } from 'shards-react';
import Test from "./Containers/Test"

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            showTest: false
        }
    }
    showHome = () => {
        this.setState({showTest: false});
    }
    showTest(){
        this.setState({showTest: true});
    }

    render(e){
        if (this.state.showTest === false){
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div>
                            <Button pill type='secondary' > Edmonton Bus Locations </Button>
                            <Button> Edmonton Properties </Button>
                            <Button> Edmonton Trees </Button>
                            <Button onClick={()=>{this.showTest()}}> Map Testing </Button>
                        </div>
                    </header>
                </div>
                );
        }else{
            return(
                <Test goHome={this.showHome} />
            );
        }

    }
}

export default App;
