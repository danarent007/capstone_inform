/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** SignupController.js
*/

const REGISTER_URL = 'http://dulwich.dlinkddns.com/api/users/register' //API register request

class SignupController
{
    constructor(userData,sScreen)
    {
        this.signUpObj = sScreen //Create default sign-up screen object
        userData=
        {
            firstName : userData.firstName,
            lastName:userData.lastName,
            email:userData.email,
            password: userData.password
        }
    }

    attemptRegisterUser = () => { //Attempt to register user
       fetch(REGISTER_URL,  //JSon message
        {
         method: 'POST',
         headers: 
         {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(
             {
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: userData.password,
         })
        })
        .then((response) => response.json())
        .then((responseJson) => 
        {

            if(responseJson.registered == false) //Handle JSon response
            {
                alert('User already exists. Please sign in, or change email address.') //User exists
            }
            else if (responseJson.registered == true)
            {
                alert('User sucessfully added! Please sign in.') //User added
                this.signUpObj.doSignup() //Call signup method in view
            }
            else
            {
                alert('Sign-up currently unavailable. Please try again later.') //Erorr handling (no DB connection)
            }
        }).catch((error) => 
        {
        });
         }











}
export default SignupController