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

const LOGIN_URL = 'http://dulwich.dlinkddns.com/api/users/login' //API Login Request
let token = ""
class LoginController
{
    constructor(userData, ls)
    {
        this.loginObj = ls
        userData =
        {
          firstName : userData.firstName,
          lastName : userData.lastName,
          email : userData.email,
          password: userData.password, 
          id: ""
          
        }
      
    }

    async storeToken(token)
    {
      AsyncStorage.setItem('token', token)
    }
    async storeData(data)
    {
      
      AsyncStorage.setItem('userID', data)
    }

    tryLogIn2 = () => //Attempt a login
    {

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


        fetch(LOGIN_URL, //JSon Request
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
         .then((response) => response.json())
         .then((responseJson) => 
         {  
           
            
             if(responseJson.loggedIn == false) //Handle response
             {
               alert(responseJson.message) //User / Password incorrect
             }
             else if (responseJson.loggedIn == true)
             {
                 
                 this.storeToken(responseJson.authToken.toString())
                 //userData.id = responseJson.userID
                 this.storeData(responseJson.userID.toString())
                 alert(responseJson.message) //User logged in
                 this.loginObj.doLogin() //Call login method in View
             }
             else
             {
                 alert('Sign-up currently unavailable. Please try again later.') //Error handling (no DB connection)
             }
         }).catch((error) => 
         {
           
             console.error(error);
         });
    }
    
}
export default LoginController;
