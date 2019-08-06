import React from 'react';
import {Image} from 'react-native' ; 
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
    Parent 
  } from 'react-native';
  
import {Colors} from 'react-native/Libraries/NewAppScreen';
const {width: WIDTH} = Dimensions.get('window')

class LoginScreen extends React.Component {

  render() {
    return (
        
      <View style={styles.container}>
            <Text style={styles.headingText}>LOGIN</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder={"Username"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underLineColorAndroid='transparent'
                    ></TextInput>
                </View>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder={"Password"}
                secureTextEntry={true}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underLineColorAndroid='transparent'
                ></TextInput>
                </View>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>
        </View>
      
     
    
    );
  }

  
}
export default LoginScreen;

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
