/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TextInput,Button,Alert} from 'react-native';
import Judul from './component/judul';
import Login from './Screen/Login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
	 <View style={styles.container}>
         <Image
          style={{width: 120, height: 120, marginLeft:120, marginTop:100}}
          source={require('./fb.png')}
        />
        <TextInput 
          style={{marginLeft:55,height:40,width:250,marginTop:100}}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
        />
          <TextInput 
          style={{marginLeft:55,height:40,width:250,marginTop:10}}
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
    flex: 3,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    margin: 10,
  },
});
