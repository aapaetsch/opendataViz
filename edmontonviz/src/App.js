import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";// this is needed for shards?
import "shards-ui/dist/css/shards.min.css"; //this is needed for shards?
import { Menu, Icon, Button, Layout, Checkbox } from 'antd';
import Test from "./Containers/Test";
import BusMap from "./Containers/BusMap";
import SideMenu from "./Components/SideMenu";
import TopMenu from "./Components/TopMenu";
import 'antd/dist/antd.css';


const SubMenu = Menu.SubMenu;
const {Header, Content, Sider} = Layout;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component{
    constructor(props){
        super(props);
        this.sidemenu = React.createRef();
		this.topmenu = React.createRef();
        this.state = {
            edmontonCenter:[-113.5054,53.5372],
            showTest: false,
			showHome: true,
            showBus: false,
        }
    }
    showHome = () => {
        this.setState({showTest: false, showHome: true, showBus: false});
    }
    showTest(){
        this.setState({showTest: true, showHome: false, showBus: false});
    }
    showBus(){
        this.setState({showTest: false, showHome: false, showBus: true});
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
        let sideMenu;
		if (this.state.showHome === false){
      		if (this.state.showTest === true){
           		bodyContent = <Test goHome={this.showHome}/>;
       		} else if (this.state.showBus === true){
                   bodyContent = <BusMap center={this.state.edmontonCenter}/>
               }
		}else{
           	bodyContent = this.logo;
       	}
        return(
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <TopMenu ref={this.topmenu}
							showHome={this.showHome}
							showBus={this.showBus}
							showTest={this.showTest}
                                />
                    </Header>
                    <Layout>
                        <Sider>
                            <SideMenu ref={this.sidemenu}
                                     showHome={this.state.showHome}
                                     showBus={this.state.showBus}
                                     showTest={this.state.showTest} />
                        </Sider>
                    <Content style={{background: '#282c34',padding: 60, margin: 0, minHeight: '100vh',}}>
                        {bodyContent}
                    </Content>
                    </Layout>
                </Layout>
            );
        }
    }
export default App;
