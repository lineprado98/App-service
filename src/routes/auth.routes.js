
import React from 'react'
import Signin from '../pages/Signin'
import Dashboard from '../pages/dashboard'

import { createStackNavigator} from'@react-navigation/stack'

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator>
        {/* Cada tela usa o screen */}

        <AuthStack.Screen name="SignIn" component={Signin}/> 
    </AuthStack.Navigator>
)

export default AuthRoutes