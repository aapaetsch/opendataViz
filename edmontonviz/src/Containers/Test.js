import React from "react";
import { Component } from "react";
import { Button } from "antd";
import "./test.css";

class Test extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return(
            <div>
                <Button className="lol" onClick={()=>{this.props.goHome()}}> GO HOME</Button>
                <p>
                    this is a test
                </p>
            </div>
        );
    }
}
export default Test;