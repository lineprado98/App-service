import React, { useEffect, useState } from 'react'
import {View,Text,StyleSheet, Button, ScrollView,StatusBar,SafeAreaView} from'react-native'
import { useContext } from 'react/cjs/react.development'
import AuthContext from '../../context/AuthContext'
import api from '../../services/api'
import Card from '../../Components/Card-service'

const Dashboard = () => {
    const { SignOut} = useContext(AuthContext)
    const [servicos,setServicos] = useState([]);
    useEffect(async()=>{
      let res = await api.get('/servicos');
      console.log('res',res);
      setServicos(res.data.listServicos);
      
    },[]);
console.log(servicos);
    const listServicos = servicos.map((item) =>
    // Errado! A chave deveria ser definida aqui:
        <Card values={item}/>
  );
  async   function handleSignOut(){
        console.warn('saindo')

      await   SignOut()
    }

    return (
      <SafeAreaView style={style.container}>
    <ScrollView >
      {servicos&&(listServicos)}
        {/* <Button title="Sign Out" 
        onPress={handleSignOut}/>  */}
    </ScrollView>
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

export default Dashboard 