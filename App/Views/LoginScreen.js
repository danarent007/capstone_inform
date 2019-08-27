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
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  

const {width: WIDTH} = Dimensions.get('window') //Window width for formatting

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      email: '',
      password: ''
    };
  }

  tryLogin = () => //Attempt a login
  {
    userData =
    {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      email : this.state.email,
      password: this.state.password
    }

    lc = new LoginController(userData, this) //Create new login controller to handle login
    lc.tryLogIn2() //Call method to attempt login
  }

  doLogin = () => //Log user in
  {
    this.props.navigation.navigate('Main') //Navigate to main view
  }

  render() { //Render view
    return (
        
      <View style={styles.container}>
        <Image source={require('../Views/stone.png')} />
            <Text style={styles.headingText}>LOGIN</Text>
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

const styles = StyleSheet.create({ //Styles
    container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4682b4',
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTest: 
    {
      fontSize: 50,
      fontWeight: '600',
      color: "purple",
      textAlign: "center",
    },
    headingText: 
    {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        opacity: 0.5,
    },
    input: 
    {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 0,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: '#add8e6',
      fontWeight: 'bold',
      color: '#ffffff',
      marginHorizontal: 25,
      opacity: 0.6
    },
    inputContainer: 
    {
        marginTop: 10,
    },
    btnLogin: 
    {
        width: WIDTH - 150,
        height: 45,
        borderRadius: 0,
        fontSize: 16,
        marginTop: 25,
        backgroundColor: '#add8e6',
        color: '#ffffff',
        justifyContent: 'center',

    },
    loginText: 
    {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: 0.6
    }
  });
