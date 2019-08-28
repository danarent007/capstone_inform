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
import CustomListview from '../Views/CustomListview'
import { Icon } from 'react-native-elements'
import styles from '../Styles/styles'

import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  const POST_FETCH_URL = 'http://dulwich.dlinkddns.com/api/posts' //URL for fetching posts.
import AsyncStorage from '@react-native-community/async-storage';


export default class MainScreen extends Component {

  constructor(props) {
    super(props)
    this.state = 
      {
        loading: false,
        posts: [],
        refreshing: false
      }
  }

  data = [
    {title: 'Devin',
    description: 'Dan',
    post_id: 4
  },
  {
    title: 'Devin',
    description: 'Dan',
    post_id: 5
  },
  {
    title: 'James',
    description: 'Daniel',
    post_id: 6
  }
  ];


  createPost = () => //Navigate to new post screen
  {
    this.props.navigation.navigate('NewPost')
  }

  display = async () =>
  {
    this.props.navigation.openDrawer();
  }

  componentDidMount()
  {
    this.getData()
  }



  getData=()=>
  {
    this.setState({loading: true})
    fetch(POST_FETCH_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json', 
        'Authorization': 'JWT'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ 
      posts: responseJson,
      loading: false,
      refreshing: false
      })
    }).catch((error) => {
      alert(error)
      this.setState({loading: false})
    })
  }


  render() { //Render view
    return (

      
      <View style={{flex: 1, height: 100, width: 100,}}>
        <View style={styles.header}><Text style={styles.sectionTest}>Area Name</Text>
        </View>
        <View style={styles.container}>
        <CustomListview
          itemList={this.data}
        />
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


