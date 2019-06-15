import React, {Component} from 'react';
import {Platform, YellowBox, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator, createAppContainer,} from 'react-navigation';
import {icon} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
 
import Chat from './Chat';
import Login from './Login';
import Appointments from './Appointments';
import Welcomescreen from './Welcomescreen';


class WelcomeNavigation extends Component{
  constructor(){
    super();
  }

    render() {
      return (
          <Application />
      );
    }
}

export default WelcomeNavigation;

const TabScreen = createMaterialTopTabNavigator(
  {
    Chats: { screen: Chat },
    Appointments: { screen: Appointments },
  },
  {
    initialRouteName: 'Chats',
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#00528e',
        borderBottomWidth: 2,
      },
    },
  }
);
 
const AppContainer = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
      headerTintColor: '#OOOOOO',
      title: 'TabExample',
    },
  },
});

const Appswitch = createSwitchNavigator({
    Welcome: {screen: Welcomescreen},
    Log: {screen: Login},
    Container: {screen: AppContainer}
})

const Application = createAppContainer(Appswitch);