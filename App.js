import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Login'
import Recording from './components/Recording';
import Header from './components/header';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="home"
            component={Header}
          />
          <Stack.Screen name="recording" component={Recording} />
        </Stack.Navigator>
      </NavigationContainer>
  )


}
