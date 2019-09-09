import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import styles from '../Styles/styles'
import AsyncStorage from '@react-native-community/async-storage';
import { Header, Left, Right, Body, Title, Button } from 'native-base'
import { Icon } from 'react-native-elements'

const LOC_FETCH_URL = "http://dulwich.dlinkddns.com/api/locations"
const LOC_SET_URL = "http://dulwich.dlinkddns.com/api/setlocations"
export default class AreaSelect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedAreas: [],
            loading: 'initial',
            id: ""
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
                //alert(JSON.stringify(responseJson))
                

            }).catch((error) => {

                console.error(error);
            });
            this.fetchLocations()
            this.props.navigation.navigate('Main')
        }
        else
        {
            alert('Please select at least one area.')
        }
    }


    async getData() {
        try {
            let userData = await AsyncStorage.getItem('userID')
            return userData
        } catch (error) {
            alert(error)

        }

    }

    onSelectedItemsChange = selectedAreas => {
        this.setState({ selectedAreas });
    };

    async componentDidMount() {
        this.fetchLocations()
    }

    fetchLocations = async () =>
    {
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

    render() {
        const { selectedAreas } = this.state;
        console.log("Selected: " + JSON.stringify(selectedAreas))

        if (this.state.loading === 'initial') 
        {
            return <Text>Intializing...</Text>;
        }
        if (this.state.loading === 'true') 
        {
            return (
                <View style={{flex:1}}>
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

            
            <View style={{ flex: 1, backgroundColor: '#000', alignContent: "center" }}>
            <Header style={{ backgroundColor: '#000' }}
            androidStatusBarColor={'#000'}>
            <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon type='material-community' name={"arrow-left"} color='white' />
            </Button>
            </Left>
            <Body>
            <Text style = {styles.headingText2}>SELECT AREAS</Text>
            </Body>
            </Header>
                <View style = {{minHeight: 25}}>
                </View>
                <View style={{flex:1}}>
                <Text style = {styles.explainText}>you can view and post in these areas</Text>
                </View>
                <View style={{flex:5}}>
                    <ScrollView>
                <MultiSelect
                    items={this.locations}
                    uniqueKey={"location_id"}
                    ref={(component) => { this.multiSelect = component }}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={selectedAreas}
                    fixedHeight={false}
                    selectText="Select Areas"
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
                { <View style={{flex: 1,bottom: 0,justifyContent: 'center', alignItems: 'center',}}>
                    <TouchableOpacity style={styles.btnLogin} onPress={ ()=>this.saveAreas()}>
                    <Text style={styles.loginText}>Save Areas</Text>
                </TouchableOpacity>
                </View> }
            </View>

        );
    }
}