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
    Animated,
    TouchableWithoutFeedback,
    ActivityIndicator
  } from 'react-native';
  
import AsyncStorage from '@react-native-community/async-storage';

const LOCATION_FETCH_URL = 'http://dulwich.dlinkddns.com/api/userLocations' //URL for fetching locatioms.
const {width: WIDTH} = Dimensions.get('window') //Window width for formatting


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

  tryLogin = () => //Attempt a login
  {
    userData =
    {
      email : this.state.email,
      password: this.state.password
    }
    if(this.validateData(userData))
    //if(true)
    {
    lc = new LoginController(userData, this) //Create new login controller to handle login
    lc.tryLogIn2() //Call method to attempt login
    }
  }


  validateData(userData)
  {
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

  doLogin = async () => //User exists
  {
    //Fetch posts
    //Check if n > 1
    //If, then login
    //Else, open location pick screen
    await this.getLocations()
    this.setState({submitting: false})
    if(this.state.locations == 0)
    {

      await this.props.navigation.navigate('AreaSelect')
    }
    else
    {
      this.props.navigation.navigate('Main')
      //this.props.navigation.navigate('MainEvents')
    }
    //console.log('Locations : ' +  JSON.stringify(this.state.locations))
  }


  async getLocations() 
  {
    this.setState({loading_locations:true})
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
        this.setState({locations: responseJson})
        return '5'
      }).catch((error) => {
        alert("wrong")
        console.error(error);
        this.setState({loading: false})
      });
  }
  startAnimation = () =>
  {
    Animated.timing(this.state.animation, 
      {
        toValue: 360,
        duration: 1000
      }).start();
  }

  LoginButton(props)
  {
    if(props.submitting)
    {
      return(
      <ActivityIndicator size="large" color="#fff" />
      )
    }
    else{
      return(
        <TouchableOpacity style={styles.btnLogin} onPress={this.tryLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      )
    }

  }

  render() { //Render view
    if(this.state.loading)
    {
      return(
      <View style={styles.container}>
      <View style={{height:50}}></View>
      <View style={{flex:17}}>
          <Text style = {{color: 'white',textAlign: 'center',fontFamily: 'Roboto',fontSize:40}}>LOGIN</Text>
      </View>

      <View style={{flex:13}}>
                <Text style = {styles.explainText}>use your account</Text>
      </View>

      <View style={{flex:33,justifyContent:'space-evenly'}}>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input}
          placeholder={"EMAIL"}
          placeholderTextColor={'#ffffff'}
          underLineColorAndroid='transparent'
          onChangeText={(text) => this.setState({email:text})}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input}
          placeholder={"PASSWORD"}
          secureTextEntry={true}
          placeholderTextColor={'#ffffff'}
          underLineColorAndroid='transparent'
          onChangeText={(text) => this.setState({password:text})}
          ></TextInput>
        </View>
      </View>

      <View style={{flex:25,justifyContent: 'space-evenly'}}>
        <this.LoginButton submitting ={this.state.submitting}/>
      </View>

      <View style={{flex:12, backgroundColor:'white',width: WIDTH,alignItems: "center",justifyContent:'space-evenly'}}>
        <Text style={styles.explainTextDark}>don't have an account?</Text>
        <TouchableOpacity style={styles.btnLoginSml} onPress={() => this.props.navigation.replace('SignUp')}>
        <Text style={styles.loginTextSml}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

        </View>
      )
    }
    else
    {
    return ( 
  <View style={styles.container}>
      <View style={{height:50}}></View>
      <View style={{flex:17}}>
          <Text style = {{color: 'white',textAlign: 'center',fontFamily: 'Roboto',fontSize:40}}>LOGIN</Text>
      </View>

      <View style={{flex:13}}>
                <Text style = {styles.explainText}>use your account</Text>
      </View>

      <View style={{flex:33,justifyContent:'space-evenly'}}>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input}
          placeholder={"EMAIL"}
          placeholderTextColor={'#ffffff'}
          underLineColorAndroid='transparent'
          onChangeText={(text) => this.setState({email:text})}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input}
          placeholder={"PASSWORD"}
          secureTextEntry={true}
          placeholderTextColor={'#ffffff'}
          underLineColorAndroid='transparent'
          onChangeText={(text) => this.setState({password:text})}
          ></TextInput>
        </View>
      </View>

      <View style={{flex:25,justifyContent: 'space-evenly'}}>
        <TouchableOpacity style={styles.btnLogin} onPress={this.tryLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex:12, backgroundColor:'white',width: WIDTH,alignItems: "center",justifyContent:'space-evenly'}}>
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

