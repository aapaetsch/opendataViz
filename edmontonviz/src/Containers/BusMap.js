import {Component} from 'react';


class BusMap extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var mymap = L.map('busmap').setView([51.505, -0.09], 13);
        return(
            <div id="busmap">


            </div>

        );
    }
}

export default BusMap;