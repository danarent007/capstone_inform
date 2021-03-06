/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** ViewPost.js
** 
ViewPost.js is the expanded view of the post item. It displays the image and post data.
**
*/

import React, { Component } from 'react';

import { Icon } from 'react-native-elements'

import { Header, Left, Right, Body, Picker, Button } from 'native-base'

import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import styles from '../Styles/styles'
import route from '../Routes/routes'
import { ConfirmDialog } from 'react-native-simple-dialogs';
const { width: WIDTH } = Dimensions.get('window') //Window width for formatting
const REPORT_URL = route.REPORT_URL //'http://dulwich.dlinkddns.com/api/flagPost' //API flag post url
const DELETE_URL = route.DELETE_URL //'http://dulwich.dlinkddns.com/api/posts/delete' //API delete post url


export default class ViewPost extends Component {
  constructor(props) {
    super(props);
    this.tryDeletePost = this.tryDeletePost.bind(this)
    this.state =
      {
        id: this.props.navigation.getParam('id', 'Not Found'),
        title: this.props.navigation.getParam('title', 'Not Found'),
        body: this.props.navigation.getParam('description', 'Not Found'),
        user_id: this.props.navigation.getParam('user_id', 'No User'),
        current_user_id: this.props.navigation.getParam('current_user_id', 'Not Found'),
        area: this.props.navigation.getParam('area', 'No User'),
        name: this.props.navigation.getParam('name', 'Not Found'),
        photo_uri: this.props.navigation.getParam('photo_uri', 'Not Found'),
        dialogVisible: false,
        delDialogVisible: false
      };

      
  }

  //Attempt a post report. Prompt the user
  tryReportPost = () => {
    this.setState({ dialogVisible: true })
  }



  //Report the current post. The post is flagged in the Dash
  reportPost = async () => {
    this.setState({ dialogVisible: false })
    await fetch(REPORT_URL, { //JSon message
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.state.current_user_id,
        post_id: this.state.id
      })
    }).then((response) => response.text())
      .then((responseJson) => {
      }).catch((error) => {
        console.error(error);
      });

    alert('Post Reported!')
    this.props.navigation.goBack()

  }

  //Delete the post. This is only accessible by owner
  deletePost = async () => {
    await fetch(DELETE_URL, { //JSon message
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.state.current_user_id,
        post_id: this.state.id
      })
    }).then((response) => response.text())
      .then((responseJson) => {
        //alert(JSON.stringify(responseJson))
      }).catch((error) => {
        console.error(error);
      });

    alert('Post Deleted.')
    this.props.navigation.goBack()

  }

    tryDeletePost = () =>{
    this.setState({ delDialogVisible: true })
  }



  //Delete button object. Only visible to owner of post



  render() { //Render view
    console.log('Current: ' + this.state.current_user_id + ' Post: ' + this.state.user_id)


    if(this.state.current_user_id == this.state.user_id)
    {

    return (
      <View style={{ flex: 1, width: '100%' }}>
        <Header style={{ backgroundColor: '#3f51b5', borderBottomWidth: 0, borderBottomColor: 'white' }}
          androidStatusBarColor={'#3f51b5'}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon type='material-community' name={"arrow-left"} color='white' />
            </Button>
          </Left>
          <Body>
            <Text style={styles.headingText2}>{this.state.area}</Text>
          </Body>
          <Right>
            <Button transparent onPress={() => this.tryReportPost()}>
              <Icon type='material' name={"report"} color='red' />
            </Button>
          </Right>
        </Header>

        <ConfirmDialog
          title="Report Post"
          message="Are you sure?"
          visible={this.state.dialogVisible}
          onTouchOutside={() => this.setState({ dialogVisible: false })}
          positiveButton={{
            title: "YES",
            onPress: () => this.reportPost()
          }}
          negativeButton={{
            title: "NO",
            onPress: () => this.setState({ dialogVisible: false })
          }}
        />
        <ConfirmDialog
          title="Delete Post"
          message="Are you sure?"
          visible={this.state.delDialogVisible}
          onTouchOutside={() => this.setState({ delDialogVisible: false })}
          positiveButton={{
            title: "YES",
            onPress: () => this.deletePost()
          }}
          negativeButton={{
            title: "NO",
            onPress: () => this.setState({ delDialogVisible: false })
          }}
        />

        <ScrollView style={styles.scroll_main}>
          <View style={styles.view_container}>
            <ScrollView style={styles.scroll}>
              <Image
                style={styles.image_style}
                source={{ uri: this.state.photo_uri }}
              />
              <Text style={styles.headingText2_dark}>{this.state.title}</Text>
              <Text style={styles.descText_dark}>{this.state.name}</Text>


              <Text style={styles.bodyText}>{this.state.body}</Text>
            </ScrollView>


          </View>
        </ScrollView>
        {/* <this.delButton edit={(this.state.current_user_id == this.state.user_id)} /> */}
        <TouchableOpacity style={styles.creatPostFloatButtonLight} onPress={() => this.tryDeletePost()}>
          <Icon type='material' name='delete' size={35} color="white" />
        </TouchableOpacity>
      </View>
    );
        }

        return (
          <View style={{ flex: 1, width: '100%' }}>
            <Header style={{ backgroundColor: '#3f51b5', borderBottomWidth: 0, borderBottomColor: 'white' }}
              androidStatusBarColor={'#3f51b5'}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon type='material-community' name={"arrow-left"} color='white' />
                </Button>
              </Left>
              <Body>
                <Text style={styles.headingText2}>{this.state.area}</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => this.tryReportPost()}>
                  <Icon type='material' name={"report"} color='red' />
                </Button>
              </Right>
            </Header>
    
            <ConfirmDialog
              title="Report Post"
              message="Are you sure?"
              visible={this.state.dialogVisible}
              onTouchOutside={() => this.setState({ dialogVisible: false })}
              positiveButton={{
                title: "YES",
                onPress: () => this.reportPost()
              }}
              negativeButton={{
                title: "NO",
                onPress: () => this.setState({ dialogVisible: false })
              }}
            />
            <ConfirmDialog
              title="Delete Post"
              message="Are you sure?"
              visible={this.state.delDialogVisible}
              onTouchOutside={() => this.setState({ delDialogVisible: false })}
              positiveButton={{
                title: "YES",
                onPress: () => this.deletePost()
              }}
              negativeButton={{
                title: "NO",
                onPress: () => this.setState({ delDialogVisible: false })
              }}
            />
    
            <ScrollView style={styles.scroll_main}>
              <View style={styles.view_container}>
                <ScrollView style={styles.scroll}>
                  <Image
                    style={styles.image_style}
                    source={{ uri: this.state.photo_uri }}
                  />
                  <Text style={styles.headingText2_dark}>{this.state.title}</Text>
                  <Text style={styles.descText_dark}>{this.state.name}</Text>
    
    
                  <Text style={styles.bodyText}>{this.state.body}</Text>
                </ScrollView>
    
    
              </View>
            </ScrollView>
            {/* <this.delButton edit={(this.state.current_user_id == this.state.user_id)} /> */}
          </View>
        );
            }
        



  }


