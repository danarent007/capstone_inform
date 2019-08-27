import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
const LOC_FETCH_URL = "http://dulwich.dlinkddns.com/api/locations"
export default class AreaSelect extends Component {

    constructor(props) 
    {
        super(props)
        this.state = {
            selectedAreas: [],
            loading: 'initial'
        };
    }


    onSelectedItemsChange = selectedAreas => 
    {
        this.setState({ selectedAreas });
    };

    async componentDidMount() 
    {
        this.setState({ loading: 'true' });
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
            <View style={{ flex: 1}}>
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
            </View>
        );
    }
}