/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** LoginController.js
*/
import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
const LOGIN_URL = 'http://dulwich.dlinkddns.com/api/users/login' //API Login Request
let token = ""
class LoginController
{
    constructor(userData, ls)
    {
        this.loginObj = ls
        this.state =
        {
          firstName : userData.firstName,
          lastName : userData.lastName,
          email : userData.email,
          password: userData.password, 
          user_permission: userData.user_permission,
          id: ""
        };
    }

    //Store JWT token in local storage
    storeToken(token)
    {
      AsyncStorage.setItem('token', token)
    }

    //Attempt a login. Fails if username and pass is incorrect
    tryLogIn2 = async () =>
    {
      this.loginObj.setState({loading: true})
        await fetch(LOGIN_URL, //JSon Request
         {
          method: 'POST',
          headers: 
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
        {
           email: userData.email,
           password: userData.password,
        })
         })
         .then(async response => await response.json())
         .then((responseJson) => 
         {  
          this.loginObj.setState({loading: false})
          console.log('STATE: ' + this.loginObj.state.loading)
            let loggedInData = responseJson;
             if(responseJson.loggedIn == false) //Handle response
             {
              alert('Incorrect Username / Pass') //User / Password incorrect
             }
             else if (responseJson.loggedIn == true) //Logged In
             {
                AsyncStorage.setItem('userID', JSON.stringify(loggedInData.userID))
                AsyncStorage.setItem('user_permission', JSON.stringify(loggedInData.user_permission))
                this.loginObj.setState({userId: JSON.stringify(loggedInData.userID)})
                this.loginObj.doLogin() //Call login method in View
             }
             else
             {
                 alert('Login currently unavailable. Please try again later.') //Error handling (no DB connection)
             }
         }).catch((error) => 
         {
          this.loginObj.setState({loading: false})
          alert('Unable to reach server. Please try again later.') 
         });
    }
    
}
export default LoginController;
