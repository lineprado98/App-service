
import React from 'react';
import styled from 'styled-components/native'

import {  StyleSheet} from "react-native";

export const   CardStyle= styled.View`

  margin:10px;  
  border: 1px;
  border-color: #ddd;
  shadow-offset: {width: 1px, height: 1px};
  shadow-opacity: 0.18;
  shadow-radius:10px;
  border-radius:10px;
 

`

export const  Content= styled.View`
  padding:10px;
`

export const  Titulo= styled.Text`

    font-size:16px;
    font-weight: bold;

`
export const  Valor= styled.Text`
    padding:2px;
    font-size: 15px;
    font-weight: bold;
    color:#631fec;

`
// import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({

  titulo: {
      fontSize:15,
      paddingStart:4,
      paddingBottom:5
  },

    sub_titulo: {
      fontSize:13,
      paddingTop:8,
      paddingStart:4,
      color:'#6e7573'

  },
  data:{
    paddingStart:4,
    paddingTop:20,
    fontSize:12,
    color:'#6e7573'

  }

})





     