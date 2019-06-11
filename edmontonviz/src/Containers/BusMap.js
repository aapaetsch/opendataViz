import React, {Component} from 'react';
import { Button } from "shards-react";
import ReactDOM from 'react-dom';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { Icon } from 'antd';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYXBhZXRzY2giLCJhIjoiY2p3czk5ZWZyMGNzczRhbzhpdjV1NjM0YyJ9.l5Hitn6UuOWC5DoIEl5KHg'
});

const requestSettings = {
    method: 'GET',
    url: 'https://cors-anywhere.herokuapp.com/https://data.edmonton.ca/download/7qed-k2fc/application%2Foctet-stream',
    encoding: null,
    app_token: 'rCmWZj0urjkTW2OGXJeIga9kS',
    header:'access-control-allow-origin'
}

const requestTripSettings = {
    method: 'GET',
    url:'https://data.edmonton.ca/resource/ctwr-tvrd.json?$select=trip_id,route_id&$order=route_id ',
    app_token: 'rCmWZj0urjkTW2OGXJeIga9kS',
    limit: 5000,
}

const gtfsrealtime = require('gtfs-realtime-bindings');
const request = require('request');

class BusMap extends Component{
    constructor(props){
        super(props);
        this.state = {
            busState: {},
            busNumbers: {},

        };
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

    componentDidMount(){
        this.getContent();

    }

    componentWillUnmount(){
        this.setState({busState: {}, busNumbers:{}});
    }

    render() {
        return (
            <div>
                <Map
                    style="mapbox://styles/apaetsch/cjw2k3na404qn1csfznqo90z7"
                    containerStyle={{ width: '85vw', height: '90vh'}}
                    center={this.props.center}>
                </Map>
            </div>
    );
  }
}

export default BusMap;