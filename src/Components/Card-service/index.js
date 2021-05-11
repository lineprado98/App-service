import React from 'react'

import {AsyncStorageStatic, ActivityIndicator,View, Button,Text} from 'react-native'

import {CardStyle, Content,Titulo, Valor} from '../Card-service/style'
const Card = ({values}) =>{
 

    return (

     <CardStyle>
         <Content>
             <View style={{flexDirection:'row', justifyContent:'space-between'}}>
               <Titulo> {values.titulo} </Titulo> 
                <Valor>  {values.valor} </Valor> 
             </View>
             <Text style={{ paddingStart:4, paddingBottom:10}}>
               Categoria: {values.categorias[0].nome}
             </Text>
        
             <Button
              title="Ver mais"
   
             > </Button>
           
         </Content>
    
     </CardStyle>

    )

}


export default Card