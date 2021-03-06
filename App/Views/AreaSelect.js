/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** AreaSelect.js
** 
AreaSelect.js is displayed on first login. It allows the user to select their
default post locations. It then saves these once the user accepts.
**
*/


import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import styles from '../Styles/styles'
import AsyncStorage from '@react-native-community/async-storage';
import { Header, Left, Right, Body, Title, Button } from 'native-base'
import { Icon } from 'react-native-elements'
import route from '../Routes/routes'

const LOC_FETCH_URL = route.LOC_FETCH_URL //"http://dulwich.dlinkddns.com/api/locations"
const LOC_SET_URL = route.LOC_SET_URL //"http://dulwich.dlinkddns.com/api/setlocations"
export default class AreaSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedAreas: [],
            loading: 'initial',
            id: ""
        };
    }

    //Saves the user's area array to the DB
    saveAreas = async () => {
        if (this.state.selectedAreas.length > 0) { //Check that an area is selected
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
                }).catch((error) => {

                    console.error(error);
                });
            this.fetchLocations()
            this.props.navigation.navigate('Main')
        }
        else {
            alert('Please select at least one area.')
        }
    }

    //Get User ID from AsyncStorage
    async getData() {
        try {
            let userData = await AsyncStorage.getItem('userID')
            return userData
        } catch (error) {
            alert(error)
        }
    }

    //Update selectedAreas state when selected item in list has changed
    onSelectedItemsChange = selectedAreas => {
        this.setState({ selectedAreas });
    };

    //Calls method to fetch all locations to display in list.
    async componentDidMount() {
        this.fetchLocations()
    }

    //Fetch all locations to display, as well as load the User's ID from AsyncStorage
    fetchLocations = async () => {
        this.setState({ loading: 'true' });
        this.setState({ id: await this.getData() })
        await fetch(LOC_FETCH_URL)
            .then((response) => response.json())
            .then((responseJson) => {
                this.locations = responseJson
                this.setState({ loading: 'false' });
            }).catch((error) => {
                alert(error)
            })
    }

    //RN Render method
    render() {
        const { selectedAreas } = this.state;
        console.log("Selected: " + JSON.stringify(selectedAreas))

        if (this.state.loading === 'initial') {
            return <Text>Intializing...</Text>;
        }
        if (this.state.loading === 'true') {
            return (
                <View style={{ flex: 1 }}>
                    <Header style={{ backgroundColor: '#4682b4' }}
                        androidStatusBarColor={'#4682b4'}>
                        <Body>
                            <Title>AreaSelect</Title>
                        </Body>
                    </Header>
                    <Text>Loading...</Text>
                </View>
            );
        }
        return (


            <View style={{ flex: 1, backgroundColor: '#3f51b5', alignContent: "center" }}>
                <Header style={{ backgroundColor: '#3f51b5',elevation: 0 }}
                    androidStatusBarColor={'#3f51b5'}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Text style={{minHeight:20}}></Text>
                            <Icon type='material-community' name={"arrow-left"} color='white' />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headingText2}>SELECT AREAS</Text>
                    </Body>
                </Header>
                <View style={{ flex: 1 }}>
                    <Text style={styles.explainText}>you can view and post in these areas</Text>
                </View>
                <View style={{ flex: 5 }}>
                    <ScrollView>
                        <MultiSelect
                            items={this.locations}
                            uniqueKey={"location_id"}
                            ref={(component) => { this.multiSelect = component }}
                            onSelectedItemsChange={this.onSelectedItemsChange}
                            selectedItems={selectedAreas}
                            fixedHeight={false}
                            selectText="    Select Areas"
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
                {<View style={{ flex: 1, bottom: 0, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                    <TouchableOpacity style={styles.btnLogin} onPress={() => this.saveAreas()}>
                        <Text style={styles.loginText}>Save Areas</Text>
                    </TouchableOpacity>
                </View>}
            </View>

        );
    }
}