import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './pages/Home';
import HelpPets from './pages/HelpPets';
import Favorites from './pages/Favorites';
import Pets from './pages/Pets';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home-outline'
                  : 'home-outline';
              } 
              else if (route.name === 'Ajude') {
                iconName = focused ? 'heart-circle-outline' : 'heart-circle-outline';
              } 
              else if (route.name === 'Pets') {
                iconName = focused ? 'paw-outline' : 'paw-outline';
              } 
              else if (route.name === 'Favoritos') {
                iconName = focused ? 'star-outline' : 'star-outline';
              }
  
              // icones da barra
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown:false }} />
            <Tab.Screen name="Ajude" component={HelpPets} options={{ headerShown:false }} />
            <Tab.Screen name="Favoritos" component={Favorites} options={{ headerShown:false }} />
            <Tab.Screen name="Pets" component={Pets}  options={{ headerShown:false }}/>
        </Tab.Navigator>
    );
}