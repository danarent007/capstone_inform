
import React from "react";
import { Button, View, Text, Platform, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { createStackNavigator, statusBar, createAppContainer, createDrawerNavigator, createSwitchNavigator, DrawerItems } from "react-navigation";
import LoginScreen from './Views/LoginScreen'
import SignUpScreen from './Views/SignUpScreen'
import MainScreen from './Views/MainScreen'
import NewPost from './Views/NewPost'
import Welcome from './Views/Welcome'
import ViewPost from './Views/ViewPost'
import AreaSelect from './Views/AreaSelect'
import AreaEdit from './Views/AreaEdit'
import AsyncStorage from '@react-native-community/async-storage';
import { tsEnumDeclaration } from "@babel/types"
import LoginController from "./Controllers/LoginController";
//import console = require("console")
const DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: MainScreen
    },
  },
  {
    contentComponent:(props) => (
      <View style={{flex:1}}>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
            <TouchableOpacity>
              <Text style={{margin: 16,fontWeight: 'bold',color: 'black'}}>Edit Areas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{margin: 16,fontWeight: 'bold',color: 'black'}}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'red'}} onPress={()=>
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
    ),
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);
// const DrawerNavigator = createDrawerNavigator(
//   {

//     Main: 
//     {
//       screen: MainScreen,
//       navigationOptions: 
//       {
//         header: null,
//         backgroundColor: '#add8e6'
//       }
//     },
//     AreaEdit:
//     {
//       screen: AreaEdit,
//       navigationOptions:
//       {
//         header:null,
//         backgroundColor: '#add8e6'

//       }
//     },


    
//   },
//   {
//     hideStatusBar: Platform.OS == 'ios' ? true : false,
//     drawerBackgroundColor: 'rgba(255,255,255,.9)',
//     overlayColor: '#6b52ae',
//     contentOptions: {
//       activeTintColor: '#fff',
//       activeBackgroundColor: '#6b52ae',
//     }
//   },
//   { contentComponent:(props) => (
//     <View style={{flex:1}}>

//             <DrawerItems {...props} />
//             <Button title="Logout" onPress={DO_SOMETHING_HERE}/>
        
//     </View>
// )
// }
// );
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





//new LoginController();
export default createAppContainer(AppNavigator);




