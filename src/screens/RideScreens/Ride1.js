// Ride1.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';  // Assuming you are using react-native-maps

const Ride1 = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text style={styles.text}>Ride 1 in progress...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '80%',
  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default Ride1;
