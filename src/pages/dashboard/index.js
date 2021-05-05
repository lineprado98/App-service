import React from 'react'
import {View,Text,StyleSheet, Button, ScrollView,StatusBar,SafeAreaView} from'react-native'
import { useContext } from 'react/cjs/react.development'
import AuthContext from '../../context/AuthContext'

import Card from '../../Components/Card-service'


const Dashboard = () => {
    const { SignOut} = useContext(AuthContext)

  async   function handleSignOut(){
        console.warn('saindo')

      await   SignOut()
    }

    return (
      <SafeAreaView style={style.container}>
    <ScrollView >
    <Card></Card>
    <Card></Card>

    <Card></Card>

    <Card></Card>

    <Card></Card>
    <Card></Card>
    <Card></Card>

 


      
        <Button title="Sign Out" 
        onPress={handleSignOut}/> 
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