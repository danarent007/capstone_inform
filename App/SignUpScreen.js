import React, { Component } from 'react';
import {Image} from 'react-native' ; 
import {createStackNavigator, createAppContainer} from 'react-navigation'


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    TextInput,
    TouchableOpacity
    
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';


  


const {width: WIDTH} = Dimensions.get('window')

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);

    this.state = 
    {
      loggedIn: 'false',
      email: '',
      password: '',
    };
    this.userData =
    {
      firstName : "Ben",
      lastName : "Dover",
      email : this.state.email,
      password: this.state.password
    }

  }

  checkEmail = () => 
  {
    if(this.state.email.includes("@") && this.state.email.includes("."))
    {
      return 'true'
    }
    else
    {
      return 'false'
    }
  }
   async getUser()
   {
 
  let response = await fetch(`http://dulwich.dlinkddns.com/api/users`);
  let data = await response.text()
 
  alert(data);
   }
 

  signUpUser = () =>{

 
    const { email }  = this.state ;
    const { password }  = this.state ;
    
    
   
   fetch('http://dulwich.dlinkddns.com/api/users', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
      
      firstName: 'TestFirstName',
      lastName: 'TestLastName',
      email: 'test@email.com',
      password: 'testPass',

   
   
     })
   
   }).then((response) => response.text())
         .then((responseJson) => {
   
   // Showing response message coming from server after inserting records.
           alert(responseJson);
   
         }).catch((error) => {
           console.error(error);
         });
    
    
     }

  saveInput = () =>
  {
    //check here if input meets requirements
    //if input meets requirements, save and change back to login
     
    
    if(this.checkEmail()=='true')
    {
    this.props.navigation.navigate('Login')
    this.getUser()
    this.signUpUser()
    alert(JSON.stringify(this.userData))
    alert('Data Saved Successfully! Please Login')
    }
    else
    {
      alert('Email does not contain correct characters, please try again')
    }
  }

  

  render() {
    return (
      
      <View style={styles.container}>
            <Text style={styles.headingText}>SIGN UP</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder={"Email"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underLineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({email:text})}
                    ></TextInput>
                </View>
            <View style={styles.inputContainer}>
                
                <TextInput 
                style={styles.input}
                placeholder={"Password"}
                secureTextEntry={true}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({password:text})}
                ></TextInput>

                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={this.saveInput}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>
        </View>
      
     
    
    );
  }

  
}
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8B008B',

    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
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
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        opacity: 0.5,
        
    },
    input: 
    {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
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
        borderRadius: 25,
        fontSize: 16,
        marginTop: 25,
        
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        justifyContent: 'center',
    },
    loginText: 
    {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 20,
        textAlign: 'center',
        

    }

   
   
    
  });
