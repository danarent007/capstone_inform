import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import MultiSelect from 'react-native-multiple-select';
import styles from '../Styles/styles'
import AsyncStorage from '@react-native-community/async-storage';
import { Header, Left, Right, Body, Title, Button } from 'native-base'

const LOC_FETCH_URL = "http://dulwich.dlinkddns.com/api/locations"
const USER_LOCATION_FETCH_URL = "http://dulwich.dlinkddns.com/api/userLocations"
const LOC_SET_URL = "http://dulwich.dlinkddns.com/api/setlocations"
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class AreaEdit extends Component {


    constructor(props) {
        super(props)
        this.state = {
            rawAreas: this.props.navigation.getParam('preSelectedAreas'),
            selectedAreas: this.props.navigation.getParam('preSelectedAreas').map(raw => raw.location_id),
            loading: 'initial',
            id: "",
            locations: []
        };
    }

    saveAreas = async () => {
        if (this.state.selectedAreas.length > 0) {
            await fetch(LOC_SET_URL, //JSon Request
                {
                    method: 'POST',
                    headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        {
                            id: this.state.id,
                            locations: this.state.selectedAreas
                        })
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    alert(JSON.stringify(responseJson))

                }).catch((error) => {

                console.error(error);
            });
            this.getLocations()
            this.props.navigation.navigate('Main')
        }
        else {
            alert('Please select at least one area.')
        }
    }

    async getId() {
        try {
            let userData = await AsyncStorage.getItem('userID')
            return userData
        } catch (error) {
            alert(error)

        }

    }

    async getLocations() 
    {
        console.log('FETCHING')
      this.setState({loading_locations:true})
      await fetch(USER_LOCATION_FETCH_URL, //JSon Request
        {
          method: 'POST',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              id: this.state.id,
            })
        })
        .then(async response => await response.json())
        .then((responseJson) => {
          this.setState({rawAreas: responseJson})
          return '5'
        }).catch((error) => {
          alert("wrong")
          console.error(error);
          this.setState({loading: false})
        });
        console.log("FETCHED")
    }

    
    onSelectedItemsChange = selectedAreas => {
        this.setState({ selectedAreas });
    };


    async componentWillMount() {
        this.setState({ loading: 'true' });
        this.setState({ id: await this.getId() })

        //Fetch all locations
        await fetch(LOC_FETCH_URL)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ locations: responseJson })
                this.setState({ loading: 'false' });
            }).catch((error) => {
                alert(error)
            })
    }

    render() {
        console.log('Selected: ' + this.state.selectedAreas)
        if (this.state.loading === 'initial') {
            return <Text>Intializing...</Text>;
        }
        if (this.state.loading === 'true') {
            return (
                <View style={{ flex: 1 }}>
                    <Text style = {styles.headingText2}>Loading...</Text>
                </View>
            );
        }
        return (
    <View style={{ flex: 1, backgroundColor: '#000', alignContent: "center" }}>
            <Header style={{ backgroundColor: '#000' }}
            androidStatusBarColor={'#000'}>
            <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon type='material-community' name={"arrow-left"} color='white' />
            </Button>
            </Left>
            <Body>
            <Text style = {styles.headerText}>Edit Areas</Text>
            </Body>
            </Header>
        <View style={{ minHeight: 25 }}>
        </View>
        <View style={{width:WIDTH,zIndex:500,flex:4}}>
            <MultiSelect
                        items={this.state.locations}
                        uniqueKey={"location_id"}
                        ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={this.state.selectedAreas}
                        fixedHeight={true}
                        //style = {{fixedHeight:20}}
                        minHeight={10}
                        selectText="Select Are as"
                        searchInputPlaceholderText="Search Areas..."
                        onChangeInput={(text) => console.log(text)}
                        tagRemoveIconColor="#ffff"
                        tagBorderColor="#ffff"
                        tagTextColor="#ffff"
                        selectedItemTextColor="#000000"
                        selectedItemIconColor="#000000"
                        itemTextColor="#000000"
                        displayKey="location_name"
                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor="#CCC"
                        submitButtonText="Done"
                        hideDropdown={true}
                        fontFamily="Roboto"
                        altFontFamily="Roboto"
                        selectedItemFontFamily="Roboto"
                        
                    />
        </View>
                <View style={{alignItems: "center",justifyContent: 'flex-end',flex:1}}>
                    <TouchableOpacity style={styles.btnLogin} onPress={() => this.saveAreas()}>
                        <Text style={styles.loginText}>Save Areas</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}