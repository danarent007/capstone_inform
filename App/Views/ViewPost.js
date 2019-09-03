/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** ViewPost.js
*/

import React, { Component} from 'react';

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions
  } from 'react-native';
  import styles from '../Styles/styles'


const {width: WIDTH} = Dimensions.get('window') //Window width for formatting

export default class ViewPost extends Component {
  constructor(props) {
    super(props);
    //uc = new UserController()
    this.state = 
    {
      id: this.props.navigation.getParam('id', 'Not Found'),
      title: this.props.navigation.getParam('title', 'Not Found'),
      body: this.props.navigation.getParam('description', 'Not Found'),
      user_id: this.props.navigation.getParam('user_id', 'No User'),
      area: this.props.navigation.getParam('area', 'No User'),
      name: this.props.navigation.getParam('name','Not Found')
    };
    alert(this.state.user_id)
  }

  
  render() { //Render view
    console.log(this.body)
    return (
      <View style={styles.view_container}>
            <Text style={styles.view_headingText}>{this.state.title}</Text>
            <Text style={styles.descText}>{this.state.name}</Text>
            <Text style={styles.descText}>{this.state.area}</Text>
            <ScrollView style={styles.scroll}>
              <Text style={styles.bodyText}>{this.state.body}</Text>
            </ScrollView>
        </View>
    );
  }
}

