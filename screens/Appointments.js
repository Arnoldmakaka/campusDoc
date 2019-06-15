import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, ScrollView, YellowBox, Alert, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {Icon, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase';

YellowBox.ignoreWarnings(['Warning: componentWill'])


export default class Appointments extends Component {

	constructor() {
		super()
		this.state = {
    		appointmentdata: [], 
    		mydoc: '',
  		}
	}

	componentDidMount = async () => {
		var doctorname = await AsyncStorage.getItem('@key_loginuser');
        var doc = JSON.parse(doctorname)
        //alert(JSON.stringify(doc.doctor));
        this.setState({ mydoc: doc.doctor });
    //.then(() => { 
    	let {mydoc} = this.state
      //alert(mydoc)
    	firebase.database().ref('AppointmentList/' + mydoc)
    	//firebase.database().ref('AppointmentList/Appointment/sexualdoctor')
    	.orderByChild("createdAt")
        .on('child_added', (snap)=>{ //child_added listens to the new updates at the chats node
            let appointmentdata = snap.val()
            this.setState({appointmentdata:[...this.state.appointmentdata, appointmentdata]});
            //alert(JSON.stringify(this.state.appointmentdata))
          });
        //alert("yooooo");
  	}

  	_appointmentlist = () => {
  	// alert(JSON.stringify(this.state.appointmentdata))
    var appointmentlist = this.state.appointmentdata
    return appointmentlist.map((i,j) => (
    	<View key={i} style={{marginHorizontal: 10, paddingVertical: 5,}}>
    		<View style={{flexDirection: 'row', justifyContent: 'space-between', borderColor: '#00528e', borderRadius: 4, borderWidth: 2,}}>
				<View style={{flex: 1, paddingHorizontal: 7, paddingVertical: 7,}}>
        
			        <View style={{flexDirection: 'row', paddingBottom: 3,}}>
			          <View>
			            <Text style={{ fontSize: 14, color: '#000000', fontWeight: '400',}}>Name: </Text>
			          </View>
			          <View>  
			            <Text style={{ fontSize: 14, color: '#00528e', fontStyle: 'italic', }}>{i.Fullname}</Text>
			          </View>
			        </View>

			        <View style={{flexDirection: 'row', paddingBottom: 3,}}>
			          <View>
			            <Text style={{ fontSize: 14, color: '#000000', fontWeight: '400',}}>Email: </Text>
			          </View>
			          <View>  
			            <Text style={{ fontSize: 14, color: '#00528e', fontStyle: 'italic', }}>{i.Email}</Text>
			          </View>
			        </View>

			        <View style={{flexDirection: 'row', paddingBottom: 3,}}>
			          <View>
			            <Text style={{ fontSize: 14, color: '#000000', fontWeight: '400',}}>PhoneNumber: </Text>
			          </View>
			          <View>  
			            <Text style={{ fontSize: 14, color: '#00528e', fontStyle: 'italic', }}>{i.PhoneNumber}</Text>
			          </View>
			        </View>

			        <View style={{flexDirection: 'row', paddingBottom: 3,}}>
			          <View>
			            <Text style={{ fontSize: 14, color: '#000000', fontWeight: '400',}}>Message: </Text>
			          </View>
			          <View>  
			            <Text style={{ fontSize: 14, color: '#00528e', fontStyle: 'italic', }}>{i.Message}</Text>
			          </View>
			        </View>
      			</View>  
			</View>
  		</View>    
      )
    )
  }

  render() {
  	
    return (
	    <View style={{flex: 1,}}>
	        <View style={{flex: 1,}}>
	        	<ScrollView style={{flex: 1}}>
	                {this._appointmentlist()}
	            </ScrollView>  
	        </View>
	    </View>
    );
  }
}

