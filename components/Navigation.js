import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from '../screens/mapView'; 
import { View, Text, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'darkgreen' }, 
          headerTintColor: '#fff', 
          headerTitleStyle: { fontWeight: 'bold' }, 
        }}
      >
        <Stack.Screen
          name="map"
          component={MapView}
          options={{ title: 'Map' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
