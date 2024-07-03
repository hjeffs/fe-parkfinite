import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header'; 
import { ImageBackground } from 'react-native';
import Button from './components/Button';
import SearchCampsiteView from './screens/searchCampsiteView'
import IndividualCampsiteView from './screens/individualCampsiteView';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchCampsiteView" component={SearchCampsiteView} options={{ title: 'Search Campsite' }} />
        <Stack.Screen name="IndividualCampsiteView" component={IndividualCampsiteView} options={{ title: 'View Campsite' }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Parkfinite" />
      <ImageBackground source={require('./assets/background.png')} style={styles.background}>
        <View style={styles.buttonContainer}>
          <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
          <Button title="Log In" onPress={() => navigation.navigate('LogIn')} />
        </View>
        <Button
          title="Continue as guest"
          onPress={() => navigation.navigate('SearchCampsiteView')}
          style={styles.continueAsGuestButton}
        />
        <Text style={styles.label}>
          Guests on this site are restricted to viewing level 1 campsites, and not being able to post or comment
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginTop: 60,
    resizeMode: 'cover',
    justifyContent: 'center',  
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'static', 
    bottom: 0, 
  },
  button: {
    marginHorizontal: 100,
  },  

  continueAsGuestButton: {
    fontSize: 9,
    
  },

  label: {
    padding: 50,
    color: '#333',   
    alignItems: 'center', 
  }  
});

