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
import { Header, Left, Right, Body, Picker, Button } from 'native-base'
//import DatePicker from 'react-native-datepicker'



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
import { ScrollView } from 'react-native-gesture-handler';

const { width: WIDTH } = Dimensions.get('window') //Window width for formatting

export default class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state =
      {
        title: 'TITLE',
        body: 'BODY',
        controller: this.props.navigation.getParam('controller', 'Not Found'),
        locations: this.props.navigation.getParam('locs', 'Not Found'),
        user_id: this.props.navigation.getParam('user_id','Not Found'),
        selectedAreas: [],
        loading: 'initial',
        photo: null,
        event: false,
        previousMode: 'news',
        mode: this.props.navigation.getParam('mode','news'),
        date: '',
        time: ''
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

      data.append("image", {
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
    postData = this.createFormData(this.state.photo, { userId: this.state.user_id })
    // postData.append("postData",{
    //   title: this.state.title,
    //   body: this.state.body,
    //   location: this.state.selectedAreas,
    //   user_id: this.state.user_id,
    // });
    postData.append("title",this.state.title);
    postData.append("description",this.state.body);
    postData.append("location",this.state.selectedAreas[0]);
    postData.append("user_id",this.state.user_id);
    
    
      //alert("PD: "+JSON.stringify(postData))
    pc = new PostController(postData) //Start a new post controller
   //pc.publishPost() //Publish post
     pc.uploadPhoto();
    

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

    if(this.state.mode == 'news')
    {
    return (
      
      <View style={styles.container}>
        <TouchableOpacity style={styles.creatPostFloatButton} onPress={() => this.createPost()}>
        <Icon type='material' name='done' size={35} color="white" />
        </TouchableOpacity>
      
        <Header style={{ backgroundColor: '#000' , width: WIDTH}}
          androidStatusBarColor={'#000'}>
          <Left>
          <Button transparent onPress={() => alert('TODO')}>
          <Icon type='material-community' name={"home"} color ={'white'} />
          </Button>
          </Left>
          <Body>
          
          <Text style = {styles.headingText2}>NEWS POST</Text>
          </Body>
          <Right>
          <Button transparent onPress={() => alert('TODO')}>
          <Icon type='material-community' name={"back"} color={'white'} />
          </Button>
          </Right>
        </Header>

      <View style={{flex:5}}>
          <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={2}
            placeholder={"TITLE"}
            placeholderTextColor={'#fff'}
            underLineColorAndroid='transparent'
            defaultValue={this.state.title}
            onChangeText={(text) => this.setState({title:text})}
          ></TextInput>
          </View>

          <View style={styles.inputContainerLarge}>
          <TextInput
            style={styles.inputLarge}
            placeholder={"BODY"}
            //fixedHeight={true}
            //height={170}
            defaultValue={this.state.body}
            multiline={true}
            numberOfLines={10}
            //height={120}
            placeholderTextColor={'#ffffff'}
            underLineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ body: text })}
          ></TextInput>
          </View>
      </View>

      <View style={{height: 10}}></View>
      <View style={{flex:1, justifyContent: 'center',  borderBottomStartRadius: 0,backgroundColor: '', paddingBottom:10}}>
        <Text style={{color: 'white',textAlign: 'center',fontFamily: 'Roboto',fontSize:30}}>You are posting to:</Text>
      </View>
      <View style={{width: WIDTH-55,flex:3}}>
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

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: ''}}>
        <View style = {{paddingRight: 0}}>
        <TouchableOpacity onPress={this.handleChoosePhoto}>
          <Text style={styles.explainText}>Choose Photo</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style = {{flex:2, justifyContent: 'center',alignItems:'center'}}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 80, height: 80}}
          />
        )}
        </View>

      </View>
      </View>
    );
        }

        if(this.state.mode == 'events')
    {
    return (
      
      <View style={styles.container}>
        <TouchableOpacity style={styles.creatPostFloatButton} onPress={() => this.createPost()}>
        <Icon type='material' name='done' size={35} color="white" />
        </TouchableOpacity>
      


        <Header style={{ backgroundColor: '#000' , width: WIDTH}}
          androidStatusBarColor={'#000'}>
          <Left>
          <Button transparent onPress={() => alert('TODO')}>
          <Icon type='material-community' name={"home"} color ={'white'} />
          </Button>
          </Left>
          <Body>
          
          <Text style = {styles.headingText2}>EVENT POST</Text>
          </Body>
          <Right>
          <Button transparent onPress={() => alert('TODO')}>
          <Icon type='material-community' name={"back"} color={'white'} />
          </Button>
          </Right>
        </Header>

      <ScrollView style={{width: WIDTH-55,zIndex:5,marginTop:10,zIndex:50, minHeight: 0, maxHeight:400}}>
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



      <View style={{flex:9,backgroundColor:''}}>
          <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={2}
            placeholder={"TITLE"}
            placeholderTextColor={'#fff'}
            defaultValue={this.state.title}
            underLineColorAndroid='transparent'
            onChangeText={(text) => this.setState({title:text})}
          ></TextInput>
          </View>

          <View style={styles.inputContainerLarge}>
          <TextInput
            style={styles.inputLarge}
            placeholder={"BODY"}
            //fixedHeight={true}
            //height={170}
            defaultValue={this.state.body}
            multiline={true}
            numberOfLines={10}
            //height={120}
            placeholderTextColor={'#ffffff'}
            underLineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ body: text })}
          ></TextInput>
          </View>
      </View>

      <View style={{height: 10}}></View>
<View style={{flex:2}}>
        {/* <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="event date"
        format="YYYY-MM-DD"
        minDate="2019-05-01"
        maxDate="2022-12-01"
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
        onDateChange={(date) => {this.setState({date: date})}}
      /> */}
        </View>

        <View style={{flex:2}}>
        {/* <DatePicker
        style={{width: 200}}
        date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({time: time});}}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            backgroundColor: 'white'
          }
          // ... You can check the source to find the other keys.
        }}
      /> */}
        </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: ''}}>
        <View style = {{paddingRight: 0}}>
        <TouchableOpacity onPress={this.handleChoosePhoto}>
          <Text style={styles.explainText}>Choose Photo</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style = {{flex:2, justifyContent: 'center',alignItems:'center'}}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 80, height: 80}}
          />
        )}
        </View>

      </View>
    );
        }
  }
}
