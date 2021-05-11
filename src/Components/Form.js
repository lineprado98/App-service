
import React from 'react';
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
export const  Input = styled.TextInput`

  background:white;
  width:95%;
  margin:2%;
  padding:4px;
   border:2px  #9e9e9e;
  border-width:1px;
  border-radius:5px; 
  height:35px;
  hover:{
   border-color:red;
  }
  input:{
    hover:{
         border-color:red;

    }
  }

`

export const TextError =  styled.Text`
padding-left:10px;
color:red;
font-size:10px;
`

export const TextErrorLogin =  styled.Text`
color:red;
font-size:15px;
padding:5px;
`

export const  TextArea = styled.TextInput`

  width:95%;
  height:15%;
  margin:2%;
  background:white;
  border:2px  #9e9e9e;
   padding: 4px 0px 30px 5px;
  border-radius:5px; 
  max-width:95%;


`




