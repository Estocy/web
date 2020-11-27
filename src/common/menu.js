/*import React from 'react'
import { Menu, Layout, Drawer } from 'antd'
import { Link, useLocation } from 'react-router-dom';

const mainMenu = (props) => {

    const { Header } = Layout;

    const menuItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Produtos',
            link: '/'
        },
        {
            name: 'Vendas',
            link: '/'
        },
        {
            name: 'Clientes',
            link: '/clients'
        },
        {
            name: 'Suporte',
            link: '/'
        },
    ];

    const location = useLocation()

    let indexSelected = menuItems.findIndex(
        
        (item) => location.pathname === item.link
      );

    let selected =
    indexSelected !== -1 ? `menu_${menuItems[indexSelected].name}` : '';

    const menuRender = () => {
        return(
            <Menu mode="horizontal" defaultSelectedKeys={[selected]}>
                {menuItems.map((menu) => {
                     const { name, link, icon } = menu;
                     return (
                       <Menu.Item key={`menu_${name}`}>
                         {link ? (
                           <Link to={`${link}`}>
                             {icon} <span>{name}</span>
                           </Link>
                         ) : (
                             <React.Fragment>
                               {icon} <span>{name}</span>
                             </React.Fragment>
                           )}
                       </Menu.Item>
                     );
                })}
            </Menu>
            
        );
    }

    return(
        <>
            <Header>
    <Drawer>{menuRender(true)}</Drawer>
            </Header>
        </>
    )
};

export default mainMenu*/








import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Sells from '../components/Sells'
import Products from '../components/Products'


const Stack = createStackNavigator();

function MainMenu() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sells" component={Sells} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainMenu;