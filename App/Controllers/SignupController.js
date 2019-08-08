import SignUpScreen from '../Views/SignUpScreen'

const REGISTER_URL = 'http://dulwich.dlinkddns.com/api/users/register'

class SignupController
{
    
    constructor(userData,sScreen) //Constructor
    {
        this.signUpObj = sScreen
        userData=
        {
            firstName : userData.firstName,
            lastName:userData.lastName,
            email:userData.email,
            password: userData.password
        }
    }

    
    //TODO:
    /*
    -Email Validation
    -Password Validation
    -Check if email exist
    */

    //Attempt user registration
    registerUser = () => {
       fetch(REGISTER_URL, 
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
        .then((response) => response.text())
        .then((responseJson) => 
        {
            //Deal with response
            alert(responseJson.text);
            //alert('HHHHHH')
            if(responseJson.text == 'sc1001')
            {
                //User Exists
                alert('User already exists. Please sign up, or change email.')
            }
            else if (responseJson.text == 'sc1002')
            {
                //User Added
                alert('User sucessfully added! Please sign in.')
                this.signUpObj.doSignup()
            }
            else
            {
                alert('Sign-up currently unavailable. Please try again later.')
            }
        }).catch((error) => 
        {
            console.error(error);
        });
        
        //return true
         }











}
export default SignupController