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

  constructor(props) {
    super(props)
    this.state = {
      selectedAreas: [],
      loading: 'initial',
      id: ""
    };
  }

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
  async getData() {
    try {
      let userData = await AsyncStorage.getItem('userID')
      alert(userData)
      return userData
    } catch (error) {
      alert(error)
    }
  }

  getLocations = () => {
    alert("Work")
    fetch("http://dulwich.dlinkddns.com/api/userLocations", //JSon Request
      {
        method: 'POST',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            id: this.state.id,
          })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(JSON.stringify(responseJson))
      }).catch((error) => {
        alert("wrong")
        console.error(error);
      });
  }
  async componentDidMount() {

    this.setState({ id: await this.getData() })
    await this.getLocations()

  }

  render() { //Render view
    return (

      <View style={{ flex: 1, width: '100%' }}>
        <Header style={{ backgroundColor: '#4682b4' }}
          androidStatusBarColor={'#4682b4'}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon type='material-community' name={"menu"} />
            </Button>

          </Left>
          <Body>
            <Title>Area Name</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon type='material-community' name={"settings"} />
            </Button>
          </Right>

        </Header>

        <View style={styles.pfeed}>
          <PostFeed />
        </View>
        <TouchableOpacity style={styles.creatPostFloatButton} onPress={() => this.props.navigation.navigate('NewPost')}>
          <Icon type='material-community' name='plus' size={35} color="white" />
        </TouchableOpacity>
      </View>
      //</SafeAreaView>
    );
  }

}


