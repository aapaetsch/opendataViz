import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"; this is needed for shards?
// import "shards-ui/dist/css/shards.min.css"; this is needed for shards?
import { Menu, Icon, Button } from 'antd';
import Test from "./Containers/Test";
import 'antd/dist/antd.css';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            showTest: false
        }
    }
    showHome = () => {
        this.setState({showTest: false});
    }
    showTest(){
        this.setState({showTest: true});
    }
    handleClick = e => {
        console.log('click ', e);
    };
    // this is for an example of a sub item group
    edviz = (<SubMenu key="viz1" title={
                            <span>
                            <Icon type="area-chart" />
                            <span>Edmonton Visulizations</span>
                            </span>
                        }>
                        <Menu.Item onClick={()=>{this.showTest()}}>Test</Menu.Item>
            </SubMenu>
             );
    homeButton = (<Menu.Item ></Menu.Item>);


    render(e){
        let bodyContent;
       if (this.state.showTest === true){
           bodyContent = <Test goHome={this.showHome}/>;
       }else{
           bodyContent = <img src={logo} className="App-logo" alt="logo" />;
       }
        return(
                <div className="App">

                    <header className="App-header">
                    <Menu
                        onClick={this.handleClick}
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="horizontal"
                        theme="dark"
                    >{this.homeButton}{this.edviz}
                    </Menu>
                    </header>
                    <body className="App-body">
                        {bodyContent}
                    </body>
                </div>
            );
        }
    }


export default App;
