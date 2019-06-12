import React, {Component} from 'react';
import { Button } from "shards-react";
import ReactDOM from 'react-dom';
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import { Icon } from 'antd';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYXBhZXRzY2giLCJhIjoiY2p3czk5ZWZyMGNzczRhbzhpdjV1NjM0YyJ9.l5Hitn6UuOWC5DoIEl5KHg'
});

const request = require('request');

class HousingMap extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
        // this.getContent();


    }

    componentWillUnmount(){
        // clearInterval(this.state.refresh);
        // this.setState({busState: false, busNumbers:{}, refresh: null});
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


export default HousingMap;