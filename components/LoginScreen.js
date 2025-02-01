// LoginScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ setIsLoggedIn }) {
  const handleLogin = () => {
    // Perform your login logic here
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen 🔐</Text>
      <Button title="Log In" onPress={handleLogin} />
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