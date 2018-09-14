import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TextInput,Button,Alert} from 'react-native';


type Props = {};
export default class Login extends Component {
  render() {
    return (
	 <View style={styles.container}>
        <TextInput 
          style={{height: 40, marginTop:50}}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
          />
          <TextInput 
          style={{height:40}}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
          />
         <Button style = {{margin:20,width:100,height:100,flexDirection: 'row',justifyContent:'space-between'}}
          onPress={() => {
          Alert.alert('Bintang Piaggi Putra, XI RPL 1, 10');}}
          title="Login"
          color="#3B5998"
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:3,
  },
  title:{
    fontWeight : 'bold',
    fontSize: 48,
    color: 'black',
    alignItems: "center",
    marginTop:100,
    textAlign:'center'
  },
})
