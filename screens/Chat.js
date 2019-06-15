import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, ScrollView, YellowBox, Alert, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {Icon, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase';

YellowBox.ignoreWarnings(['Warning: componentWill'])


export default class Chat extends Component {

	constructor() {
		super()
		this.state = {
    		textdata: [], 
    		mydoc: '',
        mykeys:[],
        loading: false,
        message: ''
  		}
	}

	componentDidMount = async () => {
    const {email, pass, doctor} = this.state
		var doctorname = await AsyncStorage.getItem('@key_loginuser');
        var doc = JSON.parse(doctorname)
        //alert(JSON.stringify(doc.doctor));
        this.setState({ 
          mydoc: doc.doctor,
          loading:true,
          message: ''
        });
    //.then(() => { 
      let {mydoc} = this.state
    	firebase.database().ref(mydoc+'Tap') //listen to the GeneralDoctorTap node and get all messages
    	.orderByChild("createdAt")
      .on('value', (snap)=>{ //child_added listens to the new updates at the chats node
      let textdata = []
      let messages = snap.val()
      for (let i in messages){
        textdata = [...textdata, {msg:messages[i], Key:i}]
      }
      //alert(JSON.stringify(snap.val()))
      // let userIds = [] // this would be mykeys in your code
      // for (let key in snap.val()){
      //   userIds = [...userIds, key]
      // }
      this.setState({textdata: textdata})//, userIds})
      //alert(JSON.stringify(textdata))
      }); 
        //alert("yooooo");
  	}


  	//i want to get the messages from the GeneralDoctorTap node
  	//so i listen to it and then i huv to get the keys {i.key} and add them to the GeneralDoctorTap node
  	//But i dont know how to do that 


  	_textlist = () => {
    var textlist = this.state.textdata
    alert(JSON.stringify(textlist))
    return textlist.map((i,j) => (
    	<TouchableOpacity key={i} style={{paddingVertical: 5,}}>
    		<View style={{flexDirection: 'row', justifyContent: 'space-between', borderColor: '#00528e', borderRadius: 4, borderWidth: 2,}}>
				  <View style={{flex: 1, paddingHorizontal: 7, paddingVertical: 5,}}>
        
			        <View style={{flexDirection: 'row', paddingBottom: 3,}}>
			          <View>
			            <Text style={{ fontSize: 15, color: '#000000', fontWeight: '400',}}>Student</Text>
			          </View>
			        </View>

			        <View style={{flexDirection: 'row', paddingBottom: 3,}}>
			          <View>  
			            <Text style={{ fontSize: 15, color: '#00528e', fontStyle: 'italic', }}>{i.Key}</Text>
			          </View>
			        </View>
      		</View>  
			   </View>
  		</TouchableOpacity>    
      )
    )
  }

  render() {
  	let {message, loading} = this.state
    return (
	    <View style={{flex: 1,}}>
	        <View style={{flex: 1,}}>
	        	<ScrollView style={{flex: 1}}>
              <View style={{marginHorizontal: 10, paddingVertical: 5,}}>
	              {this._textlist()}
	            </View>  
            </ScrollView>  
	        </View>
	    </View>
    );
  }
}

