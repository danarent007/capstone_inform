import LoginScreen from '../Views/LoginScreen'

const SIGNIN_URL = 'http://dulwich.dlinkddns.com/api/users/login'

class LoginController
{
    constructor(userData,lScreen) //Constructor
    {
        this.logInObj = lScreen
        userData=
        {
            firstName : userData.firstName,
            lastName:userData.lastName,
            email:userData.email,
            password: userData.password
        }
    }


    tryLogIn2 = () => 
    {
        fetch(SIGNIN_URL, 
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
             console.debug(responseJson)
             
             //Deal with response

             
             if(responseJson.registered == false)
             {
                 //User Exists
                 alert('NOO LOGINNNNN')
             }
             else if (responseJson.registered == true)
             {
                 //User Added
                 alert('LOGINNNNNN')
                 //this.signUpObj.doSignup()
             }
             else
             {
                 //alert('Sign-up currently unavailable. Please try again later.')
             }
             
         }).catch((error) => 
         {
             console.error(error);
         });
    }
    






}
