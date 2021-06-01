import React, { useEffect, useState } from 'react'
import {View,Text,StyleSheet, Button, ScrollView,StatusBar,SafeAreaView} from'react-native'
import { useContext } from 'react/cjs/react.development'
import AuthContext from '../../context/AuthContext'
import api from '../../services/api'
import Card from '../../Components/card-professional'
import ModalService from '../../Components/Modal-service'

const Professionals= () => {

  const [servicos,setServicos] = useState([]);
  const [itemSelected, setItemSelected] = useState();
  const [visible, setVisible] = React.useState(false);


  const showModal = (item) => {
    setVisible(true);
    setItemSelected(item);
  }
  
  const hideModal = () => setVisible(false);

    useEffect(()=>{
      console.log('use effect');
         (async ()=>{

      let res = await api.get('/profissionais');
   console.log(res);
      setServicos(res.data.listServicos);
      
    })();
    },[]);
  


    const listServicos = servicos.map((item) =>
    
        <Card key={item.id} showModal={showModal} values={item}/>


    );


    return (
   <SafeAreaView style={style.container}>
    <ScrollView >
      {servicos&&(listServicos)}
      </ScrollView>
  
        <ModalService visible={visible} hideModal={hideModal} value={itemSelected}></ModalService>
      
    </SafeAreaView>

    )
}


const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,

  },
  te:{
    fontSize:300
  }

})

export default Professionals