import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Text, View, ImageBackground, StatusBar, Image, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default props => {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80,}}>
      <View style={{height: 24,}}>
        <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
      </View>

      <View style={{height: 56, flexDirection: 'row', alignItems:  'center', justifyContent: 'center',}}>
        <View style={{alignItems:  'center', justifyContent: 'center',}}>
          <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 22 }}>Campus Doctor</Text>
        </View>
      </View>
        
    </LinearGradient>
  );
};
