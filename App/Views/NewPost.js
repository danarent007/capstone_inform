/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** 
NewPost.js is the main interface for adding post and event content into the DB.
It has two modes: news and event. These add to either the News Post feed or Events feed respectively.
**
*/

import React, { Component } from 'react';
import PostController from '../Controllers/PostController'
import styles from '../Styles/styles'
import { Icon } from 'react-native-elements'
import MultiSelect from 'react-native-multiple-select';
import ImagePicker from 'react-native-image-picker'
import { Header, Left, Right, Body, Picker, Button } from 'native-base'
import DatePicker from 'react-native-datepicker'
import { ScrollView } from 'react-native-gesture-handler';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Keyboard,
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
        user_id: this.props.navigation.getParam('user_id', 'Not Found'),
        user_perm: this.props.navigation.getParam('user_permission', 'Not Found'),
        selectedAreas: [],
        loading: 'initial',
        event: false,
        previousMode: 'news',
        mode: this.props.navigation.getParam('mode', 'news'),
        start_date: '',
        end_date: '',
        event_location: '',
        photo:
        {
          height: 500,
          width: 500
        }
      };
  }

  async setMyState(myState) {
    this.state.loading = await 'true'
    this.state.locations = await myState
    this.state.loading = await 'false'
    //alert("New function "+this.state.data)
  }

  //Set custom state to this state's locations
  async componentDidMount() {
    this.setMyState(this.state.locations)
  }

  //Create the form data including an image. This data is sent off by the post controller.
  createFormData = (photo, body) => {
    const data = new FormData();

    if (this.state.photo != null) {
      data.append("image", {
        name: photo.fileName,
        type: photo.type,
        uri:
          Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
      });
    }
    return data;
  };

  //Photo choser handler. Allows the user to select a photo, and handles response
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      console.log("PHOTO: " + JSON.stringify(response))
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  //Data input validation. Fields have to be filled, and a location has to be selected
  //This is for mode type 'news'
  validateNewsPost() {
    if (this.state.title == undefined) {
      alert('TITLE field cannot be blank.')
      return false
    }
    if (this.state.body == "") {
      alert('BODY field cannot be blank.')
      return false
    }
    if (this.state.selectedAreas[0] == undefined) {
      alert('Please select a location.')
      return false;
    }
    return true;
  }

  //Data input validation. Fields have to be filled, dates have to be added and a location has to be selected
  //This is for mode type 'events'
  validateEventPost() {
    console.log('Validate')
    if (this.state.selectedAreas[0] == undefined) {
      alert('Please select a location.')
      return false
    }
    if (this.state.title == undefined) {
      alert('Title field cannot be blank.')
      return false
    }
    if (this.state.body == "") {
      alert('Description field cannot be blank.')
      return false
    }
    if (this.state.start_date == "") {
      alert('Please select a start date.')
      return false
    }
    if (this.state.end_date == "") {
      alert('Please select an end date.')
      return false
    }
    if (this.state.event_location == "") {
      alert('Please enter an event location.')
      return false
    }
    return true;
  }

  //Create a new 'news' post. Delegate writing to controller
  createPost = () =>
  {
    postData = this.createFormData(this.state.photo, { userId: this.state.user_id })
    postData.append("title", this.state.title);
    postData.append("description", this.state.body);
    postData.append("location", this.state.selectedAreas[0]);
    postData.append("user_id", this.state.user_id);

    if (this.validateNewsPost(postData)) {
      pc = new PostController(postData) //Start a new post
      pc.publishPost();
      this.props.navigation.goBack() //Return to main screen
    }
  }

  //Create a new 'event' post. Delegate writing to controller
  createEventPost = () => 
  {
    if (this.validateEventPost) {
      postData = this.createFormData(this.state.photo, { userId: this.state.user_id })
      postData.append("event_name", this.state.title);
      postData.append("event_description", this.state.body);
      postData.append("event_location", this.state.selectedAreas[0]);
      postData.append("user_id", this.state.user_id);
      postData.append("event_start", this.state.start_date + 'Z');
      postData.append("event_end", this.state.end_date + 'Z');
      postData.append("event_address", this.state.event_location);
      pc = new PostController(postData) //Start a new post controller
      pc.publishEventPost();
      this.props.navigation.goBack() //Return to main screen
    }
  }

  //Update list of available post areas
  onSelectedItemsChange = selectedAreas => {
    this.setState({ selectedAreas });
  }

  //RN Render
  render() { //Render view
    const { selectedAreas } = this.state;
    const { photo } = this.state

    if (this.state.loading === 'true') {

      return (
        <View style={{ flex: 1 }}>
          <Text>Loading...</Text>
        </View>
      );
    }

    if (this.state.mode == 'news') {
      return (

        <View style={styles.container}>
          <TouchableOpacity style={styles.creatPostFloatButton} onPress={() => this.createPost()}>
            <Icon type='material' name='done' size={35} color="white" />
          </TouchableOpacity>

          <Header style={{ backgroundColor: '#000', width: WIDTH }}
            androidStatusBarColor={'#000'}>
            <Left>
              <Button transparent onPress={() => alert('TODO')}>
                <Icon type='material-community' name={"home"} color={'white'} />
              </Button>
            </Left>
            <Body>

              <Text style={styles.headingText2}>NEWS POST</Text>
            </Body>
            <Right>
              <Button transparent onPress={() => alert('TODO')}>
                <Icon type='material-community' name={"back"} color={'white'} />
              </Button>
            </Right>
          </Header>

          <View style={{ flex: 5 }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={1}
                placeholder={"TITLE"}
                placeholderTextColor={'#fff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ title: text })}
              ></TextInput>
            </View>

            <View style={styles.inputContainerLarge}>
              <TextInput
                style={styles.inputLarge}
                placeholder={"BODY"}
                //fixedHeight={true}
                //height={170}
                multiline={true}
                numberOfLines={14}
                //height={120}
                placeholderTextColor={'#ffffff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ body: text })}
              ></TextInput>
            </View>
          </View>

          <View style={{ height: 10 }}></View>
          <View style={{ flex: 1, justifyContent: 'center', borderBottomStartRadius: 0, backgroundColor: '', paddingBottom: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Roboto', fontSize: 30 }}>You are posting to:</Text>
          </View>
          <View style={{ width: WIDTH - 55, flex: 3 }}>
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

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '' }}>
              <View style={{ paddingRight: 0 }}>
                <TouchableOpacity onPress={this.handleChoosePhoto}>
                  <Text style={styles.explainText}>Choose Photo</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
              {photo && (
                <Image
                  source={{ uri: photo.uri }}
                  style={{ width: 80, height: 80 }}
                />
              )}
            </View>

          </View>
        </View>
      );
    }

    if (this.state.mode == 'events') {
      return (

        <View style={styles.container}>
          <TouchableOpacity style={styles.creatPostFloatButton} onPress={() => this.createEventPost()}>
            <Icon type='material' name='done' size={35} color="white" />
          </TouchableOpacity>

          <Header style={{ backgroundColor: '#000', width: WIDTH }}
            androidStatusBarColor={'#000'}>
            <Left>
              <Button transparent onPress={() => alert('TODO')}>
                <Icon type='material-community' name={"home"} color={'white'} />
              </Button>
            </Left>
            <Body>


              <Text style={styles.headingText2}>EVENT POST</Text>
            </Body>
            <Right>
            </Right>
          </Header>


          <ScrollView style={{ width: WIDTH - 55, zIndex: 5, marginTop: 0, zIndex: 50, minHeight: 10, maxHeight: 400 }}>
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
          </ScrollView>


          <View style={{ flex: 7 }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={2}
                placeholder={"title"}
                placeholderTextColor={'#fff'}
                //defaultValue={this.state.title}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ title: text })}
              ></TextInput>
            </View>

            <View style={styles.inputContainerLarge}>
              <TextInput
                style={styles.inputLarge}
                placeholder={"description"}
                //fixedHeight={true}
                //height={170}
                //defaultValue={this.state.body}
                multiline={true}
                numberOfLines={9}
                //height={120}
                placeholderTextColor={'#ffffff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ body: text })}
              ></TextInput>
            </View>

            <View style={styles.inputContainer2}>
              <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={2}
                placeholder={"location"}
                placeholderTextColor={'#fff'}
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ event_location: text })}
              ></TextInput>
            </View>
          </View>

          <View style={{ height: 10 }}></View>

          <View style={{ flex: 1, flexDirection: 'row', width: WIDTH - 55 }}>
            <View style={{ flex: 1, alignItems: 'flex-start' }}>
              <Text style={styles.explainText}>Event Start</Text>
            </View>
            <View style={{ flex: 2, alignItems: 'flex-end', paddingLeft: 20 }}>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.start_date}
                mode="datetime"
                placeholder="select date"
                format="YYYY-MM-DDTHH:mm:ss.000"
                minDate="2019-05-01"
                maxDate="2025-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ start_date: date }) }}
              />
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', width: WIDTH - 55 }}>
            <View style={{ flex: 1, alignItems: 'flex-start' }}>
              <Text style={styles.explainText}>Event End</Text>
            </View>
            <View style={{ flex: 2, alignItems: 'flex-end', paddingLeft: 20 }}>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.end_date}
                mode="datetime"
                placeholder="select date"
                format="YYYY-MM-DDTHH:mm:ss.000"
                minDate="2019-05-01"
                maxDate="2025-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ end_date: date }) }}
              />
            </View>
          </View>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '' }}>
            <View style={{ paddingRight: 0 }}>
              <TouchableOpacity onPress={this.handleChoosePhoto}>
                {console.log('End date: ' + this.state.end_date)}
                <Text style={styles.explainText}>Choose Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            {photo && (
              <Image
                source={{ uri: photo.uri }}
                style={{ width: 80, height: 80 }}
              />
            )}
          </View>

        </View>
      );
    }
  }
}
