import React, {Component, PureComponent} from 'react'
import Post from './Post'
import {FlatList, Text} from 'react-native'

class PostFeed extends React.PureComponent
{
    

    _renderPost()
    {
        return <Post />
        //return <Text>Test</Text>;
    }
    _returnKey(item)
    {
        return item.toString();
    }
    render() {
        return (
          <FlatList
          contentContainerStyle={{alignContent:'center'}}
            data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
            keyExtractor={this._returnKey}
            renderItem={this._renderPost}
          />
        );
      }
}
export default PostFeed;