import React, {Componenet} from 'react';
import { Menu, Icon, Button, Layout, Checkbox } from 'andt';

const MIG = Menu.ItemGroup;
const SN = Menu.SubMenu;
class TopMenu extends component{
    constructor(props){
        super(props);
    }
    homeButton = (  <Menu.Item onClick={()=>{this.props.showHome()}}>
                        <span>
                            <Icon type="home" />
                            Home
                        </span>
                    </Menu.Item>);
    busviz = (  <SubMenu key="viz1" title={
                    <span>
                        <Icon type="pie-chart" />
                        <span>Edmonton Visulizations</span>
                    </span>}>
                    <MenuItemGroup title='Bus Map Page'>
						<Menu.Item onClick={()=>{this.props.showBus()}}>
                            <Icon type="global"/> Bus Map
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title='Testing'>
                        <Menu.Item onClick={()=>{this.props.showTest()}}>
                            <Icon type='loading'/>Test
                        </Menu.Item>
                    </MenuItemGroup>
                </SubMenu>);


    render(){
        return(
            <Menu
                onClick={this.handleClick}
                mode="horizontal"
                theme="dark">
                {this.homeButton}
                {this.busviz}
       	    </Menu>
        );
    }
}
export default TopMenu;

