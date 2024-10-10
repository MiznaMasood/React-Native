import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import About from '../Screen/About';
import Contact from '../Screen/Contact';
import Icon from 'react-native-vector-icons/Entypo';
import Info from 'react-native-vector-icons/AntDesign';
import Phone from 'react-native-vector-icons/Entypo';
import Products from '../Screen/Products';
import Cart from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator();

const Tab_Navigation = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
     
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: () => <Icon style={{ fontSize: 30, color: 'red' }} name="home" />,
        }}
      />
      <Tab.Screen
        name='About'
        component={About}
        options={{
          tabBarIcon: () => <Info style={{ fontSize: 25, color: 'red' }} name='infocirlce' />,
        }}
      />
      <Tab.Screen
        name='Contact'
        component={Contact}
        options={{
          tabBarIcon: () => <Phone style={{ fontSize: 30, color: 'red' }} name='phone' />,
        }}
      />

<Tab.Screen
        name='Products'
        component={Products}
        options={{
          tabBarIcon: () => <Cart style={{ fontSize: 30, color: 'red' }} name='shopping-cart' />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tab_Navigation;
