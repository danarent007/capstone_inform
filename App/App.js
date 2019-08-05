
import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import MainScreen from './MainScreen'
import Post from './Post'
import PostFeed from './PostFeed'

const AppNavigator = createStackNavigator(
  {
    Login: 
    {
      screen: LoginScreen,
      navigationOptions: 
      {
        header: null,
      }
    },
    SignUp:
    {
      screen: SignUpScreen,
      navigationOptions:
      {
        header: null,
      }
    },
    Main: 
    {
      screen: MainScreen,
      navigationOptions: 
      {
        header: null,
      }
    }


  },
  {
    initialRouteName: 'Main',
});

export default createAppContainer(AppNavigator);



