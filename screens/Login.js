import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, ScrollView, YellowBox, Alert, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {Icon, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase';

YellowBox.ignoreWarnings(['Warning: componentWill'])
console.disableYellowBox = true;

export default class Login extends Component {
	constructor(props) {
    super(props);
  }

  state ={
    doctor: 'GeneralDoctor',
    email: '',
    pass: '',
    loading: false,
    message: ''
  }

  _loginUser = async () => {
    const {email, pass, doctor} = this.state
    if (this.state.email != '' && this.state.pass != ''){
      this.onLogin(doctor)
      this.setState({
        loading:true,
        message: ''
      })
      //call the sign in function from firebase
      firebase.auth().signInWithEmailAndPassword(email, pass)
      .then((user) => {
        this.props.navigation.navigate('Container');
      })
      .catch((err) => {
        //if failure to log in
        this.setState({
        loading:false,
        message: err.message
      })
      }) 
    }
    else{
      Alert.alert('Missing Fields', 'Please fill in all the required fields');
    }
  }

  onLogin = async (doctor) => {
    //const {doctor} = this.state
    var loginData = {
      doctor: doctor
    }
    try {
      await AsyncStorage.setItem('@key_loginuser', JSON.stringify(loginData));
      //alert(JSON.stringify(loginData))
    }catch (error) {
      console.log("Network Error", "Please try again later")
    }
  }

  render() {
    let {doctor, message, loading} = this.state
    return (
    	<View style={{flex: 1, backgroundColor: '#e9ebee'}}>
        	<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80,}}>
          		<View style={{height: 24,}}>
            		<StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          		</View>

          		<View style={{height: 56, flexDirection: 'row',}}>
            		<View style={{alignItems: 'center', justifyContent: 'center',}}>
              			<TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')}>
                			<Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
              			</TouchableOpacity>
            		</View>

            		<View style={{alignItems:  'center', justifyContent: 'center',}}>
              			<Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Enter Login Details</Text>
            		</View>
          		</View>
        	</LinearGradient>

        	<View style={{flex: 1, backgroundColor: '#e9ebee'}}>
        		<View style={{flex: 1, paddingVertical: 10}}>
        			<ScrollView style={{flex: 1,}}>
        				<View style={{flex: 1, paddingHorizontal: 10,}}>
                  {loading ? <Spinner color="blue" /> : <Text>{message}</Text>}
        					<View style={{flex:1,}}>
        						<Picker selectedValue={this.state.doctor} style={{fontSize: 18, height: 50, width: 300, color: '#00528e',}} onValueChange={(itemValue, itemIndex) => this.setState({doctor: itemValue}) }>
	                    <Picker.Item label="GENERAL DOCTOR" value="GeneralDoctor" />
	                    <Picker.Item label="SKIN DOCTOR" value="SkinDoctor" />
	                    <Picker.Item label="SEXUAL HEALTH DOCTOR" value="SexualDoctor" />
	                  </Picker>
                    <TextInput placeholder="Doctor's email address" onChangeText={(email)=>this.setState({email})} autoCapitalize='false' keyboardType='email-address' returnKeyType='next' style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7, paddingVertical: 7}} />
                    <TextInput placeholder="Password***" secureTextEntry onChangeText={(pass)=>this.setState({pass})} autoCapitalize='false' returnKeyType='done' style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7, paddingVertical: 7}} />
                  </View>	

                  <View style={{justifyContent: 'center', alignItems: 'flex-end', marginVertical: 15,}}>
                    <TouchableOpacity onPress={()=>this._loginUser()} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                      <Icon name="arrow-forward" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                    </TouchableOpacity>
                  </View>

        				</View>
        			</ScrollView>
        		</View>
        	</View>

        </View>	
    );
  }
}
