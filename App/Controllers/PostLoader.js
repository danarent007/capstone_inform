import Post from '../Views/Post'
import PostFeed from '../Views/PostFeed'


var postData = [
    {
      id: "chair",
      post_title: 5,
      post_body: 45.99
    },
    {
        id: "chair",
        post_title: 5,
        post_body: 45.99
    },
    {
        id: "chair",
        post_title: 5,
        post_body: 45.99
    }    
  ];
var posts = new Array()



class PostLoader 
{
    loadPostData = () =>
    {
        for (i = 0; i < postData.length; i++)
        {
            posts.push(new Post(postData[i]))
        }
    }




}