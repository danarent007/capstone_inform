import { StyleSheet } from "react-native"
import {
  Dimensions
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const {width: WIDTH} = Dimensions.get('window')
const BG_DARK = '#4682b4'
const BG_LIGHT = '#add8e6'
const TEXT_LIGHT = '#ffffff'
export default StyleSheet.create({ //Styles
    container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BG_DARK,
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
        color: TEXT_LIGHT,
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
      backgroundColor: BG_LIGHT,
      fontWeight: 'bold',
      color: TEXT_LIGHT,
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
      backgroundColor: BG_LIGHT,
      color: TEXT_LIGHT,
      justifyContent: 'center',
      shadowOffset: {width: 0, height: 2}, 
      elevation: 5, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84
    },
    loginText: 
    {
        color: TEXT_LIGHT,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: 0.6
    },
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTest: 
    {
      fontSize: 30,
      fontWeight: '600',
      color: "white",
      textAlign: "center",
      width: 200,
      alignSelf: 'center'
    },
    header: 
    {
      width: WIDTH,
      height: 45,
      backgroundColor: BG_DARK,
      flexDirection: 'column',
      fontWeight: "bold"
    },
    postButton: 
    {
     backgroundColor: '#a302a3',
     height: 60,
     width: 50,
     alignSelf: 'flex-end',
    
    },
    image:
    {
      zIndex: 1,
      height: 50,
      alignSelf: 'flex-end',
      width: 60,
      tintColor: '#610061',
      position: 'absolute'
     
    },
    creatPostFloatButton:
    {
      borderWidth:0,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:70,
      position: 'absolute',                                          
      bottom: 10,                                                    
      right: 10,
      height:70,
      backgroundColor:BG_LIGHT,
      borderRadius:100,
      shadowOffset: {width: 0, height: 2}, 
      elevation: 5, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84
    },
    pfeed:
    {
      width: WIDTH,
      alignItems:'center', 
      backgroundColor: BG_LIGHT
    },
    listpost:
    {
      
      height: 120, 
      width: WIDTH - 30, 
      paddingLeft: 5, 
      paddingRight: 5, 
      marginTop: 10, 
      marginLeft: 10, 
      marginRight: 10, 
      backgroundColor: BG_DARK, 
      borderColor: 'grey', 
      borderWidth: 0, 
      alignItems: 'center', 
      borderRadius: 0, 
      shadowOffset: {width: 0, height: 2}, 
      elevation: 8, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84
    }
  });