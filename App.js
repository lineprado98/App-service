import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserProvider } from './src/context/UserContext';
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/routes/index'
import {AuthProvider} from "./src/context/AuthContext"
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const navigationRef = React.createRef();

  return (
    

    <NavigationContainer >
      <PaperProvider>
          <AuthProvider>
      <Routes>

      </Routes>
  
   </AuthProvider>
   </PaperProvider>
      </NavigationContainer>
   

  );
}
