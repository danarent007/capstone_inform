/* 
** Capstone 2019
** "Inform - Community Notice System"
** Group 5
** Sheldon Reay (RXYSHE002)
** Sabir Buxsoo (BXSMUH001)
** Daniel Vorster (VRSDAN004)
** Post.js
*/

import React from 'react';
import styles from '../Styles/styles'
import { View, Text, StyleSheet, Image } from 'react-native';
const PHOTO_URL = 'https://avatars2.githubusercontent.com/u/26744195?s=400&u=b15b3c68813c1f17313a79c49691800b61a837b4&v=4'


const CustomPost = ({ title, description, image_url }) => (
    <View style={styles.post_container}>
        <Image source={{ uri: image_url }} style={styles.post_photo} />
        <View style={styles.post_container_text}>
            <Text style={styles.post_title}>
                {'title'}
            </Text>
            <Text style={styles.post_description}>
                {description}
            </Text>
        </View>

    </View>
);


render()
{
    return(
    <View
        style = {{flex:1}}>

            <Text>
                Hello World
            </Text>




            
        </View>
    )
}

export default CustomPost;