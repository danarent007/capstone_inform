import { StyleSheet } from "react-native"
import {
  Dimensions
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
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
    view_container: 
    {
      flex: 9,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#add8e6',
    },
    view_headingText: 
    {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        opacity: 1,
        textAlign: "center",
        position : "relative",
        flex: 0,
        marginBottom: 10
        
    },
    view_headingText_dark: 
    {
        color: BG_DARK,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        opacity: 1,
        textAlign: "center",
        position : "relative",
        flex: 0,
        marginBottom: 10
        
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
    postDesc: 
    {
        color: 'white',
        fontSize: 20,
        minWidth: this.WIDTH,
        marginTop: 0,
        opacity: 1,
        textAlign: "left",
        position : "relative",
        flex: 0, 
    },
    headingText: 
    {
        color: TEXT_LIGHT,
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        opacity: 0.5,
    },
    welcomeText:
    {
      color: TEXT_LIGHT,
      fontSize: 50,
      //fontWeight: 'bold',
      fontStyle: 'italic',
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
    selectorView:
    {
      flex:1, 
      width: WIDTH-50,
      height: 5,
      marginLeft: 25,
      
      //justifyContent: "center"
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
      backgroundColor:BG_DARK,
      borderRadius:100,
      shadowOffset: {width: 0, height: 2}, 
      elevation: 5, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84
    },
    creatPostFloatButtonLight:
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
      backgroundColor: BG_LIGHT,
      minHeight: HEIGHT - 80,
      maxHeight: HEIGHT - 80
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
    },
    btnSave: 
    {
      width: WIDTH - 150,
      height: 45,
      borderRadius: 0,
      fontSize: 16,
      marginTop: 25,
      backgroundColor: BG_DARK,
      color: TEXT_LIGHT,
      justifyContent: 'center',
      shadowOffset: {width: 0, height: 2}, 
      elevation: 5, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84
    },
    bodyText: 
    {
        color: 'white',
        fontSize: 20,
        minWidth: this.WIDTH,
        marginTop: 0,
        opacity: 1,
        textAlign: "left",
        position : "relative",
        flex: 0, 
    },
    descText: 
    {
        color: BG_DARK,
        fontSize: 20,
        minWidth: this.WIDTH,
        marginTop: 0,
        marginBottom: 10,
        opacity: 1,
        textAlign: "left",
        position : "relative",
        flex: 0,
        textDecorationLine: "underline",
    },
    postText: 
    {
        color: TEXT_LIGHT,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 1,
        opacity: 0.5,
        borderBottomStartRadius: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    textAreaInput: 
    {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 0,
      fontSize: 16,
      paddingTop: 30,
      paddingLeft: 45,
      backgroundColor: BG_LIGHT,
      fontWeight: 'bold',
      color: TEXT_LIGHT,
      marginHorizontal: 25,
      opacity: 0.6
    },
    selectorViews:
    {
      flex:1, 
      width: WIDTH-50,
      height: HEIGHT-20,
      marginLeft: 25,
      marginTop: 10
      
      //justifyContent: "center"
    },
    scroll:
    {
      //paddingHorizontal: 20,
      flex: 9,
      borderWidth: 0,
      //contentInset: {top: '10', bottom: '30'},
      borderColor: 'white',
      width: WIDTH -28,
      //maxHeight: HEIGHT-50,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 20,
      backgroundColor: '#4682b4',
      position: "relative", 
      shadowOffset: {width: 0, height: 2}, 
      elevation: 5, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84          

    },
    scroll_main:
    {
      //paddingHorizontal: 20,
      flex: 9,
      borderWidth: 0,
      //contentInset: {top: '10', bottom: '30'},
      borderColor: 'white',
      width: WIDTH,
      maxHeight: HEIGHT-80,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 20,
      backgroundColor: '#4682b4',
      position: "relative", 
      shadowOffset: {width: 0, height: 2}, 
      elevation: 5, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84          

    },
    image_style:
    {
      width: WIDTH - 18, 
      height: WIDTH - 18,
      shadowOffset: {width: 0, height: 2}, 
      elevation: 5, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84,
      paddingBottom: 10 
    }
  });