/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** NewPost.js
*/

import React, { Component } from 'react';
import PostController from '../Controllers/PostController'
import styles from '../Styles/styles'
import AsyncStorage from '@react-native-community/async-storage';
import MultiSelect from 'react-native-multiple-select';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Picker
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window') //Window width for formatting

export default class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state =
      {
        title: '',
        body: '',
        controller: this.props.navigation.getParam('controller', 'Not Found'),
        selectedAreas: [],
        loading: 'initial',
      };

  }
  async setMyState(myState)
  {
    this.state.loading = await 'true'
    this.state.data = await myState
    this.state.loading = await 'false'
    //alert("New function "+this.state.data)
  }
  async componentDidMount() {
    let a = await AsyncStorage.getItem('userLocations');
    
    this.setMyState(a)
  
  }

  createPost = () => //Create a new post
  {
    postData =
      {
        title: this.state.title,
        body: this.state.body,
      }
    pc = new PostController(postData) //Start a new post controller
    pc.publishPost() //Publish post

    //TODO:
    /*
    -Post field verification ie, no empty fields
    -Display if post has been added successfully
    -Refresh post feed
    */

    this.props.navigation.goBack() //Return to main screen
  }

  onSelectedItemsChange = selectedAreas => {
    this.setState({ selectedAreas });
  }

  render() { //Render view
    const { selectedAreas } = this.state;


  if (this.state.loading === 'true') {

      return (
          <View style={{flex:1}}>
          <Text>Loading...</Text>
          </View>
          );
  }

    alert("alert: "+this.state.data)
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>NEW POST</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Title"}
            height={80}
            placeholderTextColor={'#ffffff'}
            underLineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ title: text })}
          ></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Body"}
            height={120}
            placeholderTextColor={'#ffffff'}
            underLineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ body: text })}
          ></TextInput>
        </View>
        <View style={{flex:1, width: WIDTH}}>
        <MultiSelect
          hideTags
          items={this.data}
          uniqueKey={"location_id"}
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedAreas}
          fixedHeight={true}
          selectText="Pick Areas"
          searchInputPlaceholderText="Search Areas..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#D82121"
          tagBorderColor="#000000"
          tagTextColor="#000000"
          selectedItemTextColor="#000000"
          selectedItemIconColor="#000000"
          itemTextColor="#000000"
          displayKey="location_name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Done"
        />
        </View>
        <View style={{ marginTop: 100 }}>
          {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedAreas)}
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={this.createPost}>
          <Text style={styles.loginText}>Publish Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
