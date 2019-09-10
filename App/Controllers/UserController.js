/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** UserController.js
*/
import AsyncStorage from '@react-native-community/async-storage';

class UserController 
{
    constructor(userData, ss)
    {
        this.signUpObj = ss
        userData =
        {
          firstName : userData.firstName,
          lastName : userData.lastName,
          email : userData.email,
          password: userData.password,
          
        }
        //alert(JSON.stringify(userData, null, 4));
    }
    async storeToken(token)
    {
      AsyncStorage.setItem('token', token)
    }
    
    
    async getUsers()
    {
    let response = await fetch(`http://dulwich.dlinkddns.com/api/users`);
    let data = await response
    return data;
    }  
    

    signUpUser = () => {
        this.signUpObj.doSomething()
        //alert(JSON.stringify(userData, null, 4));
       
       
       fetch('http://dulwich.dlinkddns.com/api/users/register', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: userData.password,
    
         })
       }).then((response) => response.text())
             .then((responseJson) => {
              //this.storeToken(responseJson.token)
       // Showing response message coming from server after inserting records.
               alert(responseJson);
       
             }).catch((error) => {
               console.error(error);
             });
        
        
         }

     

    checkUser = () =>
    {
        //data = getUsers()
        //alert(JSON.stringify(data))

    }

    checkEmail = () => 
    {
        if(userData.email.includes("@") && userData.email.includes("."))
        {
        return 'true'
        }
        else
        {
        return 'false'
        }
    }

    saveInput = (userData) =>
    {
      //check here if input meets requirements
      //if input meets requirements, save and change back to login
    alert(userData)
      
      if(uc.checkEmail()=='true')
      {
      
      }
      else
      {
        alert('Email does not contain correct characters, please try again')
      }
    }

 

    loginUser = () =>
    {
      
        
        fetch('http://dulwich.dlinkddns.com/api/users/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
             
             email: userData.email,
             password: userData.password,
       
            })
          }).then((response) => response.text())
                .then((responseJson) => {
                alert(responseJson)
                

          // Showing response message coming from server after inserting records.
                
                  //alert(responseJson);
          
                }).catch((error) => {
                  console.error(error);
                }); 
      
        
    }

}
export default UserController