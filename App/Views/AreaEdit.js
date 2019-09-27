/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** AreaEdit.js
** 
AreaEdit.js displays the user's currently selected post areas. It then allows the
user to add or remove areas. The areas are stored when the user applys the changes.
**
*/


import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import MultiSelect from 'react-native-multiple-select';
import styles from '../Styles/styles'
import AsyncStorage from '@react-native-community/async-storage';
import { Header, Left, Right, Body, Title, Button } from 'native-base'
import route from '../Routes/routes'

const LOC_FETCH_URL = route.LOC_FETCH_URL //"http://dulwich.dlinkddns.com/api/locations"
const USER_LOCATION_FETCH_URL = route.USER_LOCATION_FETCH_URL //"http://dulwich.dlinkddns.com/api/userLocations"
const LOC_SET_URL = route.LOC_SET_URL //"http://dulwich.dlinkddns.com/api/setlocations"
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

    //Save areas to the DB. These areas are linked to the User ID
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
                    alert("Areas Saved")
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
    //Get the user ID from AsyncStorage
    async getId() {
        try {
            let userData = await AsyncStorage.getItem('userID')
            return userData
        } catch (error) {
            alert(error)
        }
    }

    //Fetch User's personal 'selected' locations from the DB. These are displayed in the lists as selected items
    async getLocations() {
        console.log('FETCHING')
        this.setState({ loading_locations: true })
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
                this.setState({ rawAreas: responseJson })
                return '5'
            }).catch((error) => {
                alert("wrong")
                console.error(error);
                this.setState({ loading: false })
            });
        console.log("FETCHED")
    }

    //Update selectedAreas state once the selected area has changed
    onSelectedItemsChange = selectedAreas => {
        this.setState({ selectedAreas });
    };

    //componentWillMount initiates loading state, and fetches user ID. 
    //It then fetches all possible locations for parsing into other screens.
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

    //RN Render method
    render() {
        console.log('Selected: ' + this.state.selectedAreas)
        if (this.state.loading === 'initial') {
            return <Text>Intializing...</Text>;
        }
        if (this.state.loading === 'true') {
            return (
                <View style={{ flex: 1 }}>
                    <Text style={styles.headingText2}>Loading...</Text>
                </View>
            );
        }
        return (
            <View style={{ flex: 1, backgroundColor: '#3f51b5', alignContent: "center" }}>
                <Header style={{ backgroundColor: '#3f51b5' }}
                    androidStatusBarColor={'#3f51b5'}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon type='material-community' name={"arrow-left"} color='white' />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headingText2}>EDIT AREAS</Text>
                    </Body>
                </Header>
                <View style={{ width: WIDTH, zIndex: 500, flex: 4 }}>
                    <ScrollView style={{ height: 100, maxHeight: HEIGHT - 30 }}>
                        <MultiSelect
                            items={this.state.locations}
                            uniqueKey={"location_id"}
                            ref={(component) => { this.multiSelect = component }}
                            onSelectedItemsChange={this.onSelectedItemsChange}
                            selectedItems={this.state.selectedAreas}
                            fixedHeight={false}
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
                    </ScrollView>
                </View>
                <View style={{ alignItems: "center", justifyContent: 'flex-end', flex: 1,marginBottom:10 }}>
                    <TouchableOpacity style={styles.btnLogin} onPress={() => this.saveAreas()}>
                        <Text style={styles.loginText}>Save Areas</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}