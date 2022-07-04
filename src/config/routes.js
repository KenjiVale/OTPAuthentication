import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../modules/Login/LoginScreen';
import OTPScreen from '../modules/Login/OTPScreen';
import RegistrationScreen from '../modules/Registration/RegistrationScreen';

const Stack = createNativeStackNavigator();
const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Login'}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          screenOptions={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default routes;

const styles = StyleSheet.create({});
