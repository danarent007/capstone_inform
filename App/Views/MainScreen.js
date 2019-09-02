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
import DropdownMenu from 'react-native-dropdown-menu';


const POST_FETCH_URL = 'http://dulwich.dlinkddns.com/api/posts' //URL for fetching posts.
 

import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { thisTypeAnnotation } from '@babel/types';

export default class MainScreen extends Component 
{

  constructor(props) 
  {
    super(props)
    this.state = {
      loading: true,
      data:[],
      locations:[],
      loading_locations: false,
      text: ''
    };
  }

  async getData() {
    try {
      
      let userData =  await AsyncStorage.getItem('userID')
      return userData
    } catch (error) {
      alert(error)
    }
  }

  display = async () => 
  {
    //this.props.navigation.openDrawer();
  }

   async getData() 
   {
    try {
      let userData =  await AsyncStorage.getItem('userID')
      return userData
    } catch (error) {
      alert(error)
    }
  }


  async getLocations() 
  {
    this.setState({loading_locations:true})
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
        this.setState({locations: responseJson})
        return '5'
      }).catch((error) => {
        alert("wrong")
        console.error(error);
        this.setState({loading: false})
      });

  }

  componentWillUnmount()
  {
    this.focusListener.remove();
  }


  async componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.makeRequest();
    });
    let id = await this.getData()
    this.state.id = id
     let c = await this.getLocations()
     this.makeRequest()
   }
  
  makeRequest =  async() =>
  {
    console.log("LOCS: " + JSON.stringify(this.state.locations))
    console.log("Refreshing Posts (GET)")

  
    // while(this.state.loading_locations)
    // {
    // }

   // let token = this.getToken()
    await fetch(POST_FETCH_URL, {
      method: 'POST',
      headers: 
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
        {
           max_posts: 30,
           locations: this.state.locations,
        })
        
    })
    .then(async response => await response.json())
    .then((responseJson) => {
      // this.setState 
      // ({
      //   data: responseJson,
      //   loading: false
      // })
      //alert("HUUUUGE DUB: \n"+JSON.stringify(responseJson))
      console.log( "------------" + JSON.stringify(responseJson))

      this.setState({
        data: responseJson,
        loading : false
      })
      
    }).catch((error) => {
      alert(error)
      this.setState({
        loading: false
      })
    })
  }

  newPost = () =>
  {
    this.props.navigation.navigate('NewPost', {locs: this.state.locations})
  }

  editAreas = () =>
  {
    console.log("Pre-parsed: " + JSON.stringify(this.state.locations))
    this.props.navigation.navigate('AreaEdit', {preSelectedAreas: this.state.locations})
  }


  render() { //Render view
    console.log("Render")
    if(!this.state.loading)
    {
      
    return (
      <View style={{ flex: 1, width: '100%' }}>
        <Header style={{ backgroundColor: '#4682b4' }}
          androidStatusBarColor={'#4682b4'}>
          <Left>
            <Button transparent onPress={() => this.editAreas()}>
              <Icon type='material-community' name={"menu"} />
            </Button>
          </Left>
          <Body>

          </Body>
          <Right>
            <Button transparent onPress={() => this.makeRequest()}>
              <Icon type='material-community' name={"settings"} />
            </Button>
          </Right>
        </Header>
        <View style={styles.pfeed}>
        <PostFeed 
          posts={this.state.data}

          refreshing={this.state.refreshing}
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
      return(
        <View style={styles.container}>
        <Image source={require('../Views/stone.png')} />
            <Text style={styles.headingText}></Text>
            <Text style={styles.welcomeText}>Loading...</Text>
            <View style = {{paddingBottom:50}}>
            </View>
            <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )
    }
  }

  }




