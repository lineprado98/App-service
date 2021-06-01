

import React, { useEffect, useState } from 'react'
import {View,Text,StyleSheet, Button, ScrollView,StatusBar,SafeAreaView} from'react-native'
import api from '../../services/api'
import Card from '../../Components/Card-service'
import { Modal, Portal,  Provider } from 'react-native-paper';
import Whatsapp from '../Whatsapp'
const ModalService = ({ value,visible,hideModal,})=>{

   const containerStyle = {backgroundColor: 'white', padding: 20}

   if(value){
   return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>{value.id}</Text>
          <Whatsapp></Whatsapp>
        </Modal>
      </Portal>
    </Provider> 
    
    )

   }
   return null

    
     
    
}
export default ModalService;