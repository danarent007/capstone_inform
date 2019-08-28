/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** CustomListview.js
*/

import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomPost from '../Views/CustomPost';
const PHOTO_URL = 'https://avatars2.githubusercontent.com/u/26744195?s=400&u=b15b3c68813c1f17313a79c49691800b61a837b4&v=4'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

_keyExtractor = (item, index) => item.post_id.toString();

const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <CustomPost
                    title={item.title}
                    description={item.description}
                    image_url={PHOTO_URL}
                    keyExtractor={item.post_id}
                />
                
            }
                
            />

    </View>
);

export default CustomListview;