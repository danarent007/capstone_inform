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
import { Icon } from 'react-native-elements'
import MultiSelect from 'react-native-multiple-select';
import ImagePicker from 'react-native-image-picker'
import { ScrollView } from 'react-native-gesture-handler';


import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Picker,
  TextArea,
  Button,
  Image,
  Platform
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
        locations: this.props.navigation.getParam('locs', 'Not Found'),
        user_id: this.props.navigation.getParam('user_id','Not Found'),
        selectedAreas: [],
        loading: 'initial',
        photo: null,
        event: false
      };
  }

  async setMyState(myState)
  {
    this.state.loading = await 'true'
    this.state.locations = await myState
    this.state.loading = await 'false'
    //alert("New function "+this.state.data)
  }

  async componentDidMount() {
   // let a = await AsyncStorage.getItem('userLocations');
    //alert(JSON.stringify(a))
    this.setMyState(this.state.locations)
  
  }

  createFormData = (photo, body) => {
    const data = new FormData();
    data.append("file", {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")

      
    });
  
    // Object.keys(body).forEach(key => {
    //   data.append(key, body[key]);
    // });
  
    return data;
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  createPost = () => //Create a new post
  {
    console.log('Creating Post')
    postData =
      {
        title: this.state.title,
        body: this.state.body,
        location: this.state.selectedAreas,
        user_id: this.state.user_id,
        photo: this.createFormData(this.state.photo, { userId: this.state.user_id })
      }
    pc = new PostController(postData) //Start a new post controller
   // pc.publishPost() //Publish post
    pc.uploadPhoto();
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
    const { photo } = this.state

  if (this.state.loading === 'true') 
  {

      return (
          <View style={{flex:1}}>
          <Text>Loading...</Text>
          </View>
          );
  }

    
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.creatPostFloatButton} onPress={() => this.createPost()}>
        <Icon type='material' name='done' size={35} color="white" />
        </TouchableOpacity>

      <View style={{flex:1, backgroundColor:''}}>
        <Text style={styles.headingText}>NEW POST</Text>
      </View>

      <View style={{flex:5, backgroundColor: ''}}>
          <View style={{flex:1}}>
          <TextInput
            style={styles.textAreaInput}
            multiline={true}
            numberOfLines={2}
            placeholder={"Title"}
            //height={40}
            
            placeholderTextColor={'#ffffff'}
            underLineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ title: text })}
          ></TextInput>
          </View>

          <View style={{flex:3, paddingTop: 10}}>
          <TextInput
            style={styles.textAreaInput}
            placeholder={"Body"}
            multiline={true}
            numberOfLines={10}
            //height={120}
            placeholderTextColor={'#ffffff'}
            underLineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ body: text })}
          ></TextInput>
          </View>
      </View>

      <View style={{width: WIDTH-55,flex:1,backgroundColor: ''}}>
        <MultiSelect
          hideTags
          items={this.state.locations}
          uniqueKey={"location_id"}
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedAreas}
          fixedHeight={false}
          selectText="Pick Areas"
          searchInputPlaceholderText="Search Areas..."
          onChangeInput={(text) => console.log(text)}
          single={true}
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

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '',flexDirection: "row"}}>
        
        <View style = {{paddingRight: 0}}>
        <TouchableOpacity onPress={this.handleChoosePhoto}>
          <Text style={{fontSize:20, backgroundColor: '#add8e6'}}>Choose Photo</Text>
        </TouchableOpacity>
        </View>
        <View>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 80, height: 80, paddingLeft:10 }}
          />
        )}

        </View>
      </View>
      
      <View style={{flex:1, justifyContent: 'center',  borderBottomStartRadius: 0,
        backgroundColor: ''}}>
        <Text style={styles.postText}>You are posting to:</Text>
      </View>

      <View style={{flex: 1,backgroundColor:''}}>
        <View style={{flex:0.2, justifyContent: 'center'}}>
          {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedAreas)}
        </View>
      </View>
      
      </View>
    );
  }
}
