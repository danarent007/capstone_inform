import React, { Component } from 'react';
import {Image} from 'react-native' 
import LoginController from '../Controllers/LoginController'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Parent,
    Colors 
  } from 'react-native';
  

const {width: WIDTH} = Dimensions.get('window')

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    //uc = new UserController()

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

    lc = new LoginController(userData, this)
    lc.tryLogIn2()
    
  }

  doLogin = () => //Log user in
  {
    this.props.navigation.navigate('Main')
  }



  render() {
    return (
        
      <View style={styles.container}>
        <Image source={require('../Views/stone.png')} />
            <Text style={styles.headingText}>LOGIN</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    //placeholder={"Username"}
                    placeholder={"Email"}
                    placeholderTextColor={'#35cd96'}
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
                placeholderTextColor={'#35cd96'}
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


const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35cd96',

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
      backgroundColor: '#ffffff',
      color: '#35cd96',
      marginHorizontal: 25
    },
    inputContainer: 
    {
        marginTop: 10
    },
    btnLogin: 
    {
        width: WIDTH - 150,
        height: 45,
        borderRadius: 0,
        fontSize: 16,
        marginTop: 25,
        
        backgroundColor: '#ffffff',
        color: '#35cd96',
        justifyContent: 'center',
        shadowOffset: {width: 0, height: 2}, 
        elevation: 5, 
        shadowColor: '#000', 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84
    },
    loginText: 
    {
        color: '#35cd96',
        fontSize: 20,
        textAlign: 'center',
        

    }

   
   
    
  });
