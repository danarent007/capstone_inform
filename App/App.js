
import React from "react";
import { Button, View, Text, Platform } from "react-native";
import { createStackNavigator, statusBar, createAppContainer, createDrawerNavigator, createSwitchNavigator } from "react-navigation";
import LoginScreen from './Views/LoginScreen'
import SignUpScreen from './Views/SignUpScreen'
import MainScreen from './Views/MainScreen'
import NewPost from './Views/NewPost'
import Welcome from './Views/Welcome'
import ViewPost from './Views/ViewPost'
import AreaSelect from './Views/AreaSelect'
import AreaEdit from './Views/AreaEdit'
import { tsEnumDeclaration } from "@babel/types"
import LoginController from "./Controllers/LoginController";
//import console = require("console")

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
    Welcome: 
    {
      screen: Welcome,
      navigationOptions: 
      {
        header: null,
        backgroundColor: '#add8e6'
      }
    },
    AreaEdit: 
    {
      screen: AreaEdit,
      navigationOptions: 
      {
        header: null,
        backgroundColor: '#add8e6'
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
      screen: AreaSelect,
      navigationOptions: 
      {
        header: null,
        backgroundColor: '#add8e6'
      }
    },
    
  },
  {
    initialRouteName: 'Welcome',
});

const DrawerNavigator = createDrawerNavigator(
  {

    MainScreen: 
    {
      screen: MainScreen,
      navigationOptions: 
      {
        header: null,
        backgroundColor: '#add8e6'
      }
    },
   
  },
  {
    hideStatusBar: Platform.OS == 'ios' ? true : false,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    }
  }
);



//new LoginController();
export default createAppContainer(AppNavigator);




