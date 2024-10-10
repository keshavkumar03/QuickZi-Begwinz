// CheckYourEmailScreen.js
import React,{useState}from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CheckYourEmailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Your Mail</Text>
      <Text style={styles.subText}>
        We have sent a reset Password to your email address.
      </Text>
      <Image 
        source={require('./assets/email.png')}  // Add your image here
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OpenEmailApp')}>
        <Text style={styles.buttonText}>Open email app</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Resend')}>
        <Text style={styles.resendText}>Didn't you receive any code? Resend</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Check Your Email Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendText: {
    textAlign: 'center',
    color: '#007BFF',
  },
});

export default CheckYourEmailScreen;