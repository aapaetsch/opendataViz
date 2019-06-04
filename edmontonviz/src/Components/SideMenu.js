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
    // state={
    //         openKeys: [],
    //         checkedBoxes:[],

    //     };
    // onOpenChange = openKeys =>{
    //     const lastOpenKey = openKeys.find(key => openKeys.indexOf(key) ===-1);
    //     if (this.menuKeys.indexOf(lastOpenKey) === -1){
    //         this.setState({ openKeys});
    //     } else {
    //         this.setState({openKeys: lastOpenKey ? [lastOpenKey] : [],})
    //     }
    // }
    onChange(e){
        console.log('checked = ${e.target.checked}');
    }
    // emptyList(){
    //     this.state.openKeys = [];
    // }
    render(){
        return (
            <Menu
                mode="inline"
                openKeys={this.props.openKeys}
                onOpenChange={this.props.onOpenChange}
                theme="dark">
                <SM key="busfxn" disabled={!this.props.bus}
                    title={<span><Icon type='car'/><span>Bus Functions</span></span>}>
                    <MIG title={<span><Icon type="filter"/>Filters</span>}>
                        <Menu.Item key='F1'>
                            <Checkbox onChange={this.onChange}/>
                            <span>Some function to the Bus Map</span>
                        </Menu.Item>
                    </MIG>
                </SM>
                <SM key='testfxn' disabled={!this.props.test}
                    title={<span><Icon type='experiment'/>Tests</span>}>
                    <MIG title={<span><Icon type='control'/>Test Buttons</span>}>
                        <Menu.Item key='T1' >
                            <Checkbox onChange={this.onChange}/>
                            <span>Test Checkbox</span>
                        </Menu.Item><Menu.Item key='T2'>
                            <span>Test Button</span>
                        </Menu.Item>
                    </MIG>
                </SM>
    	    </Menu>
        );
    }
}
export default SideMenu;