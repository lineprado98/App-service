import { red } from '@material-ui/core/colors';
import React from 'react';
import { StyleSheet } from 'react-native'
import AuthContext from '../../context/AuthContext';


const  style =  StyleSheet.create({

  container: { 
    padding:20,
    width:'100%',
    flex: 1,
    backgroundColor:'white',
    // backgroundColor:'#822fee',
    justifyContent: 'center',


  },
  content:{
    flex:1,
    width:'100%',
  },

  btn:{
    width:'100%'
  },

  titulo:{
    marginLeft:10,
    fontWeight:'bold',
    fontSize:18

  },
    select:{
    marginTop:10,
    marginLeft:10,
     width:'95%'

  },


  headerCad:{
    paddingTop:30,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:50,
    width:'100%',
    flexDirection:'row',
    justifyContent:'center'

  },
    maskedInput:{ 
    flexGrow:1,
    //height:40,
    fontSize:18,
    borderBottomColor:"#999",
    borderBottomWidth:1,
    borderStyle:"solid",
    alignSelf:"flex-start"

  },
  containerMask:{
    flexDirection:"row",
    marginBottom:20,
    marginLeft:10,
    marginRight:10
  },

  inputText : {
  marginTop: 5,
  backgroundColor:'transparent',
  width:'60%'
  },
  
  containerStyle: {
  flex:  1,
  width:'60%'
  },


})
export default style 
