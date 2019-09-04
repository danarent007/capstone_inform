/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** PostController.js
*/

const POST_URL = 'http://dulwich.dlinkddns.com/api/posts' //API post get url
const ADD_URL = 'http://dulwich.dlinkddns.com/api/posts/add' //API post add url
const UPLOAD_URL = 'http://dulwich.dlinkddns.com/api/upload'
class PostController
{
  constructor()
  {
    data = []
  }

 //TODO:
    /*
    -Post field verification ie, no empty fields
    -Display if post has been added successfully
    -Refresh post feed
    */
    //---------------------------CREATE

  uploadPhoto = () => //Publish post to DB
  {
    alert("UPLOAD DATA: " + JSON.stringify(postData.photo))
    fetch(UPLOAD_URL, { //JSon message
      method: 'POST',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'multipart/form-data',
     },
      body: postData.photo
   }).then((response) => response.text())
         .then((responseJson) => {
           alert(responseJson)
          }).catch((error) => {
            console.error(error);
         });
}


  publishPost = () => //Publish post to DB
  {
    console.log("POST DATA: " + JSON.stringify(postData))
    fetch(ADD_URL, { //JSon message
      method: 'POST',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'multipart/form-data, application/json',
     },
     body: {
      title: postData.title,
      description: postData.body,
      locationid: postData.location,
      photo: postData.photo
     }
   }).then((response) => response.text())
         .then((responseJson) => {
           alert(responseJson )
          }).catch((error) => {
            console.error(error);
         });
}



getPosts = () => //Fetch posts from DB
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