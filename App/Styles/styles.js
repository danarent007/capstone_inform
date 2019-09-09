import { StyleSheet } from "react-native"
import {Dimensions} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Row } from "native-base";

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const BG_DARK = '#000'
const BG_LIGHT = '#fff'
const TEXT_LIGHT = '#ffffff'
const TEXT_DARK = '#000'
const FONT = 'Roboto'

export default StyleSheet.create({ //Styles
    container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BG_DARK,
    },
    headerText:
    {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontSize:30
    },
    view_container: 
    {
      flex: 9,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: BG_DARK,
      height: HEIGHT-100
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
    view_headingText_light: 
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
    headingText2: 
    {
        color: TEXT_LIGHT,
        fontSize: 25,
        marginTop: 0,
    },
    headingText2_dark: 
    {
        color: TEXT_DARK,
        fontSize: 25,
        marginTop: 0,
        textAlign: "center",
        position : "relative",
    },
    headingText3: 
    {
        color: TEXT_LIGHT,
        fontSize: 25,
        marginTop: 0,
        borderWidth: 1,
        borderColor: 'white'
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
      height: 55,
      fontFamily: FONT,
      textAlign: 'center',
      borderRadius: 0,
      borderColor: BG_LIGHT,
      borderWidth: 1,
      fontSize: 16,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: BG_DARK,
      color: BG_LIGHT,
      marginHorizontal: 25,
    },
    inputLarge: 
    {
      width: WIDTH - 55,
      //height: 200,
      fontFamily: FONT,
      //textAlign: 'center'
      textAlignVertical: 'top',
      borderRadius: 0,
      borderColor: BG_LIGHT,
      borderWidth: 1,
      fontSize: 16,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: BG_DARK,
      color: BG_LIGHT,
      marginHorizontal: 25,
    },
    inputTop: 
    {
      width: WIDTH - 55,
      textAlignVertical: 'top',
      height: 55,
      fontFamily: FONT,
      borderRadius: 0,
      borderColor: BG_LIGHT,
      borderWidth: 1,
      fontSize: 16,
      paddingLeft: 0,
      backgroundColor: BG_DARK,
      color: BG_LIGHT,
      marginHorizontal: 25,
    },
    inputContainer: 
    {
        marginTop: 0,
    },
    inputContainer2: 
    {
        marginTop: 10,
    },
    inputContainerLarge: 
    {
        marginTop: 10,
    },
    btnLogin: 
    {
      width: WIDTH - 150,
      height: 55,
      borderRadius: 50,
      fontSize: 16,
      marginTop: 25,
      backgroundColor: BG_DARK,
      color: TEXT_LIGHT,
      justifyContent: 'center',
      borderColor: BG_LIGHT,
      borderWidth: 1,
    },
    loginText: 
    {
        color: TEXT_LIGHT,
        fontSize: 20,
        fontFamily: FONT,
        textAlign: 'center',
    },

    btnLoginSml: 
    {
      width: WIDTH - 250,
      height: 38,
      borderRadius: 50,
      fontSize: 16,
      marginTop: 0,
      backgroundColor: BG_LIGHT,
      color: TEXT_DARK,
      justifyContent: 'center',
      borderColor: BG_DARK,
      borderWidth: 1,
    },
    loginTextSml: 
    {
        color: TEXT_DARK,
        fontSize: 20,
        fontFamily: FONT,
        textAlign: 'center',
        //opacity: 0.6
    },
    explainText: 
    {
        color: TEXT_LIGHT,
        fontSize: 20,
        fontFamily: FONT,
        textAlign: 'center',
        //opacity: 0.6
    },

    explainTextDark: 
    {
        color: TEXT_DARK,
        fontSize: 20,
        fontFamily: FONT,
        textAlign: 'center',
        //opacity: 0.6
    },

    selectorView:
    {
      flex:9, 
      width: WIDTH-50,
      height: 5,
      marginLeft: 25,
      zIndex:300,
      elevation:200

      
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
      borderWidth:1,
      borderColor:'#fff',
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
      //elevation: 1000,
      zIndex: 1000,
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84
    },
    creatPostFloatButton2:
    {
      borderWidth:1,
      borderColor:'#fff',
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
      //elevation: 1000,
      zIndex: 1000,
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84
    },
    creatPostFloatButtonLight:
    {
      borderWidth:1,
      borderColor:BG_LIGHT,
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
    pfeed:
    {
      width: WIDTH,
      alignItems:'center', 
      backgroundColor: BG_DARK,
      minHeight: HEIGHT - 80,
      maxHeight: HEIGHT - 80
    },
    flatListContentStyle:
    {
      alignContent: 'center', 
      backgroundColor: BG_DARK,
      //maxHeight: HEIGHT-100
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
    listpost_row:
    {
      flexDirection: 'row',
      height: 80, 
      width: WIDTH - 30, 
      paddingLeft: 5, 
      paddingRight: 5, 
      marginTop: 10, 
      marginLeft: 10, 
      marginRight: 10, 
      backgroundColor: BG_LIGHT, 
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
        color: TEXT_DARK,
        fontSize: 20,
        minWidth: this.WIDTH,
        marginTop: 10,
        opacity: 1,
        textAlign: "left",
        position : "relative",
        flex: 0, 
    },
    descText: 
    {
        color: BG_LIGHT,
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
    descText_dark: 
    {
        color: BG_DARK,
        fontSize: 20,
        minWidth: this.WIDTH,
        marginTop: 0,
        marginBottom: 10,
        opacity: 1,
        textAlign: "center",
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
      //height: 20,
      borderRadius: 0,
      fontSize: 16,
      paddingTop: 10,
      paddingLeft: 10,
      backgroundColor: BG_LIGHT,
      fontWeight: 'bold',
      color: TEXT_LIGHT,
      marginHorizontal: 25,
      opacity: 0.6
    },
    selectorViews:
    {
      paddingRight: 0,
      paddingTop: 20,
      flex:1, 
      width: WIDTH-55,
      height: HEIGHT-20,

      //marginLeft: 25,
      //marginTop: 10,
      //justifyContent: "center",
      //justifyContent: 'center',
      //alignItems: 'center'
    },
    selectorViews2:
    {
      paddingRight: 0,
      paddingTop: 20,
      flex:1, 
      width: WIDTH-55,
      height: 100,
      //marginLeft: 25,
      //marginTop: 10,
      //justifyContent: "center",
      //justifyContent: 'center',
      //alignItems: 'center'
    },
    scroll:
    {
      //paddingHorizontal: 20,
      flex: 9,
      borderWidth: 1,
      //contentInset: {top: '10', bottom: '30'},
      borderColor: 'white',
      width: WIDTH -28,
      //maxHeight: HEIGHT-50,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 20,
      backgroundColor: '#fff',
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
      backgroundColor: BG_DARK,
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
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84,
      paddingBottom: 10 
    },
    postfeed_image_style:
    {
      width: 60, 
      height: 60,
      borderRadius: 10,
      shadowOffset: {width: 0, height: 2}, 
      shadowColor: '#000', 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84,
      paddingRight: 0 
    }
  });