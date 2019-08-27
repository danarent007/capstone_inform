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
import styles from '../Styles/styles'

import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const {width: WIDTH} = Dimensions.get('window') //Window width for formatting

export default class MainScreen extends Component {

  createPost = () => //Navigate to new post screen
  {
    this.props.navigation.navigate('NewPost')
  }
  display = async () =>
  {
    this.props.navigation.openDrawer();
    // try {
    //   let user = await AsyncStorage.getItem('userData')
    //   let parsed = JSON.stringify(user)
    //   alert(parsed)
    // } catch (error) {
    //   alert(error)
      
    // }
  }

  render() { //Render view
    return (
      <View style={{flex: 1, height: 100, width: 100,}}>
        <View style={styles.header}><Text style={styles.sectionTest}>Area Name</Text>
        </View>
        <View style={styles.pfeed}>
        <PostFeed/>
      </View>
      <TouchableOpacity style={styles.creatPostFloatButton} onPress={ this.createPost}>
   <Icon type='material-community' name='plus'  size={35} color="white" />
  </TouchableOpacity>
  <TouchableOpacity style={styles.creatPostFloatButton} onPress={this.display}>
   <Icon type='material-community' name='plus'  size={20} color="white" />
  </TouchableOpacity>
      </View>
    );
  }

}


