import React, {Component} from 'react';
import { Menu, Icon, Button, Checkbox} from 'antd';

const MIG = Menu.ItemGroup;
const MenuItemGroup = Menu.ItemGroup;
const SM = Menu.SubMenu;
class BusMenu extends Component{
    constructor(props){
        super(props);

    }
    menuKeys =  ["sub1"];
    state={
            openKeys:[],
        };
    onOpenChange = openKeys =>{
        const lastOpenKey = openKeys.find(key => openKeys.indexOf(key) ===-1);
        if (this.menuKeys.indexOf(lastOpenKey) === -1){
            this.setState({ openKeys});
        } else {
            this.setState({openKeys: lastOpenKey ? [lastOpenKey] : [],})
        }
    }
    onChange(e){
        console.log('checked = ${e.target.checked}');
    }



    render(){
        return (

            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                theme="dark">
                <Menu.Item/>
                <SM key="sub1" disabled={false}
                    title={<span><Icon type='apple'/><span>Bus Functions</span></span>}>
                    <MIG title={<span><Icon type="filter"/>Filters</span>}>
                        <Menu.Item key='1'>
                            <Checkbox onChange={this.onChange}/>
                            <span>
                            Some function to the Bus Map
                            </span>
                        </Menu.Item>
                    </MIG>


                </SM>

    	    </Menu>

        );
    }
}




export default BusMenu;