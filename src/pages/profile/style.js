import React from 'react';
import { StyleSheet } from 'react-native'

export default  StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
  },

  safeArea:{
    backgroundColor: '#fff',
    flex: 1,

  },
  detalhePerfil :{
    fontSize:15,
    marginLeft:10

  },

  paragrafo:{
    flexDirection:"row",
    marginLeft:10

  },

  titulo:{
    
    color:'white',
    fontSize:18,
    alignSelf:'start',
    paddingTop:10,
    paddingRight:5,
    fontWeight: 'bold'

    
  },
  texto:{
    color:'white',
    fontSize:18,
    paddingTop:10

  },
   cardPerfil: {
    margin:12,
    backgroundColor: '#631fec',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:10,

    borderRadius:15,
    height:150
    
  },

})
