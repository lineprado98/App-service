
import React from 'react'
import Signin from '../pages/Signin'
import Registry from '../pages/registry'


import { createStackNavigator} from'@react-navigation/stack'

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator>
        {/* Cada tela usa o screen */}

        <AuthStack.Screen name="SignIn" component={Signin} /> 
        {/* <AuthStack.Screen name="Cadastro" component={Registry}/>  */}

    </AuthStack.Navigator>
)

export default AuthRoutes