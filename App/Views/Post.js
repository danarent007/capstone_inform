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
/*
    constructor (postData)
    {
      postData = 
      {
        id : postData.post_id,
        post_title : postData.title,
        post_body : postData.description
      }
    }

*/



    render() {
      return (
      <TouchableOpacity>
      <View style={{height:100, width: WIDTH-10, marginTop: 10, backgroundColor: 'grey', borderColor:'purple', borderWidth: 3, alignItems: 'center', borderRadius: 0,}}>
        <Text style={{fontSize: 15, color: 'black', }}>Post Heading</Text>
        <Text style={{fontSize: 12, color: 'black', }}>A number of fundamentals have been driving Bitcoin in recent weeks</Text>
    </View></TouchableOpacity>
      );
    }
}
export default Post