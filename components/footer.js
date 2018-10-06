import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Footer extends Component {
	render(){
		return(
			<View style={forstyle.footer}>
			<Text style={{color:'blue', fontSize:15}}>
			Dont Have An Account ?
			</Text>
			<TouchableOpacity>
			<Text style={{color:'rgba(32,107,164,1.0}}', fontSize:15, fontWeight: 'bold'}}> Sign Up </Text>
			</TouchableOpacity>
			</View>
			)
	}
}

const forstyle = {
	footer: {
		marginTop: 50,
		flexDirection:'row'
	}
}

export default Footer;