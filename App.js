// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import LoginScreen from './components/LoginScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: true }}  // Hide the header from the drawer navigator
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ headerShown: true }}  // Show the header for the Profile screen
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!isLoggedIn ? (
          <Stack.Screen 
            name="Login" 
            component={() => <LoginScreen setIsLoggedIn={setIsLoggedIn} />} 
            options={{ headerShown: false }} 
          />
        ) : (
          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator} 
            options={{ headerShown: false }} 
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}