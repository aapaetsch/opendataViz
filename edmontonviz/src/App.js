import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";// this is needed for shards?
import "shards-ui/dist/css/shards.min.css"; //this is needed for shards?
import { Menu, Icon, Button, Layout, Breadcrumb, Checkbox } from 'antd';
import Test from "./Containers/Test";
import BusMap from "./Containers/BusMap";

import 'antd/dist/antd.css';
import scrambledeggs from './Components/scrambledeggs';


const SubMenu = Menu.SubMenu;
const {Header, Content, Sider} = Layout;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            showTest: false,
			showHome: true,
            showBus: false,
            eggs: 0,
        }
    }
    showHome = () => {
        this.setState({showTest: false, showHome: true, showBus: false, eggs:0});
    }
    showTest(){
        this.setState({showTest: true, showHome: false, showBus: false, eggs:0});
    }
    showBus(){
        let x = scrambledeggs(1222459);
        this.setState({showTest: false, showHome: false, showBus: true, eggs: x});
    }
    handleClick = e => {
        console.log('click ', e);
    };
    onChange(e){
        console.log('checked = ${e.target.checked}');
    }

    // this is for an example of a sub item group
    busviz = (<SubMenu key="viz1" title={
                            <span>
                            <Icon type="compass" />
                            <span>Edmonton Bus Visulizations</span>
                            </span>}>
                        <MenuItemGroup title='Bus Map Page'>
						    <Menu.Item onClick={()=>{this.showBus()}}><Icon type="global"/> Bus Map </Menu.Item>
                        </MenuItemGroup><MenuItemGroup title="Bus Map Functions">
                            <Menu.Item><Icon type="reload"/> Refresh </Menu.Item>
                            <Menu.Item><Checkbox onChange={this.onChange}/> Some function to the Bus Map </Menu.Item>
                            <Menu.Item><Checkbox onChange={this.onChange}/> Some function to the Bus Map </Menu.Item>
                            <Menu.Item><Checkbox onChange={this.onChange}/> Some function to the Bus Map </Menu.Item>
                        </MenuItemGroup>
            </SubMenu>
             );
    homeButton = (<Menu.Item onClick={()=>{this.showHome()}}><span> <Icon type="home" /> Home </span></Menu.Item>);
    logo = (
        <div className='logoStyle'>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );

    render(e){
        let bodyContent;
        let sideMenu;
		if (this.state.showHome === false){
      		if (this.state.showTest === true){
           		bodyContent = <Test goHome={this.showHome}/>;
       		} else if (this.state.showBus === true){
                   bodyContent = <BusMap eggs={this.state.eggs} />

               }
		}
		else{
           	bodyContent = this.logo;
       	}

        return(
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className='logo'/>
                            <Menu
                                onClick={this.handleClick}
                        	    mode="horizontal"
                        	    theme="dark">
                                {this.homeButton}
                                {this.busviz}
                    	    </Menu>

                    </Header>
                    <Layout>
                    <Content style={{background: '#282c34',padding: 24, margin: 0, minHeight: 940,}}>
                        {bodyContent}
                    </Content>
                    </Layout>
                </Layout>
            );
        }
    }


export default App;
