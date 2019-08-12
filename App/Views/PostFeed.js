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
import { withNavigation } from 'react-navigation';
import {
  View,
  Dimensions
  
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

// TO OPEN NEW SCREEN USE TOUCHABLE OPACITY ONPRESS={FUNCTION}
  _renderItem = ({item}) => (
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('VPost', {title: item.title, description: item.description, controller: this})}> 
        <View style={{ height: 120, width: WIDTH - 30, paddingLeft: 5, paddingRight: 5, marginTop: 10, marginLeft: 10, marginRight: 10, backgroundColor: '#4682b4', borderColor: 'grey', borderWidth: 0, alignItems: 'center', borderRadius: 0, shadowOffset: {width: 0, height: 2}, elevation: 8, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 3.84}}>
          <Text style={{ fontSize: 15, color: '#fff', fontWeight: "bold"}}>{item.title}</Text>
          <Text style={{ fontSize: 10, color: '#fff', }}>{item.description}</Text>
        </View>
      </TouchableOpacity>  
  );

  _keyExtractor = (item, index) => item.post_id.toString();

  componentDidMount() { //OnMount
    fetch(POST_FETCH_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ posts: responseJson })
    }).catch((error) => {
      alert(error)
    })
  }

  render() { //Render view
    return (
      <FlatList
        contentContainerStyle={{ alignContent: 'center', backgroundColor: '#add8e6' }}
        data={this.state.posts}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
export default withNavigation(PostFeed);
