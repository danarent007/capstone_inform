import React, { Component, PureComponent } from 'react'
import Post from './Post'
import { FlatList, Text } from 'react-native'
import PostController from '../Controllers/PostController'
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  Dimensions
  
} from 'react-native';
const {width: WIDTH} = Dimensions.get('window')
import { TouchableOpacity } from 'react-native-gesture-handler';

class PostFeed extends React.PureComponent {
  constructor() {
    super()
    this.state =
      {
        posts: []
      }
  }

  

// TO OPEN NEW SCREEN USE TOUCHABLE OPACITY ONPRESS={FUNCTION}
  _renderItem = ({item}) => (
    <TouchableOpacity> 
        <View style={{ height: 120, width: WIDTH - 10, marginTop: 10, backgroundColor: 'white', borderColor: 'purple', borderWidth: 3, alignItems: 'center', borderRadius: 25, }}>
          <Text style={{ fontSize: 15, color: 'black',}}>{item.title}</Text>
          <Text style={{ fontSize: 10, color: 'black', }}>{item.description}</Text>
        </View>
      </TouchableOpacity>  
  );

  _keyExtractor = (item, index) => item.post_id.toString();


  componentDidMount() {
    alert('trying to get data...')
    //pc = new PostController(this.postData)
    const url = 'http://dulwich.dlinkddns.com/api/posts'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      //alert(JSON.stringify(responseJson))
      this.setState({ posts: responseJson })

    }).catch((error) => {
      alert(error)
    })

  }
  render() {
    return (
      <FlatList
        contentContainerStyle={{ alignContent: 'center' }}
        data={this.state.posts}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
export default PostFeed;