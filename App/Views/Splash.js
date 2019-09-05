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
import styles from '../Styles/styles'
import {
    View,
    Text,
    Image,
    ActivityIndicator,
    YellowBox
  } from 'react-native';


  export default class Splash extends Component {
    constructor(props) {
      super(props);
      this.state = 
      {
        email: '',
        password: '',
        loading: 'initial'
      };
      YellowBox.ignoreWarnings([
        'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
      ])
    }
  
    
    componentDidMount () {
        setTimeout (() => {
            this.props.navigation.replace('Login');
        }, 2000);
    }

    render() { //Render view
      return (
        
        <View style={styles.container}>
          <Image 
          source={require('../Views/neighbourly_black.png')} 
          style={{width: 300, height: 300}} />
              <Text style={styles.headingText}>Welcome To</Text>
              <Text style={styles.welcomeText}>Neighbourly</Text>
              <View style = {{paddingBottom:50}}>
              </View>
              <ActivityIndicator size="large" color="#ffffff" />
          </View>
          
      );
      
      }
  }