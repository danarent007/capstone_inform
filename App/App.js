
import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import LoginScreen from './Views/LoginScreen'
import SignUpScreen from './Views/SignUpScreen'
import MainScreen from './Views/MainScreen'
import NewPost from './Views/NewPost'
import ViewPost from './Views/ViewPost'
import Post from './Views/Post'
import PostFeed from './Views/PostFeed'
import AreaSelect from './Views/AreaSelect'

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
        backgroundColor: '#add8e6',
        borderBottomColor: '#add8e6',
        borderBottomWidth: 2,
        shadowOffset: {width: 0, height: 2}, 
        elevation: 5, 
        shadowColor: '#000', 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84
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
          backgroundColor: '#4682b4',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
      }
    },
    AreaSelect:
    {
      screen: AreaSelect
    }
  },
  {
    initialRouteName: 'Login',
});

const DrawerNavigator = createDrawerNavigator(
  {
    Main: MainScreen,
    AreaSelect: AreaSelect,
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

//export default createAppContainer(DrawerNavigator);
export default createAppContainer(AppNavigator);



