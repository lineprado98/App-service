 import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import Moment from 'react-moment';
import 'moment-timezone';

import {AsyncStorageStatic, ActivityIndicator,View} from 'react-native'

import {CardStyle, Content,Titulo, Valor,style} from '../Card-service/style'

const Card = ({values, showModal}) =>{
 

    return (
<>
     <CardStyle>
         <Content>
             <View style={{flexDirection:'row', justifyContent:'space-between'}}>
               <Titulo> {values.titulo} </Titulo> 
                <Valor>  {values.valor} </Valor> 
             </View>
             <Text style={style.sub_titulo}>
               Categoria: {values.categorias[0].nome}
             </Text>
               {/* <Text style={style.data}>
                <Moment locale="PT-BR" tz="America/Sao_Paulo" format="LLL">
                    {values.created_at}   
                </Moment>
             </Text>  */}
                 
    
           <Button title="detalhes" style={{marginTop:20}} onPress={() => showModal(values)}>
         Detalhes
           </Button>
           
         </Content>

    
     </CardStyle>
</>

    )
}



export default Card