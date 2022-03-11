import React, {useState, useEffect} from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import GlobalInclude from '../globalInclude/GlobalInclude';
//tab navigator
import TabNavigator from './TabNavigator';
//drawer Navigator
import DrawerNavigator from './DrawerNavigator';

//screen
import Splash from '../screen/auth/Splash';
import Login from '../screen/auth/Login';
import Dashboard from '../screen/tab/dashBoard/Dashboard';

const stackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={'Splash'} headerMode={true}>
      <Stack.Screen name="Splash" component={Splash} />
      {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      <Stack.Screen name="DrawerNavigator" component={Dashboard} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default stackNavigator;
