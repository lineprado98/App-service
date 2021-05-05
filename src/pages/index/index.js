import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import estilo from "./style"
import UserContext  from '../../context/UserContext'


const Index = (props) => {

    const {state} = useContext(UserContext)
    console.warn(state)

    return(
    <View style={estilo.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
    )
  

}
export default Index

