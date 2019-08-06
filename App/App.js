
import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './Views/LoginScreen'
import SignUpScreen from './Views/SignUpScreen'
import MainScreen from './Views/MainScreen'
import Post from './Views/Post'
import PostFeed from './Views/PostFeed'

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
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);



