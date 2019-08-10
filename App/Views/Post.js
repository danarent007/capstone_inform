import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  Dimensions
  
} from 'react-native';
const {width: WIDTH} = Dimensions.get('window')
import { TouchableOpacity } from 'react-native-gesture-handler';
import PostController from '../Controllers/PostController'
  class Post extends Component { 

    render() {
      return (
      <TouchableOpacity>
      <View style={{height:100, width: WIDTH-10, marginTop: 10, backgroundColor: 'white', borderColor:'purple', borderWidth: 3, alignItems: 'center', borderRadius: 25,}}>
        <Text style={{fontSize: 15, color: 'black', }}>Post Heading</Text>
    </View></TouchableOpacity>
      );
    }
}
export default Post