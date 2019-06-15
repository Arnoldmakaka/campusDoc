import React, {Component} from 'react';
import {Platform, AsyncStorage, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class Welcomescreen extends Component {
	render() {
    	return (
    		<View style={{flex:1, backgroundColor: '#ffffff'}}>
      			<View style={{flex: 2, justifyContent: 'center', alignItems: 'center',}}>
        			<ImageBackground source={require('../assests/campus.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
        				<View style={{height: 24,}}>
            				<StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
        				</View>
        				
        				<View style={{flex: 1, justifyContent: 'center',}}>
            				<View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 10, marginBottom: 120,}}>
            					<View style={{backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 20, borderRadius: 4,}}>
                  
                				</View>
              				</View>
            			</View>  
          			</ImageBackground>    
        		</View> 

        		<View style={{flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 20,}}>
          			<Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'normal', fontWeight: '400', color: '#00528e', paddingVertical: 8,}} >Get started with Campus Doctor</Text>
          			<View style={{flex: 1, justifyContent:  'center', alignItems: 'center',}}>
            			<TouchableOpacity style={{marginHorizontal: 20, borderRadius: 4, borderWidth: 2, borderColor: '#00528e'}} onPress={() => this.props.navigation.navigate('Log')}>
              				<Text style={{textAlign: 'center', fontSize: 16, color: '#00528e', paddingVertical: 10, paddingHorizontal: 70,}}>Continue</Text>
            			</TouchableOpacity>
          			</View>
          
          			<View style={{marginVertical: 7,}}>
            			<Text style={{textAlign: 'center', fontSize: 14, fontStyle: 'normal', color: '#00528e', paddingVertical: 5,}}>Powered by Campus Doctor</Text>
            			<Text style={{textAlign: 'center', fontSize: 12, fontStyle: 'italic', color: '#00528e'  }}>{'\u00A9'}Campus Doctor</Text>
          			</View>  
       			 </View>
      		</View>
      	);
  	}
}