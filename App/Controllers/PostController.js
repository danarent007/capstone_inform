/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
*/

const POST_URL = 'http://dulwich.dlinkddns.com/api/posts'
const ADD_URL = 'http://dulwich.dlinkddns.com/api/posts/add'
let data = []

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


  publishPost = () => 
  {
    fetch(ADD_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
          
      title: postData.title,
      description: postData.body
    
     })
   }).then((response) => response.text())
         .then((responseJson) => {
    // Showing response message coming from server after inserting records.
            alert(responseJson);
          }).catch((error) => {
            console.error(error);
         });
}



//-----------------------READ

getPosts = () =>
{

    const url = 'http://dulwich.dlinkddns.com/api/posts'
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      //alert(JSON.stringify(responseJson))
      return responseJson;

    }).catch((error) => {
      alert(error)
    })
}
 
//  getPosts = () => {
//     return fetch(POST_URL).then(function(response) {
//         return response.json();
//     }).then(function(json) {
//         return json;
//     });
// }

}
export default PostController;