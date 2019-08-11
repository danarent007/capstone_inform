import Post from '../Views/Post'
import PostFeed from '../Views/PostFeed'
import React, { Component, PureComponent } from 'react'
import { FlatList, Text } from 'react-native'

const POST_URL = 'http://dulwich.dlinkddns.com/api/posts'
const ADD_URL = 'http://dulwich.dlinkddns.com/api/posts/add'

class PostController extends React.PureComponent
{
  constructor()
  {
    super()
    state =
      {
        posts: []
      }
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

  alert('trying to get data...')
  //pc = new PostController(this.postData)
  fetch(POST_URL)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson)
    return responseJson
  }).catch((error) => {
    alert(error)
  })
  
  
}
}
export default PostController;