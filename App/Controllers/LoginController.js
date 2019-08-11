/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** LoginController.js
*/

const LOGIN_URL = 'http://dulwich.dlinkddns.com/api/users/login' //API Login Request

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
    }

    tryLogIn2 = () => //Attempt a login
    {
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
                 alert('Incorrect Email / Password Combo.') //User / Password incorrect
             }
             else if (responseJson.loggedIn == true)
             {
                 alert('User Sucessfully Logged In.') //User logged in
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
