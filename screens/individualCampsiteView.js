import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import { FlatList } from "react-native-web";
import Images from "../components/images";
import {AddToFavouritesButton} from '../components/elements'
import ReviewForm from "../components/ReviewForm";


const IndividualCampsiteView = ({campsite_id}) => {
    const username = "Guest"; 
  
    const handleUsernamePress = () => {
      
    };

    
    return (
       <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
            <Header title="Campsite Name"/>
            <TouchableOpacity style={styles.usernameButton} onPress={handleUsernamePress}>
        <Text style={styles.buttonText}>{username}</Text>
      </TouchableOpacity>
      <AddToFavouritesButton />
      <View style={styles.imagesContainer}>
          <Images />
        </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sections}>Address</Text>
        <Text style={styles.text}>This is where address goes</Text>
        <Text style={styles.sections}>
            Facilities</Text>
<Text style={styles.text}> These are the facilities the campsite has </Text>
<Text style={styles.sections}>
            Prices </Text>
        <Text style={styles.text}>These are the prices</Text>
        </View>
        <View style={styles.reviewsContainer}>
            <Text style={styles.sections}>Reviews</Text>
            <Text style={styles.text}>
                This is where reviews go
                           </Text>
        <ReviewForm />
        </View>
        
        </View>
         </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#fff', // Ensure background color fills the screen
      },
      scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20, // Optional padding at the bottom if needed
        paddingTop: 100, // Adjust this value based on your header height
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    container: {
        width: 500,
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
      sectionContainer: {
        width: '100%',
        flex: -1,
        padding: 20,
        backgroundColor: 'darkseagreen',
        marginBottom: 20,
        borderRadius: 10,
      },
    imagesContainer: {
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    images: {
        width: 150,
        height: 150,
        marginBottom: 10,
        borderRadius: 8, 
        
    },
    reviewsContainer: {
        width: '100%',
        backgroundColor: 'darkseagreen',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
      },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 20,
      },
      text: {
        textAlign: 'center',
      },
    
});

export default IndividualCampsiteView;
