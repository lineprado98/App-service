
import React from 'react';
import styled from 'styled-components/native'

import {  StyleSheet} from "react-native";

export const   CardStyle= styled.View`

   margin:5px;  
  border: 1px;

  border-color: #ddd;
  shadow-offset: {width: 1px, height: 1px};
  shadow-opacity: 0.18;
  shadow-radius:10px;
 

`

export const  Content= styled.View`
  padding:10px;
`

export const  Titulo= styled.Text`

    font-size: 13px;
    font-weight: bold;

`
export const  Valor= styled.Text`

    padding:2px;
    font-size: 13px;
    font-weight: bold;
    color:#631fec;

`




     