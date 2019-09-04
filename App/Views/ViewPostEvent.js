/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** ViewPostEvent.js
*/

import React, { Component} from 'react';

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
import { ConfirmDialog } from 'react-native-simple-dialogs';
const {width: WIDTH} = Dimensions.get('window') //Window width for formatting
const REPORT_URL = 'http://dulwich.dlinkddns.com/api/flagPost' //API flag post url

export default class ViewPostEvent extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      id: this.props.navigation.getParam('id', 'Not Found'),
      title: this.props.navigation.getParam('title', 'Not Found'),
      body: this.props.navigation.getParam('description', 'Not Found'),
      user_id: this.props.navigation.getParam('user_id', 'No User'),
      current_user_id: this.props.navigation.getParam('current_user_id', 'Not Found'),
      area: this.props.navigation.getParam('area', 'No User'),
      name: this.props.navigation.getParam('name','Not Found'),
      dialogVisible: false
    };
  }

  tryReportPost = () =>
  {
    this.setState({dialogVisible: true})
  }

  reportPost =  async() =>
  {
    this.setState({dialogVisible: false})
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
  

  render() { //Render view
    console.log('Current user ID: ' + this.state.current_user_id)
    const edit= (this.state.current_user_id == this.state.user_id)

    if(true) //if(edit) TODO
    {
      return (
        <View style={{ flex: 1, width: '100%' }}>
            <Header style={{ backgroundColor: '#4682b4' }}
            androidStatusBarColor={'#4682b4'}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack}>
                <Icon type='material' name={"home"} />
              </Button>
            </Left>
            <Body>
              <Text style = {styles.view_headingText}>{this.state.area}</Text>
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
    onTouchOutside={() => this.setState({dialogVisible: false})}
    positiveButton={{
        title: "YES",
        onPress: () => this.reportPost()
    }}
    negativeButton={{
        title: "NO",
        onPress: () => this.setState({dialogVisible: false})
    }}
/>

          <ScrollView style={styles.scroll_main}>
        <View style={styles.view_container}>
              <Text style={styles.view_headingText_dark}>{this.state.title}</Text>
              <Text style={styles.descText}>{this.state.name}</Text>
              
              <ScrollView style={styles.scroll}>

              <Image
          style={styles.image_style}
          source={{uri: 'https://fsmedia.imgix.net/7a/9e/5a/86/2bcf/435a/920d/0698fcbf9820/cat-imgurjpg.jpeg?auto=compress&h=1200&w=1200&crop=edges&fit=crop'}}
          />

                <Text style={styles.bodyText}>{this.state.body}</Text>
              </ScrollView>
              <TouchableOpacity style={styles.creatPostFloatButtonLight} onPress={() => this.newPost()}>
            <Icon type='material' name='delete' size={35} color="white" />
          </TouchableOpacity>
          </View>
          </ScrollView>
          </View>
      );
    }

    return (
      null
    );
  }
}

