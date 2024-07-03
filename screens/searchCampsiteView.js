import React from "react";
import { Button, View, Text } from "react-native";
import Map from './mapView'
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import SearchBarInput from '../components/elements'
import IndividualCampsiteView from "./individualCampsiteView";



const SearchCampsiteView = ({ navigation }) => {
    const username = "Guest"; 
  
    const handleUsernamePress = () => {
      
    };
    return (
        <View style={styles.container}>
       <Map /> 
      <TouchableOpacity style={styles.usernameButton} onPress={handleUsernamePress}>
        <Text style={styles.buttonText}>{username}</Text>
      </TouchableOpacity>
      <SearchBarInput />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    usernameButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      backgroundColor: '#2ECC71',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      zIndex: 10, 
    },
    continueButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      backgroundColor: '#3498DB',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      zIndex: 10, 
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    
  });
  
  
export default SearchCampsiteView

