import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AddToCart({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add To Cart Page 🛒</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
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