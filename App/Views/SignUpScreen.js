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
      lastName: 'NULL',
      email: '',
      password: '',
    };
  }

  doSignup() //Method run from controller. Signs user up, initiates next screen
  {
    this.props.navigation.replace('Login')
  }

  trySignup = () => //Launch controller and attempt to sign up.
  {
    userData =
    {
      firstName : this.state.firstName,
      email : this.state.email,
      password: this.state.password
    }
    if(this.validateData(userData))
    {
    sc = new SignupController(userData, this)
    sc.attemptRegisterUser()
    }
  }

  validateData(userData)
  {
    if(userData.firstName == "")
    {
      alert('EMAIL field cannot be blank.')
      return false;
    }
    if(userData.email == "")
    {
      alert('EMAIL field cannot be blank.')
      return false;
    }
    if(!userData.email.includes('@') || !userData.email.includes('.'))
    {
      alert('EMAIL field incorrectly formatted.')
      return false;
    }
    if(userData.password == "")
    {
      alert('PASSWORD field cannot be blank.')
    }
    this.setState({submitting: true})
    return true;
  }

  
 
  render() { //Render view
    return (
      
      <View style={styles.container}>
        
            <View style={{height:50}}></View>
            <View style={{flex:17}}>
                <Text style = {{color: 'white',textAlign: 'center',fontFamily: 'Roboto',fontSize:40}}>SIGN UP</Text>
            </View>

            <View style={{flex:13}}>
                <Text style = {styles.explainText}>use your email for registration</Text>
            </View>

            <View style={{flex:33,justifyContent:'space-evenly'}}>
              <View>
                <TextInput 
                style={styles.input}
                placeholder={"NAME"}
                placeholderTextColor={'#fff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({firstName:text})}
                ></TextInput>
              </View>
              <View>
                    <TextInput 
                    style={styles.input}
                    placeholder={"EMAIL"}
                    placeholderTextColor={'#fff'}
                    underLineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({email:text})}
                    ></TextInput>
              </View>
              <View>
                <TextInput 
                style={styles.input}
                placeholder={"PASSWORD"}
                secureTextEntry={true}
                placeholderTextColor={'#fff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({password:text})}
                ></TextInput>
              </View>
            </View>

            <View style={{flex:25,justifyContent: 'space-evenly'}}>
                <TouchableOpacity style={styles.btnLogin} onPress={this.trySignup}>
                <Text style={styles.loginText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:12, backgroundColor:'white',width: WIDTH,alignItems: "center",justifyContent:'space-evenly'}}>
              <Text style={styles.explainTextDark}>have an account?</Text>
              <TouchableOpacity style={styles.btnLoginSml} onPress={() => this.props.navigation.replace('Login')}>
              <Text style={styles.loginTextSml}>LOGIN</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}
export default SignUpScreen;

