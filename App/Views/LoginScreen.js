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
      loading: false,
      userId: '',
      locations: []
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

  doLogin = async () => //User exists
  {
    //Fetch posts
    //Check if n > 1
    //If, then login
    //Else, open location pick screen
    await this.getLocations()
    if(this.state.locations == 0)
    {

      await this.props.navigation.navigate('AreaSelect')
      console.log('GOOO BOYS')
    }
    else
    {
      this.props.navigation.navigate('Main')
    }
    //console.log('Locations : ' +  JSON.stringify(this.state.locations))
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
            id: this.state.userId,
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

