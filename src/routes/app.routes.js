
import React,{useState,useContext} from 'react'
import Dashboard from '../pages/dashboard'
import Work from '../pages/work'
import Professional from '../pages/professional'

import Profile from '../pages/profile'
import { View, Text, Button } from 'react-native';
import AuthContext from '../context/AuthContext'
import { createStackNavigator} from'@react-navigation/stack'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { Appbar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';


const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();



function CustomDrawerContent(props) {
 const { SignOut,user} = useContext(AuthContext)

   console.log(user)

  const  sair = async () =>{
    await SignOut()
  }
  

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Meus Seviços"
        onPress={()=>{props.navigation.navigate('Perfil')}}
      />
        <DrawerItem
        label="Termos"
        onPress={()=>{props.navigation.navigate('Perfil')}}
      />
      <DrawerItem
        label="Sair"
        onPress={sair}
      />
   
  
    </DrawerContentScrollView>
  );
}


const  MyTabs = ({route,navigation})=>{
const [rotaAtual, setRota] = useState('Serviços');

  return (
    <>
       <Appbar.Header >
      {/* <Appbar.BackAction /> */}
      <Appbar.Action icon="menu" 
            onPress={() =>{navigation.dispatch(DrawerActions.openDrawer())}} >
      <Drawer.Navigator  >
      <Drawer.Screen name="Dasboard"  /> 

     
     </Drawer.Navigator >
    </Appbar.Action>

      <Appbar.Content  title={rotaAtual} />
      <Appbar.Action icon="magnify"  />
    
    </Appbar.Header>

    <Tab.Navigator
        
        screenOptions={({ route}) => ({
          
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
                 if (route.name === 'Professional') {
              iconName = focused ? 'users' : 'users';
        
            } 
           return <Icon name={iconName}size={size} color={color}/>
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      
    
    >  
    
      <Tab.Screen   onPress={()=> {
      Actions.loadData({type: ActionConst.REFRESH});
    }}  name="Dashboard"  component={Dashboard}
       
         listeners={({ navigation, route }) => ({
           
                tabPress: e => {
                  setRota('Serviços')
                  
                },
            })}/>


      <Tab.Screen name="Work" component={Work} 
            listeners={({ navigation, route }) => ({
                tabPress: e => {
                  setRota('Adicionar Serviço')
                        // navigation.navigate('Perfil')
                },
            })}/>
    
      <Tab.Screen  name="Perfil" component={Profile}
          options={{
          screen:false
        }}
          listeners={({ navigation, route }) => ({
                tabPress: e => {
                  setRota('Perfil')
                        // navigation.navigate('Perfil')
                },
            })}/>
          <Tab.Screen 
           name="Professional"  component={Professional}
       
          listeners={({ navigation, route }) => ({
                tabPress: e => {
                  setRota('Profissionais')
                        // navigation.navigate('Perfil')
                },
            })}/>
  
    </Tab.Navigator>
</>
  );
}


const AppRoutes = () => (
       
 
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen   name="Menu" component={MyTabs} />

     </Drawer.Navigator>
 
    
  
)

export default AppRoutes