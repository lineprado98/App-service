
import React from 'react'
import Dashboard from '../pages/dashboard'
import Work from '../pages/work'
import Profile from '../pages/profile'

import { createStackNavigator} from'@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';


const AppStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home';
            } 
                if (route.name === 'Perfil') {
              iconName = focused ? 'user' : 'user';
            } 
                 if (route.name === 'Work') {
              iconName = focused ? 'plus' : 'plus';
            } 
           return <Icon name={iconName}size={size} color={color}/>
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      
    
    >

      <Tab.Screen name="Dashboard" component={Dashboard} 
      />
      <Tab.Screen name="Work" component={Work} />
      <Tab.Screen name="Perfil" component={Profile} />

    </Tab.Navigator>
  );
}

const AppRoutes = () => (
    <AppStack.Navigator>
        {/* Cada tela usa o screen */}
        <AppStack.Screen name="Dashboard" component={MyTabs}/> 
     
    </AppStack.Navigator>
)

export default AppRoutes