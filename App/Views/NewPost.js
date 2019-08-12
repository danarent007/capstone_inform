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
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  
const {width: WIDTH} = Dimensions.get('window') //Window width for formatting

export default class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      title: '',
      body: '',
      controller: this.props.navigation.getParam('controller', 'Not Found')
    };
  }

  createPost = () => //Create a new post
  {
    postData =
    {
      title : this.state.title,
      body : this.state.body,
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
                    onChangeText={(text) => this.setState({title:text})}
                    ></TextInput>
                </View>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder={"Body"}
                height={120}
                placeholderTextColor={'#ffffff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({body:text})}
                ></TextInput>
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={ this.createPost}>
                    <Text style={styles.loginText}>Publish Post</Text>
                </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({ //Styles
    container: 
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4682b4',
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTest: 
    {
      fontSize: 50,
      fontWeight: '600',
      color: "purple",
      textAlign: "center",
    },
    headingText: 
    {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        opacity: 0.5,
    },
    input: 
    {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 0,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: '#add8e6',
      fontWeight: 'bold',
      color: '#ffffff',
      marginHorizontal: 25,
      opacity: 0.6
    },
    inputContainer: 
    {
        marginTop: 10
    },
    btnLogin: 
    {
      width: WIDTH - 150,
      height: 45,
      borderRadius: 0,
      fontSize: 16,
      marginTop: 25,
      backgroundColor: '#add8e6',
      color: '#ffffff',
      justifyContent: 'center',
      shadowOffset: {width: 0, height: 2}, 
      elevation: 5, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84
    },
    loginText: 
    {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: 0.6
    }

   
   
    
  });
