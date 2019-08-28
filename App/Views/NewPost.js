/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** NewPost.js
*/

import React, { Component } from 'react';
import PostController from '../Controllers/PostController'
import styles from '../Styles/styles'
import AsyncStorage from '@react-native-community/async-storage';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Picker
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window') //Window width for formatting

export default class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state =
      {
        title: '',
        body: '',
        controller: this.props.navigation.getParam('controller', 'Not Found'),
        data: []
      };
      
  }
  async componentDidMount() {

    let a = await AsyncStorage.getItem('userLocations');
    this.setState({data: a})
    alert(a)
  }

  createPost = () => //Create a new post
  {
    postData =
      {
        title: this.state.title,
        body: this.state.body,
      }
    pc = new PostController(postData) //Start a new post controller
    pc.publishPost() //Publish post

    //TODO:
    /*
    -Post field verification ie, no empty fields
    -Display if post has been added successfully
    -Refresh post feed
    */

    this.props.navigation.goBack() //Return to main screen
  }

  render() { //Render view
    




    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>NEW POST</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Title"}
            height={80}
            placeholderTextColor={'#ffffff'}
            underLineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ title: text })}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Body"}
            height={120}
            placeholderTextColor={'#ffffff'}
            underLineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ body: text })}
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={this.createPost}>
          <Text style={styles.loginText}>Publish Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
