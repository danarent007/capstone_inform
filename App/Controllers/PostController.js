/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** PostController.js
*/
import route from '../Routes/routes'

const POST_URL = route.POST_URL //'http://dulwich.dlinkddns.com/api/posts' //API post get url
const ADD_URL = route.ADD_URL //'http://dulwich.dlinkddns.com/api/posts/add' //API post add url
const UPLOAD_URL = route.UPLOAD_URL //'http://dulwich.dlinkddns.com/api/upload' //Upload url
const EVENT_UPLOAD_URL = route.EVENT_UPLOAD_URL //'http://dulwich.dlinkddns.com/api/events/add'
class PostController
{
  constructor()
  {
    data = []
  }


  //Publish the news post to the API/DB using JSON messages
  publishPost = () => 
  {
    alert("UPLOAD DATA: " + JSON.stringify(postData))
    fetch(UPLOAD_URL, { //JSon message
      method: 'POST',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'multipart/form-data',
     },
      body: postData
   }).then((response) => response.text())
         .then((responseJson) => {
          alert('Post added.')
          }).catch((error) => {
            console.error(error);
         });
  }

  //Publish the event post to the API/DB using JSON messages
  publishEventPost = () => 
  {
    console.log("UPLOAD DATA: " + JSON.stringify(postData))
    fetch(EVENT_UPLOAD_URL, { //JSon message
      method: 'POST',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'multipart/form-data',
     },
      body: postData
   }).then((response) => response.text())
         .then((responseJson) => {
           //alert(JSON.stringify(responseJson))
           alert('Event awaiting moderation. It will display shortly.')
          }).catch((error) => {
            console.error(error);
         });
  }

//Fetch posts from DB. UNUSED
getPosts = () => 
{
    const url = POST_URL
    return fetch(url) //JSon request
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    }).catch((error) => {
      alert(error)
    })
}
}
export default PostController;