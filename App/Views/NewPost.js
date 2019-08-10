import React, { Component } from 'react';
import {Image} from 'react-native' 
import PostController from '../Controllers/PostController'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Parent,
    Colors 
  } from 'react-native';
import Post from './Post';
  

const {width: WIDTH} = Dimensions.get('window')

export default class NewPost extends Component {

  constructor(props) {
    super(props);
    //uc = new UserController()

    this.state = 
    {
      title: '',
      body: ''
    };
  }



  createPost = () => 
  {
    postData =
    {
      title : this.state.title,
      body : this.state.body,
    }
    

    pc = new PostController(postData)
    pc.publishPost()
    //TODO:
    /*
    -Post field verification ie, no empty fields
    -Display if post has been added successfully
    -Refresh post feed
    */


    this.props.navigation.goBack()
  }



  render() {
    return (
        
      <View style={styles.container}>
            <Text style={styles.headingText}>NEW POST</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder={"Title"}
                    height={80}
                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                    underLineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({title:text})}
                    ></TextInput>
                </View>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder={"Body"}
                height={120}
                placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
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


const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8B008B',

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
        //height: 100,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        color: 'rgba(0, 0, 0, 0.7)',
        marginHorizontal: 25
    },
    inputContainer: 
    {
        marginTop: 10
    },
    btnLogin: 
    {
        width: WIDTH - 150,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        marginTop: 25,
        
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        justifyContent: 'center',
    },
    loginText: 
    {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 20,
        textAlign: 'center',
        

    }

   
   
    
  });
