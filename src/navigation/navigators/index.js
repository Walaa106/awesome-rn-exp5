import React from 'react';
import { Platform, StatusBar, View, Text } from 'react-native';
import * as screenNames from '../screen_names';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Home from 'container/HomeContainer';
import Login from 'container/LoginContainer';
import Sidebar from 'container/SidebarContainer';
import Header from 'components/Header'

export const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <Sidebar {...props} />,
  }
);

const appNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    [screenNames.HOME]: { screen: Home },
    [screenNames.LOGIN]: {
      screen: Login,
      navigationOptions: {
        header: props => <Header {...props} />,
        headerStyle: {
          backgroundColor: "transparent",
          marginTop: 25,
          paddingRight: 35,
        }
      }
    }
  },
  {
    initialRouteName: 'Login',
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
);

export default appNavigator;
