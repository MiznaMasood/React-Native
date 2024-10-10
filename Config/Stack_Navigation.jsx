import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import Tab_Navigation from './Tab_Navigation'; 
import Signup from '../Screen/Signup';
import MainScreen from '../Screen/MainScreen';

const Stack = createStackNavigator();

const Stack_Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen 
          name="MainTabs" 
          component={Tab_Navigation} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack_Navigation;

