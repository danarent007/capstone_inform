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
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import { Header, Left, Right, Body, Picker, Button } from 'native-base'

import {
  View,
  Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
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

  formatDate(date)
  {
    var year = (date).substring(0,4)
    var month = (date).substring(5,7)
    var day = (date).substring(8,10)
    var ho = (date).substring(11,13)
    var mi = (date).substring(14,16)
    return (day+'/'+month+'/'+year+' '+ho+':'+mi)
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
    
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('VPostEvent', {start: item.event_start, end: item.event_end,current_user_id: this.props.current_user_id ,id: item.event_id, title: item.event_name, description: item.event_description, controller: this, user_id: item.user_id, area: item.location_name, name:item.author_name,photo_uri:item.photo_uri,author_id:item.author_id})}> 
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
          numberOfLines={1}>{item.event_name.toUpperCase()}</Text>
          <Text 
          style={{ fontSize: 15, color: '#000', fontWeight: "bold",textAlign: 'center', fontStyle: "italic"}}>{item.location_name}</Text>
            <View style={{flex:3}}>
          <Text 
          style={{ fontSize: 10, color: '#000', fontWeight: "bold", fontStyle: "italic",textAlign: 'center'}}
          numberOfLines={1}>{this.formatDate(item.event_start)}</Text>
          </View>
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
