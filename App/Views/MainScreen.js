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
const POST_FETCH_URL = 'http://dulwich.dlinkddns.com/api/posts' //URL for fetching posts.

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

  constructor() {
    super()
    this.state = {
      selectedAreas: [],
      loading: true,
      refreshing: false,
      data: []

    };
  }

  display = async () => {
    this.props.navigation.openDrawer();
  }

  makeRequest =  async() =>
  {
   // let token = this.getToken()
    //alert(token)
    await fetch(POST_FETCH_URL, {
      method: 'GET'
    })
    .then(async response => await response.json())
    .then((responseJson) => {
      this.setState 
      ({
        data: responseJson,
        loading: false
      })
    }).catch((error) => {
      alert(error)
    })
  }

   async getData() {
    try {
      let userData =  await AsyncStorage.getItem('userID')
      return userData
    } catch (error) {
      alert(error)
    }
  }

  async getLocations() {
    //alert("Work"+this.state.id)
    await fetch("http://dulwich.dlinkddns.com/api/userLocations", //JSon Request
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
      .then(async response => await response.json())
      .then((responseJson) => {
        let loc = responseJson
         //alert("textL: "+JSON.stringify(loc))
      }).catch((error) => {
        alert("wrong")
        console.error(error);
      });
  }

   async componentDidMount() 
    {
    this.setState({loading: true})
    this.makeRequest()
    this.render()
     

  }
  

  newPost = () =>
  {
    this.props.navigation.navigate('NewPost')
    this.makeRequest()
  }


  render() { //Render view
    if(!this.state.loading)
    {
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
          <PostFeed 
          data={this.state.data}
          />
        </View>
        <TouchableOpacity style={styles.creatPostFloatButton} onPress={() => this.newPost()}>
          <Icon type='material-community' name='plus' size={35} color="white" />
        </TouchableOpacity>
      </View>
      //</SafeAreaView>
    );
    }
    else
    {
        return <Text>Intializing...</Text>;
    }
  }

}


