
import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './Views/LoginScreen'
import SignUpScreen from './Views/SignUpScreen'
import MainScreen from './Views/MainScreen'
import NewPost from './Views/NewPost'
import ViewPost from './Views/ViewPost'
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
    },
    NewPost:
    {
      screen: NewPost,
      navigationOptions:
      {
        headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#6b006b',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
      },
      headerTitleStyle: {
        fontSize: 18,
      },
      }
    },
    VPost:
    {
      screen: ViewPost,
      navigationOptions: 
      {
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#6b006b',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 2,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
      }
    }
  },
  {
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);



