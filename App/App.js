
import React from "react";
import { Button, View, Text, Platform, SafeAreaView, TouchableOpacity, Alert, Image } from "react-native";
import { createStackNavigator, statusBar, createAppContainer, createDrawerNavigator, createSwitchNavigator, DrawerItems } from "react-navigation";
import LoginScreen from './Views/LoginScreen'
import SignUpScreen from './Views/SignUpScreen'
import MainScreen from './Views/MainScreen'
import NewPost from './Views/NewPost'
import MainScreenEvent from './Views/MainScreenEvent'
import ViewPostEvent from './Views/ViewPostEvent'
import Welcome from './Views/Welcome'
import ViewPost from './Views/ViewPost'
import AreaSelect from './Views/AreaSelect'
import AreaEdit from './Views/AreaEdit'
import AsyncStorage from '@react-native-community/async-storage';
import { tsEnumDeclaration } from "@babel/types"
import LoginController from "./Controllers/LoginController";
//import console = require("console")


const drawerComponent = (props) => (
  <View style={{flex:1}}>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
        <Image style={{height:120, width:120, borderRadius: 60}} source={require('./Views/neighbourly_black.png')}/>
      </View>
        <DrawerItems {...props} />
        <TouchableOpacity onPress={()=>props.navigation.navigate('Main')}>
          <Text style={{margin: 16,fontWeight: 'bold',color: 'black'}}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.navigate('MainEvents')}>
          <Text style={{margin: 16,fontWeight: 'bold',color: 'black'}}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'blue'}} onPress={()=>
          Alert.alert(
            'Log out',
            'Do you want to logout?',
            [
              {text: 'Cancel', onPress: () => {return null}},
              {text: 'Confirm', onPress: () => {
                AsyncStorage.clear();
                props.navigation.navigate('Login')
              }},
            ],
            { cancelable: false }
          )  
        }>
          <Text style={{margin: 16,fontWeight: 'bold',color: 'black'}}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
  </View>
);


const DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: MainScreen
    },
  },
  {
    contentComponent: drawerComponent,
    contentOptions: 
    {
      activeTintColor : '#4682b4'
    }
  }

);

const DrawerNavigator2 = createDrawerNavigator(
  {
    MainEvents: {
      screen: MainScreenEvent
    },
  },
  {
    contentComponent: drawerComponent,
    contentOptions: 
    {
      activeTintColor : '#4682b4'
    }
  }

);

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
      screen: DrawerNavigator,
      navigationOptions: 
      {
        header: null,
      }
    },
    MainEvents: 
    {
      screen: DrawerNavigator2,
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
        header: null,
        backgroundColor: '#999'
      }

    },
    VPost:
    {
      screen: ViewPost,
      navigationOptions: 
      {
          backgroundColor: '#4682b4',
          header: null,
      }
    },
    VPostEvent:
    {
      screen: ViewPostEvent,
      navigationOptions: 
      {
          backgroundColor: '#4682b4',
          header: null,
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


export default createAppContainer(AppNavigator);




