/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** LoginScreen.js
*/

import React, { Component } from 'react';
import LoginController from '../Controllers/LoginController'
import styles from '../Styles/styles'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      email: '',
      password: '',
      loading: false
    };
  }

  tryLogin = () => //Attempt a login
  {
    userData =
    {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      email : this.state.email,
      password: this.state.password,
    }
    //AsyncStorage.setItem('userData', userData)

    lc = new LoginController(userData, this) //Create new login controller to handle login
    lc.tryLogIn2() //Call method to attempt login
  }

  doLogin = () => //Log user in
  {
    this.props.navigation.navigate('Main') //Navigate to main view
  }

  render() { //Render view
    if(this.state.loading)
    {
      return(
      <View style={styles.container}>
      <Image source={require('../Views/stone.png')} />
          <Text style={styles.headingText}>loading...</Text>
              <View style={styles.inputContainer}>
                  <TextInput 
                  style={styles.input}
                  //placeholder={"Username"}
                  placeholder={"Email"}
                  placeholderTextColor={'#ffffff'}
                  underLineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({email:text})}
                  ></TextInput>
              </View>
          <View style={styles.inputContainer}>
              <TextInput 
              style={styles.input}
              //placeholder={"Password"}
              placeholder={"Password"}
              secureTextEntry={true}
              placeholderTextColor={'#ffffff'}
              underLineColorAndroid='transparent'
              onChangeText={(text) => this.setState({password:text})}
              ></TextInput>
              </View>
              <TouchableOpacity style={styles.btnLogin} onPress={ this.tryLogin}>
                  <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('SignUp')}>
                  <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
      </View>
      )
    }
    else
    {
    return (
        
      <View style={styles.container}>
        <Image source={require('../Views/stone.png')} />
            <Text style={styles.headingText}>login</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    //placeholder={"Username"}
                    placeholder={"Email"}
                    placeholderTextColor={'#ffffff'}
                    underLineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({email:text})}
                    ></TextInput>
                </View>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                //placeholder={"Password"}
                placeholder={"Password"}
                secureTextEntry={true}
                placeholderTextColor={'#ffffff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({password:text})}
                ></TextInput>
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={ this.tryLogin}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>
        </View>
    );
    }
    }
}

