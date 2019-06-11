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
    app_token: 'rCmWZj0urjkTW2OGXJeIga9kS',
    header:'access-control-allow-origin'
};

const requestTripSettings = {
    method: 'GET',
    url:'https://data.edmonton.ca/resource/ctwr-tvrd.json?$select=trip_id,route_id&$order=route_id ',
    app_token: 'rCmWZj0urjkTW2OGXJeIga9kS',
    limit: 5000,
}

const requestRTTripUpdates = {
    method: 'GET',
    url:'https://cors-anywhere.herokuapp.com/http://gtfs.edmonton.ca/TMGTFSRealTimeWebService/TripUpdate/TripUpdates.pb',
    app_token:'rCmWZj0urjkTW2OGXJeIga9kS',
    encoding: null,
}
class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            busState: {},
            busNumbers:{},

        }
    }
    getContent(){
        let busData={};
        let trips = [];
        request(requestSettings, function(error, response, body){
            if (!error && response.statusCode === 200){
                var feed = gtfsrealtime.transit_realtime.FeedMessage.decode(body);
                feed.entity.forEach(function(entity){
                    trips.push(entity.vehicle.trip.tripId)
                });
                busData = feed;
            }
        });
        this.getTrips(trips);
        this.setState({busState:busData});
    }

    getTrips(allowedTrips){
        let tID_rID = {}
        request(requestTripSettings, function(error, response, body){
            if (!error && response.statusCode === 200){
                 let temp = JSON.parse(body);
                 temp.forEach(function(entity){
                     if(entity.trip_id in allowedTrips){
                         tID_rID[entity.trip_id] = entity.route_id;
                     }
                 });
            }
        });
        this.setState({busNumbers: tID_rID});
    }

    render() {
        return(
            <div>
                <ul><li>
                    <Button className="lol" type='primary' shape='round' onClick={()=>{this.getContent()}}>GET GTFS</Button>
                </li><li>
                    <Button type='primary' shape='round' onClick={()=>{this.getTrips()}}>Trip Updates</Button>
                </li></ul>
            </div>
        );
    }
}
export default Test;