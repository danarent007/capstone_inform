/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** ViewPost.js
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


const {width: WIDTH} = Dimensions.get('window') //Window width for formatting

export default class ViewPost extends Component {
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
      name: this.props.navigation.getParam('name','Not Found')
    };
  }

  
  render() { //Render view
    console.log('Current user ID: ' + this.state.current_user_id)
    const edit= (this.state.current_user_id == this.state.user_id)

    if(true) //if(edit)
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
              <Button transparent onPress={() => this.editAreas()}>
                <Icon type='material' name={"report"} color='red' />
              </Button>
            </Right>
          </Header>

          <ScrollView style={styles.scroll_main}>
        <View style={styles.view_container}>
              <Text style={styles.view_headingText_dark}>{this.state.title}</Text>
              <Text style={styles.descText}>{this.state.name}</Text>
              
              <ScrollView style={styles.scroll}>

              <Image
          style={styles.image_style}
          source={{uri: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
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

