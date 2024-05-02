import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from './pages/home/index';
import Bluetooth from './pages/Bluetooth/index';
import Controle from './pages/controle/index';
import Ajustes from './pages/ajustes/index';

import { Entypo,
         Feather,
         MaterialCommunityIcons
 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    height: 55,
                    backgroundColor: '#FFF',
                    borderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5
                },
                tabBarActiveTintColor: '#FFD700'
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({ size, color}) => (
                    <Entypo name="home" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name="Bluetooth"
            component={Bluetooth} 
            options={{
                tabBarIcon: ({ size, color}) => (
                    <Feather name="bluetooth" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen name="Controle"
            component={Controle}
            options={{
                tabBarIcon: ({ size, color}) => (
                    <MaterialCommunityIcons name="gamepad-variant-outline" size={size} color={color} />
                )
            }} 
            />

            <Tab.Screen 
            name="Ajustes" 
            component={Ajustes}
            options={{
                tabBarIcon: ({ size, color}) => (
                    <Feather name="settings" size={size} color={color} />
                )
            }} 
            />

        </Tab.Navigator>
    )
}