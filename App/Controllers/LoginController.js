import LoginScreen from '../Views/LoginScreen'

const LOGIN_URL = 'http://dulwich.dlinkddns.com/api/users/login'

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
        }
        //alert(JSON.stringify(userData, null, 4));
    }


    tryLogIn2 = () => 
    {
        
        fetch(LOGIN_URL, 
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
             if(responseJson.loggedIn == false)
             {
                 //User does not exist
                 alert('Incorrect Email / Password Combo.')
             }
             else if (responseJson.loggedIn == true)
             {
                 //User Added
                 alert('User Sucessfully Logged In.')
                 this.loginObj.doLogin()
             }
             else
             {
                 alert('Sign-up currently unavailable. Please try again later.')
             }
             
         }).catch((error) => 
         {
             console.error(error);
         });
    }
    
}
export default LoginController;
