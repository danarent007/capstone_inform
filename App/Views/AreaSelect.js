import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import AsyncStorage from '@react-native-community/async-storage';
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
            alert(userData)
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
        this.setState({ id : await this.getData() })
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

        if (this.state.loading === 'initial') {
            return <Text>Intializing...</Text>;
        }
        if (this.state.loading === 'true') {
            return <Text>Loading...</Text>;
        }

        return (

            <View style={{ flex: 1 }}>
                <MultiSelect
                    hideTags
                    items={this.locations}
                    uniqueKey={"location_id"}
                    ref={(component) => { this.multiSelect = component }}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={selectedAreas}
                    fixedHeight={true}
                    selectText="Pick Areas"
                    searchInputPlaceholderText="Search Areas..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="location_name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#CCC"
                    submitButtonText="Done"
                />
                <View style={{ marginTop: 100 }}>
                    {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedAreas)}
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.saveAreas()}>
                        <Text>Button</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}