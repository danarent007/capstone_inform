/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** Welcome.js
*/

import React, { Component } from 'react';
import LoginController from '../Controllers/LoginController'
import styles from '../Styles/styles'
import {
    View,
    Text,
    Image,
    ActivityIndicator,
  } from 'react-native';


  export default class Welcome extends Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount () {
        setTimeout (() => {

            this.props.navigation.replace('Login');
            //new LoginController(props)
        }, 2000);
    }

    render() { //Render view
      return (
        
        <View style={styles.container}>
          <Image source={require('../Views/stone.png')} />
              <Text style={styles.headingText}>Welcome To</Text>
              <Text style={styles.welcomeText}>Neighbourly</Text>
              <View style = {{paddingBottom:50}}>
              </View>
              <ActivityIndicator size="large" color="#ffffff" />
          </View>
      );
      }
  } 