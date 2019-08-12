/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
*/

import Post from '../Views/Post'
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