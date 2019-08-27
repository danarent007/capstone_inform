/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** SignUpScreen.js
*/

import React, { Component } from 'react';
import SignupController from '../Controllers/SignupController'
import styles from '../Styles/styles'

import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
  } from 'react-native';

const {width: WIDTH} = Dimensions.get('window') //Window width for formatting

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  doSignup() //Method run from controller. Signs user up, initiates next screen
  {
    this.props.navigation.goBack()
  }

  trySignup = () => //Launch controller and attempt to sign up.
  {
    userData =
    {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      email : this.state.email,
      password: this.state.password
    }
    sc = new SignupController(userData, this)
    sc.attemptRegisterUser()
  }
 
  render() { //Render view
    return (
      
      <View style={styles.container}>
            <Text style={styles.headingText}>SIGN UP</Text>
            <View style={styles.inputContainer}>
                
                <TextInput 
                style={styles.input}
                placeholder={"First Name"}
                placeholderTextColor={'#fff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({firstName:text})}
                ></TextInput>
                </View>

                <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder={"Last Name"}
                placeholderTextColor={'#fff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({lastName:text})}
                ></TextInput>

                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder={"Email"}
                    placeholderTextColor={'#fff'}
                    underLineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({email:text})}
                    ></TextInput>
                </View>
            <View style={styles.inputContainer}>
                
                <TextInput 
                style={styles.input}
                placeholder={"Password"}
                secureTextEntry={true}
                placeholderTextColor={'#fff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({password:text})}
                ></TextInput>
                </View>
                
                <TouchableOpacity style={styles.btnLogin} onPress={this.trySignup}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.loginText}>Back</Text>
                </TouchableOpacity>
        </View>
    );
  }
}
export default SignUpScreen;

