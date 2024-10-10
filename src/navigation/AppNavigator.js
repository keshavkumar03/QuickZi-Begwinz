import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontPage from '../screens/FrontPage';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPassword';
import CheckYourEmailScreen from '../screens/CheckYourEmailScreen';
import Ride1 from '../screens/RideScreens/Ride1';
import Ride2 from '../screens/RideScreens/Ride2';
import Ride3 from '../screens/RideScreens/Ride3';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FrontPage">
        <Stack.Screen name="FrontPage" component={FrontPage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="CheckYourEmail" component={CheckYourEmailScreen} />
        <Stack.Screen name="Ride1" component={Ride1} />
        <Stack.Screen name="Ride2" component={Ride2} />
        <Stack.Screen name="Ride3" component={Ride3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
