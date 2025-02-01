MHC_INTERNSHIP_NAVIGATION_RN ==> MHC_INTERNSHIP_NAVIGATION_REACT-NATIVE

**# React Native Navigation with Buttons and Drawer**

# MHC_INTERNSHIP_NAVIGATION_RN

## Overview
This React Native application demonstrates navigation between pages using buttons and a drawer menu. It includes essential screens such as Login, Home, Profile, and Add to Cart, with authentication handling to display different navigation flows.

## Features
- Authentication with a login screen
- Navigation between screens using buttons
- Drawer navigation for seamless transitions
- Stack navigation for managing screen hierarchy

## Installation
Follow these steps to set up the project:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Android Studio or Xcode (for running the app on an emulator or device)

### Setup & Run
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the app:
   ```sh
   npx react-native run-android   # For Android
   npx react-native run-ios       # For iOS
   ```

## Key Code Snippets

### Authentication (LoginScreen.js)
```jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ setIsLoggedIn }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen 🔐</Text>
      <Button title="Log In" onPress={() => setIsLoggedIn(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1f5fe',
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
});
```

### Navigation Setup (App.js)
```jsx
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
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
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
```

### Home & Profile Navigation (HomeScreen.js & ProfileScreen.js)
```jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen! 🏠</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
```

```jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Profile Screen 👤</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
```

## Contributing
Feel free to submit issues and pull requests to enhance this project.


