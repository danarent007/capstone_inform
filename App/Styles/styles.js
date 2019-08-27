import { StyleSheet } from "react-native"
import {
  Dimensions
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window')

export default StyleSheet.create({ //Styles
    container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4682b4',
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTest: 
    {
      fontSize: 50,
      fontWeight: '600',
      color: "purple",
      textAlign: "center",
    },
    headingText: 
    {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        opacity: 0.5,
    },
    input: 
    {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 0,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: '#add8e6',
      fontWeight: 'bold',
      color: '#ffffff',
      marginHorizontal: 25,
      opacity: 0.6
    },
    inputContainer: 
    {
        marginTop: 10,
    },
    btnLogin: 
    {
        width: WIDTH - 150,
        height: 45,
        borderRadius: 0,
        fontSize: 16,
        marginTop: 25,
        backgroundColor: '#add8e6',
        color: '#ffffff',
        justifyContent: 'center',

    },
    loginText: 
    {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: 0.6
    }
  });