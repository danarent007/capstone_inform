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
import { Header, Left, Right, Body, Title, Button } from 'native-base'

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const { width: WIDTH } = Dimensions.get('window') //Window width for formatting

export default class MainScreen extends Component {

  display = async () => {
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

      <View style={{ flex: 1, width: '100%'}}>
        <Header styles={{backgroundColor: 'red'}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
              <Icon type='material-community' name={"menu"} />
            </Button>

          </Left>
          <Body>
            <Title>Area Name</Title>
          </Body>
          <Right>
          <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
              <Icon type='material-community' name={"settings"} />
            </Button>
          </Right>

        </Header>

        <View style={styles.pfeed}>
          <PostFeed />
        </View>
        <TouchableOpacity style={styles.creatPostFloatButton} onPress={()=>this.props.navigation.navigate('NewPost')}>
          <Icon type='material-community' name='plus' size={35} color="white" />
        </TouchableOpacity>
      </View>
      //</SafeAreaView>
    );
  }

}


