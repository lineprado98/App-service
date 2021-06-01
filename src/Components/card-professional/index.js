 import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import Moment from 'react-moment';
import 'moment-timezone';
import { Avatar} from 'react-native-paper';

import {AsyncStorageStatic, ActivityIndicator,View} from 'react-native'

import {CardStyle, Content,Titulo, Valor,style} from '../card-professional/style'

const Card = ({values, showModal}) =>{
 

    return (
<>
     <CardStyle>
         <Content>
             <View style={{flexDirection:'row'}}>
                 <Avatar.Image size={80}   style={{marginLeft:20}} source={values.image} />
            <Text style={{marginLeft:50, marginTop:10}}>
               <Titulo> {values.name} </Titulo> </Text>
             </View>
        
        
                 
    
           <Button title="detalhes" style={{marginTop:20}} onPress={() => showModal(values)}>
             Contato
           </Button>
           
         </Content>

    
     </CardStyle>
</>

    )
}



export default Card