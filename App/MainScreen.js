import React, { Component } from 'react';
import {Image} from 'react-native' ; 
import PostFeed from './PostFeed'


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

const {width: WIDTH} = Dimensions.get('window')

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, height: 100, width: 100}}>
        <View style={styles.header}><Text style={styles.sectionTest}>Area Name</Text></View>
        <View style={{width: WIDTH, alignItems:'center'}}>
        <PostFeed />
      </View>
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
    },
    header: 
    {
      
      width: WIDTH,
      height: 60,
      backgroundColor: "#8B008B"
    }
   
   
   
    
  });

