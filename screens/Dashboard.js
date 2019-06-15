import React, {Component} from 'react';
import {Platform, YellowBox, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator, createAppContainer,} from 'react-navigation';
import {icon} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';
 
import Chat from './Chat';
import Appointments from './Appointments';
import Gradient from './Gradient';


class Dashboard extends Component{
  constructor(props){
    super(props);
  }

    render() {
      return (
          <Application />
      );
    }
}

export default Dashboard;

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
    navigationOptions: {
      header: props => <Gradient {...props} />,
      headerStyle: {
        backgroundColor: '#00528e',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    },

    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        //backgroundColor: '#00528e',
        //backgroundColor: 'transparent', //<== remove background color
        //borderColor: 'transparent' // <== remove border
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
    },
  },
});

const Application = createAppContainer(AppContainer);