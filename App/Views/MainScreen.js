import React, { Component } from 'react';
import {Image} from 'react-native' ; 
import PostFeed from './PostFeed'
import PostController from '../Controllers/PostController'
import { Icon } from 'react-native-elements'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('window')


export default class MainScreen extends Component {

  


  //pc = new PostController
  


  createPost = () =>
  {
    this.props.navigation.navigate('NewPost')
    this.render()
  }

  render() {
    return (
      <View style={{flex: 1, height: 100, width: 100,}}>
        <View style={styles.header}><Text style={styles.sectionTest}>Area Name</Text>
        </View>
        <View style={{width: WIDTH, alignItems:'center'}}>
        <PostFeed/>
      </View>
      <TouchableOpacity style={styles.creatPostFloatButton} onPress={ this.createPost}>
   <Icon type='material-community' name='plus'  size={30} color="white" />
  </TouchableOpacity>
      </View>
    );
  }

  
}
const styles = StyleSheet.create({
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
      backgroundColor: "#8B008B",
      flexDirection: 'column',
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
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:70,
      position: 'absolute',                                          
      bottom: 10,                                                    
      right: 10,
      height:70,
      backgroundColor:'#8B008B',
      borderRadius:100,
    }
 
  });

