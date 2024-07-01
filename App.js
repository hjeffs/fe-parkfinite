import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header'; 
import { ImageBackground } from 'react-native';
import Button from './components/Button';

export default function App() {
  return (
    
    
    <View style={styles.container}>
      <Header title="Parkfinite" />
      
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
    bottom: 400, 
  },
  button: {
    marginHorizontal: 100,
  }
  
});