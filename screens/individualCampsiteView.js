import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from "../components/Header";
import { FlatList } from "react-native-web";
import Images from "../components/images";


const IndividualCampsiteView = ({campsite_id}) => {
    const username = "Guest"; 
  
    const handleUsernamePress = () => {
      
    };
    return (
        <View style={styles.container}>
            <Header title="Campsite Name"/>
            <TouchableOpacity style={styles.usernameButton} onPress={handleUsernamePress}>
        <Text style={styles.buttonText}>{username}</Text>
      </TouchableOpacity>
      
    <Images />
    
      
      <View style={styles.sectionContainer}>

        <Text style={styles.sections}>Address</Text>
        <Text>This is where address goes</Text>
        <Text style={styles.sections}>
            Facilities</Text>
<Text> These are the facilities the campsite has </Text>
<Text style={styles.sections}>
            Prices </Text>
        <Text>These are the prices</Text>

        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    usernameButton: {
        position: 'absolute',
        top: 70,
        right: 20,
        backgroundColor: '#2ECC71',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        zIndex: 10, 
      },
     sections: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      sectionContainer: { width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 50, 
      backgroundColor: 'darkseagreen',
    },
    images: {
        width: 150,
        height: 150,
        marginBottom: 10,
        borderRadius: 8, 
        
    }
});

export default IndividualCampsiteView;
