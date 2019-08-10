import Post from '../Views/Post'
import PostFeed from '../Views/PostFeed'

class PostController 
{
    constructor(postData)
    {
        postData =
        {
            title: postData.title,
            body: postData.body
        }
 //TODO:
    /*
    -Post field verification ie, no empty fields
    -Display if post has been added successfully
    -Refresh post feed
    */
    

    

}

publishPost = () => 
{
       fetch('http://dulwich.dlinkddns.com/api/posts/add', {
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



}


export default PostController;