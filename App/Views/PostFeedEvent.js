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
import { Left } from 'native-base';
import { underline } from 'ansi-colors';




class PostFeedEvent extends React.Component {
  constructor() {
    super()
    this.state =
      {
        posts: []
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
    
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('VPostEvent', {current_user_id: this.props.current_user_id ,id: item.post_id, title: item.title, description: item.description, controller: this, user_id: item.user_id, area: item.location_name, name:item.name})}> 
        <View style={styles.listpost}>
          <Text style={{ fontSize: 19, color: '#fff', fontWeight: "bold"}}>{item.title}</Text>
          <Text style={{ fontSize: 10, color: '#add8e6', fontWeight: "bold", fontStyle: "italic"}}>{item.location_name}</Text>
          <Text style={{ fontSize: 10, color: '#fff'}}>{item.description}</Text>
        </View>
      </TouchableOpacity>
  )






  render() { //Render view
    return (
      <FlatList
        contentContainerStyle={{ alignContent: 'center', backgroundColor: '#add8e6' }}
        data={this.props.posts}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        refreshing ={this.props.refreshing}
        
      />
    );
  }
  
   

}
export default withNavigation(PostFeedEvent);