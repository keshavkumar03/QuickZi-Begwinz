import React, { useState } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios'; // Import axios for making HTTP requests

const SignUpScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  // Function to handle sign up
  const handleSignUp = async () => {
    try {
        const response = await axios.post('http://192.168.0.103:5000/api/auth/signup', { username: name, email, password });
        console.log(response);
        Alert.alert('Sign Up Successful', 'You can now login');
        navigation.navigate('Login');
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'An unknown error occurred during sign up';
        Alert.alert('Sign Up Failed', errorMessage);
        console.log(error);
    }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey, Sign Up Now</Text>

      {/* Input for Full Name */}
      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={setName} // Bind input to name state
      />

      {/* Input for Email */}
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail} // Bind input to email state
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Input for Password */}
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword} // Bind input to password state
        secureTextEntry={true}
        autoCapitalize="none"
      />

      {/* Repeat Password Input */}
      <TextInput placeholder="Repeat Password" style={styles.input} secureTextEntry={true} />

      {/* Sign Up Button */}
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or Continue</Text>

      {/* Google Sign Up Button */}
      <TouchableOpacity style={styles.googleButton}>
        {/* <Image 
          source={require('./assets/google.png')} // Add your Google icon here
          style={styles.googleImage}
        /> */}
        <Text style={styles.buttonText}>Sign up with Google</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Sign Up Screen
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
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
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
  googleButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#888',
  },
  loginText: {
    textAlign: 'center',
    color: '#007BFF',
    marginTop: 20,
  },
});

export default SignUpScreen;
