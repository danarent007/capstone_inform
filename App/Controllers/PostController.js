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
const UPLOAD_URL = 'http://dulwich.dlinkddns.com/api/upload' //
const EVENT_UPLOAD_URL = 'http://dulwich.dlinkddns.com/api/events/add'
class PostController
{
  constructor()
  {
    data = []
  }



  publishPost = () => //Publish post to DB
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

  publishEventPost = () => //Publish post to DB
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


//   publishPost = () => //Publish post to DB
//   {
//     console.log("POST DATA: " + JSON.stringify(postData))
//     fetch(ADD_URL, { //JSon message
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//        'Content-Type': 'application/json',
//      },
//      body: JSON.stringify({
//       title: postData.title,
//       description: postData.body,
//       locationid: postData.location,
//       // photo: postData.photo
//      })
//    }).then((response) => response.text())
//          .then((responseJson) => {
//            alert(responseJson )
//           }).catch((error) => {
//             console.error(error);
//          });
// }



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