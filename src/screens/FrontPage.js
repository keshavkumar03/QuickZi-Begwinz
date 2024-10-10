import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FrontPage = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('Signup'); // Use replace so that users can't go back to the front page
        }, 1500); // 1500 milliseconds = 1.5 seconds
    
        // Clean up the timer when the component is unmounted
        return () => clearTimeout(timer);
      }, [navigation]);
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logo.png') }// Replace with your logo image
        style={styles.logo}/>
      <Text style={styles.subtitle}>Fast Connections, Every Ride</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
  },
});

export default FrontPage;