import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header'; 
import { ImageBackground } from 'react-native';
import Button from './components/Button';

// import Navigation from './components/Navigation';


export default function App() {
  return (
    
    
    <View style={styles.container}>
      <Header title="Parkfinite" />
       {/* <Navigation/>  */}
      <ImageBackground source={require(
    './assets/background.png')} style={styles.background}>
        <View style={styles.buttonContainer}>
       
      
       <Button
          title="Sign Up"
        />
        <Button
          title="Log In"
        />


        </View>
        <Button
          style={styles.continueAsGuestButton}
          title="Continue as guest"
        />
        <Text style={styles.label}>Guests on this site are restricted to viewing level 1 campsites, and not being able to post or comment</Text>


       </ImageBackground>
       
      <StatusBar style="auto" />
    
     
     
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