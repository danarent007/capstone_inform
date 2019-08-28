/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
*/

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
const { width: WIDTH } = Dimensions.get('window')
import { TouchableOpacity } from 'react-native-gesture-handler';
import PostController from '../Controllers/PostController'
import { Header, Left, Right, Body, Title, Button } from 'native-base'
class Post extends Component {

  constructor(postData, props) {
    super()
    this.state =
      {
        postData: postData
      }
      //alert(JSON.stringify(postData))
  }

  /*
  returnData = () =>
  {
    console.log(postData.id)
    onPress={this.returnData}
  }
 */



  openPost = () => {
    alert(this.post_title)
  }

  render() {
    //alert(alert(this.postData))
      return (
        <TouchableOpacity>
          <View style={{ height: 100, width: WIDTH - 10, marginTop: 10, backgroundColor: 'grey', borderColor: 'purple', borderWidth: 3, alignItems: 'center', borderRadius: 0, }} onPress={this.openPost}>
            <Text style={{ fontSize: 15, color: 'black', }}>{this.state.post_title}</Text>
            <Text style={{ fontSize: 12, color: 'black', }}>{this.state.post_body}</Text>
          </View></TouchableOpacity>
      );
    } 
}

export default Post