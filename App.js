import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserProvider } from './src/context/UserContext';
import Index from "./src/pages/index/index"
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/routes/index'
import {AuthProvider} from "./src/context/AuthContext"
export default function App() {
  const navigationRef = React.createRef();

  return (
    

    <NavigationContainer >
          <AuthProvider>
      <Routes></Routes>
      {/* <UserProvider>
        
          <Index></Index>
      </UserProvider> */}
   </AuthProvider>
      </NavigationContainer>
   

  );
}
