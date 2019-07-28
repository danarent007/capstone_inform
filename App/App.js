
import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);



