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



const {width: WIDTH} = Dimensions.get('window') //Window width for formatting
const POST_FETCH_URL = 'http://dulwich.dlinkddns.com/api/posts' //URL for fetching posts.

class PostFeed extends React.Component {
  constructor(props) {
    super(props)
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
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('VPost', {id: item.post_id, title: item.title, description: item.description, controller: this})}> 
        <View style={styles.listpost}>
          <Text style={{ fontSize: 15, color: '#fff', fontWeight: "bold"}}>{item.title}</Text>
          <Text style={{ fontSize: 10, color: '#fff', }}>{item.description}</Text>
        </View>
      </TouchableOpacity>  
  );

  _keyExtractor = (item, index) => item.post_id.toString();

  async componentDidMount() { //OnMount
    let token = await this.getToken()
    //alert(token)
    fetch(POST_FETCH_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json', 
        'Authorization': 'JWT ' + token
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ posts: responseJson })
    }).catch((error) => {
      alert(error)
    })



    // fetch(POST_FETCH_URL)
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   this.setState({ posts: responseJson })
    // }).catch((error) => {
    //   alert(error)
    // })
  }

  render() { //Render view
    return (
      <FlatList
        contentContainerStyle={{ alignContent: 'center', backgroundColor: '#add8e6' }}
        data={this.state.posts}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        refresh
      />
    );
  }
}
export default withNavigation(PostFeed);
