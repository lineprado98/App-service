import React from 'react'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react/cjs/react.development'
import { View, AsyncStorageStatic, ActivityIndicator} from 'react-native'
import estilo from '../routes/style'
// Verificar a rota disponivel 
const Routes = () =>{
    
    const {signed, loading} = useContext(AuthContext)
 
    if(loading){
        return (
            <View style={estilo.container}>
             <ActivityIndicator size="large" color="#999"></ActivityIndicator>
            </View>
        )
        }
  
        return signed?<AppRoutes/>:<AuthRoutes/>

///return  <AppRoutes/>

  
}

export default  Routes