import React, {Component, PureComponent} from 'react'
import Post from './Post'
import {FlatList, Text} from 'react-native'
import PostController from '../Controllers/PostController';

class PostFeed extends React.PureComponent
{
  //posts = new Array()

  constructor ()
  {
      super()
      this.state = 
      {
        posts: []
      }
    }


    _renderPost()
    {
        return <Post />
    }

    _returnKey(item)
    {
        return item.toString();
    }
    render() {
      pc = new PostController;
      //this.posts = pc.getPosts()
      
      this.setState({posts: pc.getPosts})
        return (
          <FlatList
          contentContainerStyle={{alignContent:'center'}}
            data={this.posts}
            extraData={this.state}
            keyExtractor={this._returnKey}
            renderItem={this._renderPost}
          />
        );
      }



componentDidMount = () =>
{

}


}
export default PostFeed;