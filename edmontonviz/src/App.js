import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";// this is needed for shards?
import "shards-ui/dist/css/shards.min.css"; //this is needed for shards?
import { Layout } from 'antd';
import Test from "./Containers/Test";
import BusMap from "./Containers/BusMap";
import HousingMap from "./Containers/HousingMap";
import SideMenu from "./Components/SideMenu";
import TopMenu from "./Components/TopMenu";
import 'antd/dist/antd.css';

const {Header, Content, Sider} = Layout;

//<-----Access Settings------>
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
//<-------End of Access------->

class App extends Component{
    constructor(props){
        super(props);
        this.state = {

            edmontonCenter:[-113.5054,53.5372],

            showTest: false,
			showHome: true,
            showBus: false,
            showHouse:false,

            openKeys: [],
            checkedBoxes: [],
        }
    }

    menuKeys =  [];

    showPage = (next) => {
        this.setState({ showTest:false,showHome:false, showHouse:false,showBus:false});
        if (next === 'Test'){
            this.setState({showTest:true});
        } else if (next === 'Home'){
            this.setState({showHome:true});
        } else if (next === 'House'){
            this.setState({showHouse:true});
        } else if (next === 'Bus'){
            this.getBusContent();
            this.setState({showBus:true});

        }

        this.clearKeys();
    }

    clearKeys(){
        this.setState({openKeys: []});
    }

    onOpenChange = openKeys => {
        const lastOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1);
        if (this.menuKeys.indexOf(lastOpenKey) === -1){
            this.setState({openKeys});
        } else {
            this.setState({openKeys: lastOpenKey ? [lastOpenKey] : [], })
        }
    }

    handleClick = e => {
        console.log('click ', e);
    };

    onChange(e){
        console.log('checked = ${e.target.checked}');
    }
    //<---------------Start of Bus Methods ------------>
    getBusContent(){
        let busData=[];
        // let busNumbers = this.getBusTrips();
        // console.log(busNumbers);
        request(requestSettings, function(error, response, body){
            if (!error && response.statusCode === 200){
                var feed = gtfsrealtime.transit_realtime.FeedMessage.decode(body);
                feed.entity.forEach(function(entity){
                    let aBus = {};

                    aBus['id'] = entity.id;
                    aBus['tripId'] = entity.vehicle.trip.tripId;
                    aBus['lat'] = entity.vehicle.position.latitude;
                    aBus['long'] = entity.vehicle.position.longitude;

                    try{aBus['speed'] = entity.vehicle.position.speed}
                    catch(err){aBus['speed'] = 0}

                    try{aBus['bearing'] = entity.vehicle.position.bearing}
                    catch(err){aBus['bearing'] = null}

                    // try{aBus['number'] = busNumbers[entity.vehicle.trip.tripId.toString()]}
                    // catch(err){aBus['number'] = null}

                    busData.push(aBus);
                });
            }
        });
        console.log('here is the edited data', busData);
        return busData;
    }

    getBusTrips(){
        let tID_rID = {}
        request(requestTripSettings, function(error, response, body){
            if (!error && response.statusCode === 200){
                 let temp = JSON.parse(body);
                 temp.forEach(function(entity){

                    tID_rID[entity.trip_id] = entity.route_id;

                 });
            }
        });
        return tID_rID;
    }
    //<--------------------End of Bus Content--------------------->
    logo = (
        <div className='logoStyle'>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );

    render(e){
        let bodyContent;

		if (!this.state.showHome){
      		if (this.state.showTest){
           		bodyContent = <Test showPage={this.showPage}/>;
       		} else if (this.state.showBus){
                   bodyContent = <BusMap
                                    center={this.state.edmontonCenter}
                                    getContent={this.getBusContent}
                                    />
               } else if (this.state.showHouse){
                   bodyContent = <HousingMap />
               }
		}else if (this.state.showHome){
           	bodyContent = this.logo;
       	}
        return(
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0px',
                                     background:'#282c34', height:0}}>
                        <TopMenu ref={this.topmenu}
							showPage={this.showPage}
                                />
                    </Header>
                    <Layout>
                        <Sider className='sm'>
                            <SideMenu
                                ref={this.sidemenu}
                                home={this.state.showHome}
                                bus={this.state.showBus}
                                test={this.state.showTest}
                                housing={this.state.showHouse}
                                openKeys={this.state.openKeys}
                                onOpenChange={this.onOpenChange}
                                />
                        </Sider>
                    <Content style={{background: '#282c34',padding: "15px", margin: "45px 0 0 0", minHeight: '100vh',}}>
                            {bodyContent}
                    </Content>
                    </Layout>
                </Layout>
            );
        }
    }
export default App;
