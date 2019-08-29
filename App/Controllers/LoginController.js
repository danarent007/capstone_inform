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
          id: ""
        };
    }

    storeToken(token)
    {
      AsyncStorage.setItem('token', token)
    }
    storeData(data)
    {
      AsyncStorage.setItem('userID', data)
      
    }



    tryLogIn2 = async () => //Attempt a login
    {
      this.loginObj.setState({loading: true})

        /*
        alert(this.email)

        if(userData.password === undefined && userData.email === undefined)
        {
          alert('Please enter login details.')
          return
        }
        else if(userData.password === undefined)
        {
          alert('Please enter password.')
          return
        }
        else if(userData.email === undefined)
        {
          alert('Please enter email.')
          return
        }
        */


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
                this.loginObj.doLogin() //Call login method in View
             }
             else
             {
                 alert('Sign-up currently unavailable. Please try again later.') //Error handling (no DB connection)
             }
         }).catch((error) => 
         {
           
          this.loginObj.setState({loading: false})
             console.error(error);
         });
    }
    
}
export default LoginController;
