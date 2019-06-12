import React, {Component} from 'react';
import { Menu, Icon, Button, Checkbox} from 'antd';

const MIG = Menu.ItemGroup;
const MenuItemGroup = Menu.ItemGroup;
const SM = Menu.SubMenu;
class SideMenu extends Component{
    constructor(props){
        super(props);
    }
    menuKeys =  ["busfxn"];

    onChange(e){
        console.log('checked = ${e.target.checked}');
    }
    busFiltersMenu = (<MIG title={<span><Icon type="filter"/>Filters</span>}>
                        <Menu.Item key='F1'>
                            <Checkbox onChange={this.onChange}/>
                            <span>Some function to the Bus Map</span>
                        </Menu.Item>
                    </MIG>);
    testButtonsMenu = (<MIG title={<span><Icon type='control'/>Test Buttons</span>}>
                        <Menu.Item key='T1' >
                            <Checkbox onChange={this.onChange}/>
                            <span>Test Checkbox</span>
                        </Menu.Item><Menu.Item key='T2'>
                            <span>Test Button</span>
                        </Menu.Item>
                    </MIG>);
    houseMenu =(<MIG title={<span><Icon type="home"/>Home Buttons</span>}>
                    <Menu.Item key='H1'>
                        <span>Test House</span>
                    </Menu.Item>
                </MIG>
    );
    render(){
        return (
            <Menu
                mode="inline"
                openKeys={this.props.openKeys}
                onOpenChange={this.props.onOpenChange}
                theme="dark">
                <SM key="busfxn" disabled={!this.props.bus}
                    title={<span><Icon type='car'/><span>Bus Functions</span></span>}>
                    {this.busFiltersMenu}
                </SM>
                <SM key="housefxn" disabled={!this.props.housing}
                    title={<span><Icon type='home'/><span>House Map Functions</span></span>}>
                    {this.houseMenu}
                </SM>
                <SM key='testfxn' disabled={!this.props.test}
                    title={<span><Icon type='experiment'/>Tests</span>}>
                    {this.testButtonsMenu}
                </SM>
    	    </Menu>
        );
    }
}
export default SideMenu;