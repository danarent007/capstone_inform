import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

  class Post extends Component { 
    render() {
      return (
      <TouchableOpacity>
      <View style={{height:80, width: 400, marginTop: 10, backgroundColor: 'white', borderColor:'purple', borderWidth: 3, alignItems: 'center'}}>
        <Text style={{fontSize: 15, color: 'black', }}>Post Heading</Text>
    </View></TouchableOpacity>
      );
    }
}
export default Post