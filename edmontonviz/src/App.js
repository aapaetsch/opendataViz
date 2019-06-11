import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";// this is needed for shards?
import "shards-ui/dist/css/shards.min.css"; //this is needed for shards?
import { Layout } from 'antd';
import Test from "./Containers/Test";
import BusMap from "./Containers/BusMap";
import SideMenu from "./Components/SideMenu";
import TopMenu from "./Components/TopMenu";
import 'antd/dist/antd.css';

const {Header, Content, Sider} = Layout;

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            edmontonCenter:[-113.5054,53.5372],
            showTest: false,
			showHome: true,
            showBus: false,
            openKeys: [],
            checkedBoxes: [],
        }
    }
    menuKeys =  [];

    showHome = () => {
        this.setState({showTest: false, showHome: true, showBus: false});
        this.clearKeys();
    }

    showTest = () => {
        this.setState({showTest: true, showHome: false, showBus: false});
        this.clearKeys();
    }

    showBus = () => {
        this.setState({showTest: false, showHome: false, showBus: true});
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

    logo = (
        <div className='logoStyle'>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );

    render(e){
        let bodyContent;

		if (this.state.showHome === false){
      		if (this.state.showTest === true){
           		bodyContent = <Test goHome={this.showHome}/>;
       		} else if (this.state.showBus === true){
                   bodyContent = <BusMap center={this.state.edmontonCenter}/>
               }
		}else if (this.state.showHome === true){
           	bodyContent = this.logo;
       	}
        return(
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0px',
                                     background:'#282c34', height:0}}>
                        <TopMenu ref={this.topmenu}
							showHome={this.showHome}
							showBus={this.showBus}
							showTest={this.showTest}
                                />
                    </Header>
                    <Layout>
                        <Sider className='sm'>
                            <SideMenu
                                ref={this.sidemenu}
                                home={this.state.showHome}
                                bus={this.state.showBus}
                                test={this.state.showTest}
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
