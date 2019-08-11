import React, { Component, PureComponent } from 'react'
import Post from './Post'
import { FlatList, Text, TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation';
import PostController from '../Controllers/PostController'
import ViewPost from '../Views/ViewPost'
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

const POST_FETCH_URL = 'http://dulwich.dlinkddns.com/api/posts'

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
        <View style={{ height: 120, width: WIDTH - 10, marginTop: 10, backgroundColor: '#ffffff', borderColor: 'grey', borderWidth: 0, alignItems: 'center', borderRadius: 0, shadowOffset: {width: 0, height: 2}, elevation: 5, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 3.84}}>
          <Text style={{ fontSize: 15, color: 'black', fontWeight: "bold"}}>{item.title}</Text>
          <Text style={{ fontSize: 10, color: 'black', }}>{item.description}</Text>
        </View>
      </TouchableOpacity>  
  );


  _keyExtractor = (item, index) => item.post_id.toString();


  componentDidMount() {
    //pc = new PostController(this.postData)
    
    fetch(POST_FETCH_URL)
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
export default withNavigation(PostFeed);
