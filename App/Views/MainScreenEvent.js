/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** MainScreenEvent.js
*/

import React, { Component } from 'react';
import PostFeedEvent from './PostFeedEvent'
import { Icon } from 'react-native-elements'
import styles from '../Styles/styles'
import {Dimensions} from 'react-native';
import { Header, Left, Right, Body, Picker, Button } from 'native-base'

const POST_FETCH_URL = 'http://dulwich.dlinkddns.com/api/posts' //URL for fetching posts.
const EVENT_FETCH_URL = 'http://dulwich.dlinkddns.com/api/events' //URL for fetching events.
const LOCATION_FETCH_URL = 'http://dulwich.dlinkddns.com/api/userLocations' //URL for fetching locatioms.

const HEIGHT = Dimensions.get('window').height

import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default class MainScreenEvent extends Component 
{
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Icon name="home" style={{fontSize: 24}} color={tintColor}/>
    )
  }
  constructor(props) 
  {
    super(props)
    this.state = {
      loading: true,
      data:[],
      filtered_data:[],
      locations:[],
      loading_locations: false,
      text: '',
      PickerValueHolder : '',
      user_id: '',
      refreshing: false
    };
    
  }
  

  
   async getData() 
   {
    try {
      let userData =  await AsyncStorage.getItem('userID')
      return userData
    } catch (error) {
      alert(error)
    }
  }


GetSelectedPickerItem=()=>{
  alert('ALERTTTT' + this.state.PickerValueHolder);
}


  async getLocations() 
  {
    this.setState({loading_locations:true})
    await fetch(LOCATION_FETCH_URL, //JSon Request
      {
        method: 'POST',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            id: this.state.user_id,
          })

      })
      .then(async response => await response.json())
      .then((responseJson) => {
        this.setState({locations: responseJson})
        this.makeRequest()
        return '5'
      }).catch((error) => {
        alert("wrong")
        console.error(error);
        this.setState({loading: false})
      });

  }

  componentWillUnmount()
  {
    this.focusListener.remove();
  }


  async componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.getLocations()
      
    });
    
    let id = await this.getData()
    this.state.user_id = id
     let c = await this.getLocations()
     //this.makeRequest()
   }
  
//Fetch posts for only selected locations
  makeRequest =  async() =>
  {

    console.log('Fetch Posts 1')
    this.setState({refreshing: true})
    console.log('Start refresh')
    await fetch(POST_FETCH_URL, {
      method: 'POST',
      headers: 
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
        {
           max_posts: 30,
           locations: this.state.locations,
        })
        
    })
    .then(async response => await response.json())
    .then((responseJson) => {
      //console.log(JSON.stringify(responseJson))
      console.log('End refresh')
      this.setState({
        data: this.filterData(responseJson),
        loading : false,
        refreshing: false
      }) 
    }).catch((error) => {
      alert(error)
      this.setState({
        loading: false,
        refreshing: false
      })
    })
  }


  updatePickerState = async (newState) =>
  {
    this.setState({PickerValueHolder: newState})
    await this.makeRequest()
    console.log("Picker state updated")
  }

//Filter data to match "search" query
  filterData = (unfiltered) =>
  {
    console.log("FilterData")
    output = [];
    if(this.state.PickerValueHolder == '-1' || this.state.PickerValueHolder == '')
    {
      output = unfiltered
      console.log('ALL')
    }
    else
    {
      output = []
      for(i = 0; i < unfiltered.length;i++)
      {
        if(unfiltered[i].location_id == this.state.PickerValueHolder)
        {
          output.push(unfiltered[i])
          console.log('HIT')
        }
      }
    }
    return output;
  }


  getItems = () =>
  {
    var items = [];      
    for (i=0;i<this.state.locations.length;i++) {
      items.push(<Picker.Item key ={this.state.locations[i].location_id} value={this.state.locations[i].location_id} label={this.state.locations[i].location_name} />);
    }
    return items; 


  }

  getLocName = (id) =>
  {
    for(i=0;i<this.state.locations.length;i++)
    {
      if(this.state.locations[i].location_id == id)
      {
        return(this.state.locations[i].location_name)
      }
    }
  }

  newPost = () =>
  {
    this.props.navigation.navigate('NewPost', {locs: this.state.locations, user_id: this.state.user_id, mode: 'events'})
  }

   editAreas = () =>
  {

    this.setState({PickerValueHolder: '-1'})

    this.props.navigation.navigate('AreaEdit', {preSelectedAreas: this.state.locations})
  }


  render() { //Render view
    console.log("Render")
    if(!this.state.loading)
    {
    return (
      <View style={{ flex: 1, width: '100%' }}>
        <Header style={{ backgroundColor: '#000' }}
          androidStatusBarColor={'#000'}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
          <Icon type='material-community' name={"menu"} color ={'white'} />
          </Button>
          </Left>
          <Body>
          <Text style = {styles.headingText2}>EVENTS</Text>
          </Body>
          <Right>
          <Button transparent onPress={() => this.editAreas()}>
          <Icon type='material-community' name={"map-marker-plus"} color={'white'} />
          </Button>
          </Right>
        </Header>
        
        <View>
          <Picker
          selectedValue={this.state.PickerValueHolder}
          onValueChange={(itemValue, itemIndex) => this.updatePickerState(itemValue)} >
          <Picker.Item label="All Areas" value='-1' key='-1' />
          {this.getItems()}
          </Picker>
        </View>

        <View style={styles.pfeed}>
          <ScrollView style={{maxHeight:HEIGHT - 130}}>
        <PostFeedEvent
          posts={this.state.data}
          selected = {this.state.PickerValueHolder}
          current_user_id = {this.state.user_id}
          removeClippedSubviews = {true}
          columnWrapperStyle = {{color: 'red'}}
          controller = {this}
          refreshing = {this.state.refreshing}
          />
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.creatPostFloatButton} onPress={() => this.newPost()}>
          <Icon type='material-community' name='plus' size={35} color="white" />
        </TouchableOpacity>
      </View>
      //</SafeAreaView>
    );
   }
    else
    {
      return(
        <View style={styles.container}>
        <Image source={require('../Views/logo_lx_on.png')} style={{height: 200,width:200}} />
            <Text style={styles.headingText}></Text>
            <Text style={styles.welcomeText}>Loading...</Text>
            <View style = {{paddingBottom:50}}>
            </View>
            <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )
    }
  }

  }




