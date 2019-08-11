import React, { Component } from 'react';
import {Image} from 'react-native' ; 
import {createStackNavigator, createAppContainer} from 'react-navigation'
import SignupController from '../Controllers/SignupController'

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
    Colors
    
  } from 'react-native';


const {width: WIDTH} = Dimensions.get('window')

class SignUpScreen extends Component {

  constructor(props) {
    super(props);
    //uc = new UserController()

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
    //this.props.navigation.navigate('Login')
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
 
  render() {
    return (
      
      <View style={styles.container}>
            <Text style={styles.headingText}>SIGN UP</Text>
            <View style={styles.inputContainer}>
                
                <TextInput 
                style={styles.input}
                placeholder={"First Name"}
                placeholderTextColor={'#000000'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({firstName:text})}
                ></TextInput>

                </View>
                <View style={styles.inputContainer}>
                
                <TextInput 
                style={styles.input}
                placeholder={"Last Name"}
                placeholderTextColor={'#000000'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({lastName:text})}
                ></TextInput>

                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder={"Email"}
                    placeholderTextColor={'#000000'}
                    underLineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({email:text})}
                    ></TextInput>
                </View>
            <View style={styles.inputContainer}>
                
                <TextInput 
                style={styles.input}
                placeholder={"Password"}
                secureTextEntry={true}
                placeholderTextColor={'#000000'}
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

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',

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
      color: 'black',
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
        backgroundColor: '#dddddd',
        color: '#000000',
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
      
      backgroundColor: '#dddddd',
      color: '#000000',
      justifyContent: 'center',
      shadowOffset: {width: 0, height: 2}, 
      elevation: 5, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84
    },
    loginText: 
    {
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
        

    }

   
   
    
  });
