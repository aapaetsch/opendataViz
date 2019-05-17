import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import { Button } from "antd";


class Test extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return(
            <div>
                <Button onClick={()=>{this.props.goHome(true)}}> GO HOME</Button>
                <p>
                    this is a test
                </p>
            </div>
        );
    }
}
export default Test;