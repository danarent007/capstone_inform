import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import styles from '../Styles/styles'
import AsyncStorage from '@react-native-community/async-storage';
import { Header, Left, Right, Body, Title, Button } from 'native-base'
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

    saveAreas = () => {
        fetch(LOC_SET_URL, //JSon Request
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
    }
    async getData() {
        try {
            let userData = await AsyncStorage.getItem('userID')
            //alert(userData)
            return userData
        } catch (error) {
            alert(error)

        }

    }

    onSelectedItemsChange = selectedAreas => {
        this.setState({ selectedAreas });
    };

    async componentDidMount() {


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
            <View style={{ flex: 1, backgroundColor: '#4682b4',alignContent: "center" }}>
                <View style = {{minHeight: 25}}>
                </View>
                <View style={styles.selectorView}>
                <MultiSelect
                    items={this.locations}
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
                <View style={{ marginTop: 100, flex: 0.3, position: 'relative',bottom: 0,justifyContent: 'center', alignItems: 'center',}}>
                    <TouchableOpacity style={styles.btnLogin} onPress={ ()=>this.saveAreas()}>
                    <Text style={styles.loginText}>Save Areas</Text>
                </TouchableOpacity>
                </View>
            </View>

        );
    }
}