/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** MainScreen.js
*/

import React, { Component } from 'react';
import PostFeed from './PostFeed'
import { Icon } from 'react-native-elements'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

const {width: WIDTH} = Dimensions.get('window') //Window width for formatting

export default class MainScreen extends Component {

  createPost = () => //Navigate to new post screen
  {
    this.props.navigation.navigate('NewPost')
  }

  render() { //Render view
    return (
      <View style={{flex: 1, height: 100, width: 100,}}>
        <View style={styles.header}><Text style={styles.sectionTest}>Area Name</Text>
        </View>
        <View style={{width: WIDTH, alignItems:'center', backgroundColor: '#add8e6'}}>
        <PostFeed/>
      </View>
      <TouchableOpacity style={styles.creatPostFloatButton} onPress={ this.createPost}>
   <Icon type='material-community' name='plus'  size={35} color="white" />
  </TouchableOpacity>
      </View>
    );
  }

}
const styles = StyleSheet.create({ //Styles
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTest: 
    {
      fontSize: 30,
      fontWeight: '600',
      color: "white",
      textAlign: "center",
      width: 200,
      alignSelf: 'center'
    },
    header: 
    {
      width: WIDTH,
      height: 45,
      backgroundColor: "#4682b4",
      flexDirection: 'column',
      fontWeight: "bold"
    },
    postButton: 
    {
     backgroundColor: '#a302a3',
     height: 60,
     width: 50,
     alignSelf: 'flex-end',
    
    },
    image:
    {
      zIndex: 1,
      height: 50,
      alignSelf: 'flex-end',
      width: 60,
      tintColor: '#610061',
      position: 'absolute'
     
    },
    creatPostFloatButton:
    {
      borderWidth:0,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:70,
      position: 'absolute',                                          
      bottom: 10,                                                    
      right: 10,
      height:70,
      backgroundColor:'#add8e6',
      borderRadius:100,
      shadowOffset: {width: 0, height: 2}, 
      elevation: 5, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84
    }
 
  });

