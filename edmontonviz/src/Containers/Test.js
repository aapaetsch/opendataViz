import React from "react";
import { Component } from "react";
import { Button } from "antd";
import "./test.css";
import "gtfs-realtime-bindings";
import "gtfs-rt-bindings";

const gtfsrealtime = require('gtfs-realtime-bindings');
const request = require('request');

const requestSettings = {
    method: 'GET',
    url: 'https://cors-anywhere.herokuapp.com/https://data.edmonton.ca/download/7qed-k2fc/application%2Foctet-stream',
    encoding: null,
    header:'access-control-allow-origin'

};


class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            busState: {},
        }
    }
    getContent(){
        request(requestSettings, function(error, response, body){
            if (!error && response.statusCode === 200){
                var feed = gtfsrealtime.transit_realtime.FeedMessage.decode(body);

                console.log(feed);

            }
        });
        // fetch(URL).then(response => this.setState({BUS: response}));
        // console.log(this.state.BUS);
    }
    // getRoutes(){
    //     fetch(URL)
    //         .then(response => )
    // }

    render() {
        return(
            <div>
                <ul><li>
                    <Button className="lol" type='primary' shape='round' onClick={()=>{this.getContent()}}>GET GTFS</Button>
                </li><li>
                    <Button type='primary' shape='round' ></Button>
                </li></ul>
            </div>
        );
    }
}
export default Test;