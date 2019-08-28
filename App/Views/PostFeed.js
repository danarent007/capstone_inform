/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** PostFeed.js
*/

import React, { Component, PureComponent } from 'react'
import { FlatList, Text, TouchableHighlight } from 'react-native'
import styles from '../Styles/styles'
import { withNavigation } from 'react-navigation';
import {
  View,
  Dimensions
  
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Post from './Post'



const {width: WIDTH} = Dimensions.get('window') //Window width for formatting
// const POST_FETCH_URL = 'http://dulwich.dlinkddns.com/api/posts' //URL for fetching posts.


class PostFeed extends React.Component {
  constructor(data) {
    super()
    this.state =
      {
        posts: data.data.data,
        selected: data.data.refreshing
      }
  }

  

  async getToken()
  {
    
    try {
      let token = await AsyncStorage.getItem('token')
      //alert(token)
      return token
    } catch (error) {
      alert(error)
      
    }
    
  }

// TO OPEN NEW SCREEN USE TOUCHABLE OPACITY ONPRESS={FUNCTION}
  _renderItem = ({item}) => (
    
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('VPost', {id: item.post_id, title: item.title, description: item.description, controller: this})}> 
        <View style={styles.listpost}>
          <Text style={{ fontSize: 15, color: '#fff', fontWeight: "bold"}}>{item.title}</Text>
          <Text style={{ fontSize: 10, color: '#fff', }}>{item.description}</Text>
        </View>
      </TouchableOpacity>  
    
    
     
  )

  // _keyExtractor = (item, index) => item.post_id.toString();





  render() { //Render view
    
   console.log(this.props.refreshing)
    return (
      <FlatList
        contentContainerStyle={{ alignContent: 'center', backgroundColor: '#add8e6' }}
        data={this.state.posts}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        refreshing ={this.props.refreshing}
      />
    );
  }
  
   

}
export default withNavigation(PostFeed);
