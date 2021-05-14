 import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

import {AsyncStorageStatic, ActivityIndicator,View} from 'react-native'

import {CardStyle, Content,Titulo, Valor} from '../Card-service/style'

const Card = ({values, showModal}) =>{
 

    return (
<>
     <CardStyle>
         <Content>
             <View style={{flexDirection:'row', justifyContent:'space-between'}}>
               <Titulo> {values.titulo} </Titulo> 
                <Valor>  {values.valor} </Valor> 
             </View>
             <Text style={{ paddingStart:4, paddingBottom:10}}>
               Categoria: {values.categorias[0].nome}
             </Text>
    
           <Button style={{marginTop: 30}} onPress={() => showModal(values)}>
             Detalhes
           </Button>
           
         </Content>

    
     </CardStyle>
</>

    )
}



export default Card