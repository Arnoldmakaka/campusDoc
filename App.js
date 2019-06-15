import React, {Component} from 'react';
import {Platform, YellowBox, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator, createAppContainer,} from 'react-navigation';
import {icon} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';
YellowBox.ignoreWarnings(['Warning: componentWill'])
console.disableYellowBox = true;


import WelcomeNavigation from './screens/WelcomeNavigation';
import Dashboard from './screens/Dashboard';

class App extends Component {
	constructor(){
    	super();
    	this.unsubscriber = null;
    	this.state = {
      		user: null,
    	}
	}

	componentDidMount() {
	  	this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      		this.setState({ user });
    	});
	    SplashScreen.hide();
	}

	componentWillUnmount() {
    	if (this.unsubscriber) {
      		this.unsubscriber();
    	}
  	}

	render() {
    	if (!this.state.user) {
      		return <WelcomeNavigation />;
          //return <Dashboard />;
    	}
    	return <Dashboard />;
  	}

}

export default App;