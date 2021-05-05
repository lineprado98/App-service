import React from 'react';
import { StyleSheet } from 'react-native'
import AuthContext from '../../context/AuthContext';


export default  StyleSheet.create({

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
    width:'30%'
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
    paddingLeft:20,
    paddingRight:25,
    paddingBottom:50,
     width:'100%',
    flexDirection:'row',
    justifyContent:'space-between'

  }

})
