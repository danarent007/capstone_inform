import React, { Component} from 'react';
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

export default class ViewPost extends Component {

  constructor(props) {
    super(props);
    //uc = new UserController()
    this.state = 
    {
      title: this.props.navigation.getParam('title', 'Not Found'),
      body: this.props.navigation.getParam('description', 'Not Found')
    };
  }






  render() {
    console.log(this.body)
    return (
        
      <View style={styles.container}>
        {console.log(this.title)}
            <Text style={styles.headingText}>{this.state.title}</Text>
            
            <ScrollView style={styles.scroll}>
            <View style={styles.lineStyle}/>
              <Text style={styles.bodyText}>{this.state.body}</Text>
            </ScrollView>
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
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        opacity: 0.7,
        textAlign: "center",
        position : "relative",
        flex: 1
        
    },
    bodyText: 
    {
        color: 'white',
        fontSize: 15,
        //fontWeight: 'bold',
        minWidth: this.WIDTH,
        marginTop: 0,
        opacity: 1,
        textAlign: "center",
        position : "relative",
        flex: 0, 
    },

    lineStyle:
    {
      borderWidth: 0.5,
      borderColor:'black',
      margin:10,
    },

    scroll:
    {
      //paddingHorizontal: 20,
      //flex: 6,
      borderWidth: 5,
      borderColor: 'white',
      width: WIDTH -20,
      //paddingBottom: 50,
      //paddingTop: 10,
      position: "relative",           

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
        marginTop: 10,
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
