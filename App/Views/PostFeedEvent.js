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
  Image
  
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { Left } from 'native-base';
import { underline } from 'ansi-colors';
import MainScreen from './MainScreen';




class PostFeedEvent extends React.Component {
  constructor() {
    super()
    this.state =
      {
        posts: [],
        screen: MainScreen
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
    
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('VPost', {current_user_id: this.props.current_user_id ,id: item.post_id, title: item.title, description: item.description, controller: this, user_id: item.user_id, area: item.location_name, name:item.name,photo_uri:item.photo_uri})}> 
        <View style={styles.listpost_row}>
        <View style={{flex:3,alignItems: 'center'}}>
        <Image
          style={styles.postfeed_image_style}
          source={{uri:item.photo_uri}}
          />
        </View>
        <View style={{flex:11,alignItems: "flex-start"}}>
          <Text 
          style={{ fontSize: 25, color: '#000', textAlign: 'center'}}
          numberOfLines={1}>{item.title.toUpperCase()}</Text>
          <Text 
          style={{ fontSize: 15, color: '#000', fontWeight: "bold",textAlign: 'center', fontStyle: "italic"}}>{item.location_name}</Text>
          <Text 
          style={{ fontSize: 10, color: '#000', fontWeight: "bold", fontStyle: "italic",textAlign: 'center'}}
          numberOfLines={1}>{item.date_posted}</Text>
        </View>
        
        </View>
      </TouchableOpacity>
  )

  render() { //Render view
    return (
      <FlatList
        contentContainerStyle={styles.flatListContentStyle}
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
