/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** Welcome.js
*/

import React, { Component } from 'react';
import styles from '../Styles/styles'
import {
    View,
    Text,
    Image,
    ActivityIndicator,
    YellowBox,
    Animated,
    TouchableWithoutFeedback,
    TouchableOpacity
  } from 'react-native';
  import { Header, Left, Right, Body, Picker, Button } from 'native-base'


  export default class Welcome extends Component {
    constructor(props) {
      super(props);
      this.state = 
      {
        email: '',
        password: '',
        loading: 'initial',
        animation: new Animated.Value(0)
      };
    }
  
    startAnimation = () =>
    {
      Animated.timing(this.state.animation, 
        {
          toValue: 360,
          duration: 1000
        }).start();
    }
    
    componentDidMount () {
    }

    render() { //Render view

      const rotateInterpolate = this.state.animation.interpolate({
        inputRange: [0, 360],
        outputRange: ["0deg", "180deg"]
      })
  
      const animatedStyles =
      {
        transform: [
          {
            rotate: rotateInterpolate
          }
        ]
      }

      return (

      <View style={styles.container}>
                  <Header style={{ backgroundColor: '#3f51b5',width: 600,shadowRadius: 0, elevation: 0}}
            androidStatusBarColor={'#3f51b5'}>
          </Header>
        <View style={{height: 20}}></View>
        <View style = {{flex:25,justifyContent: "space-between"}}>
          <TouchableWithoutFeedback onPress={()=> this.startAnimation()}>
          <Animated.View style={[animatedStyles]}>
          <Image source={require('../Views/logo_lx_on.png')} style={{width: 150, height: 150}} />
          </Animated.View>
          </TouchableWithoutFeedback>
        </View>

        <View style = {{flex:14,alignContent: 'center'}}>
          <Text style = {{color: 'white',textAlign: 'center',fontFamily: 'Roboto',fontSize:22}}>WELCOME TO</Text>
          <Text style = {{color: 'white',textAlign: 'center',fontFamily: 'Roboto',fontSize:40}}>NEIGHBOURLY</Text>
        </View>

        <View style = {{flex:46,alignContent: 'center',justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.replace('Login')}>
          <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.replace('SignUp')}>
          <Text style={styles.loginText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <View style={{height: 50}}></View>

      </View>
          
      );
      
      }
  }