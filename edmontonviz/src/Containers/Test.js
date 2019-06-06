import React from "react";
import { Component } from "react";
import { Button } from "antd";
import "./test.css";

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            BUS: {},
        }
    }
    getContent(URL){
        fetch(URL).then(response => this.setState({BUS: response}));
        console.log(this.state.BUS);
    }
    render() {
        return(
            <div>
                <Button className="lol" onClick={()=>{this.getContent('https://data.edmonton.ca/api/views/uzpc-8bnm/files/4785ba37-9862-4d26-844f-9aa2dc1c246d?filename=TripUpdates.pb')}}> GO HOME</Button>

            </div>
        );
    }
}
export default Test;