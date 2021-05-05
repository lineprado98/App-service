import React from 'react'

import {AsyncStorageStatic, ActivityIndicator,View, Button,Text} from 'react-native'

import {CardStyle, Content,Titulo, Valor} from '../Card-service/style'
const Card = ({props}) =>{
    let  servico = {titulo:'Titulo do serviço', categoria:'TI'}


    return (

     <CardStyle>
         <Content>
             <View style={{flexDirection:'row', justifyContent:'space-between'}}>
               <Titulo> Trocar torneira     </Titulo> 
                <Valor>  30R$ </Valor> 
             </View>
             <Text style={{ paddingStart:4, paddingBottom:10}}>
               Categoria: {servico.categoria}
             </Text>
        
             <Button
              title="Ver mais"
   
             > </Button>
           
         </Content>
    
     </CardStyle>

    )

}


export default Card