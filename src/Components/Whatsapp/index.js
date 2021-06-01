 import  React,{useState} from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {  Linking,} from 'react-native'
import { View } from '../Containers/container';



const whatsapp = ({values}) =>{

  const   openWhatsApp = () => {
    let msg = "Olá";
    let mobile = "";

      if (msg) {
      let url =  "https://api.whatsapp.com/"+"send?phone=5551985401326&text=Olá"
   // let url = "whatsappWeb://send?text=" + msg +"&phone55="+"51985401326" ;
  console.log(url);
     Linking.openURL(url).then(data => {
            console.log("WhatsApp Opened successfully " + data);
          }).catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      } else {
        alert("Please enter message to send");
      }
    
  };

    return (

                <View>
                    <Button
                    style={{
                    
                    background:"#06d755",
                    alignItems:'center',
                    justifyContent:'center',
                    width:20,
                    height:60,
                    backgroundColor:'#fff',
                    borderRadius:100,
                    }} onPress={openWhatsApp}>
                        <Icon  color={"white"} size={30}  name="whatsapp"/>
                
                    </Button>
                </View>

    )
}



export default whatsapp