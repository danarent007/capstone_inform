/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** LoginScreen.js
** 
LoginScreen.js is self-explanitory - it's the login screen.
**
*/

import React, { Component } from 'react';
import LoginController from '../Controllers/LoginController'
import styles from '../Styles/styles'
import route from '../Routes/routes'
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Animated,
  ActivityIndicator
} from 'react-native';

const LOCATION_FETCH_URL = route.LOCATION_FETCH_URL //'http://dulwich.dlinkddns.com/api/userLocations' //URL for fetching locatioms.
const { width: WIDTH } = Dimensions.get('window') //Window width for formatting

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        email: '',
        password: '',
        loading: false,
        userId: '',
        locations: [],
        animation: new Animated.Value(0),
        submitting: false

      };
      
  }

  //Attempt a login. Fails if username and pass is incorrect. Delegates this to LoginController.js
  tryLogin = () => {
    userData =
      {
        email: this.state.email,
        password: this.state.password
      }
    if (this.validateData(userData)) {
      lc = new LoginController(userData, this) //Create new login controller to handle login
      lc.tryLogIn2() //Call method to attempt login
    }
  }

  //Syntax checking on inputs - no empty boxes or invalid emails allowed
  validateData(userData) {
    if (userData.email == "") {
      alert('EMAIL field cannot be blank.')
      return false;
    }
    if (!userData.email.includes('@') || !userData.email.includes('.')) {
      alert('EMAIL field incorrectly formatted.')
      return false;
    }
    if (userData.password == "") {
      alert('PASSWORD field cannot be blank.')
    }
    this.setState({ submitting: true })
    return true;
  }

  //Proceed with login. Called from controller class
  doLogin = async () => //User exists
  {
    await this.getLocations()
    this.setState({ submitting: false })
    if (this.state.locations == 0) {

      await this.props.navigation.navigate('AreaSelect')
    }
    else {
      this.props.navigation.navigate('Main')
    }
  }

  //Get the array of locations for a specific User's ID.
  async getLocations() {
    this.setState({ loading_locations: true })
    await fetch(LOCATION_FETCH_URL, //JSon Request
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
        this.setState({ locations: responseJson })
        return '5'
      }).catch((error) => {
        alert("wrong")
        console.error(error);
        this.setState({ loading: false })
      });
  }

  //Animation method used for logo spinning
  startAnimation = () => {
    Animated.timing(this.state.animation,
      {
        toValue: 360,
        duration: 1000
      }).start();
  }

  //Login button object for use in render method. Displays loading spinner when loading.
  LoginButton(props) {
    if (props.submitting) {
      return (
        <ActivityIndicator size="large" color="#fff" />
      )
    }
    else {
      return (
        <TouchableOpacity style={styles.btnLogin} onPress={this.tryLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      )
    }

  }

  //RN Render method.
  render() { //Render view
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <View style={{ height: 50 }}></View>
          <View style={{ flex: 17 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Roboto', fontSize: 40 }}>LOGIN</Text>
          </View>

          <View style={{ flex: 13 }}>
            <Text style={styles.explainText}>use your account</Text>
          </View>

          <View style={{ flex: 33, justifyContent: 'space-evenly' }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={"EMAIL"}
                placeholderTextColor={'#ffffff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ email: text })}
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={"PASSWORD"}
                secureTextEntry={true}
                placeholderTextColor={'#ffffff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ password: text })}
              ></TextInput>
            </View>
          </View>

          <View style={{ flex: 25, justifyContent: 'space-evenly' }}>
            <this.LoginButton submitting={this.state.submitting} />
          </View>

          <View style={{ flex: 12, backgroundColor: 'white', width: WIDTH, alignItems: "center", justifyContent: 'space-evenly' }}>
            <Text style={styles.explainTextDark}>don't have an account?</Text>
            <TouchableOpacity style={styles.btnLoginSml} onPress={() => this.props.navigation.replace('SignUp')}>
              <Text style={styles.loginTextSml}>SIGN UP</Text>
            </TouchableOpacity>
          </View>

        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <View style={{ height: 50 }}></View>
          <View style={{ flex: 17 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Roboto', fontSize: 40 }}>LOGIN</Text>
          </View>

          <View style={{ flex: 13 }}>
            <Text style={styles.explainText}>use your account</Text>
          </View>

          <View style={{ flex: 33, justifyContent: 'space-evenly' }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={"EMAIL"}
                placeholderTextColor={'#ffffff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ email: text })}
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={"PASSWORD"}
                secureTextEntry={true}
                placeholderTextColor={'#ffffff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ password: text })}
              ></TextInput>
            </View>
          </View>

          <View style={{ flex: 25, justifyContent: 'space-evenly' }}>
            <TouchableOpacity style={styles.btnLogin} onPress={this.tryLogin}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 12, backgroundColor: 'white', width: WIDTH, alignItems: "center", justifyContent: 'space-evenly' }}>
            <Text style={styles.explainTextDark}>don't have an account?</Text>
            <TouchableOpacity style={styles.btnLoginSml} onPress={() => this.props.navigation.replace('SignUp')}>
              <Text style={styles.loginTextSml}>SIGN UP</Text>
            </TouchableOpacity>
          </View>

        </View>
      );
    }
  }
}

