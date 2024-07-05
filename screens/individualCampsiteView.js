import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import { FlatList } from "react-native-web";
import Images from "../components/images";
import {AddToFavouritesButton} from '../components/elements'
import ReviewForm from "../components/ReviewForm";
import {useRoute} from '@react-navigation/native'
import { getCampsiteByID } from "../utils/api";
import { useState, useEffect } from "react";
import CampsiteReviews from "../components/ReviewForm"

const IndividualCampsiteView = () => {
    const username = "Guest"; 
  
    const handleUsernamePress = () => {
      
    };

  const route = useRoute();
  const campsite_id  = route.params;
  
  
  const [campsite, setCampsite] = useState({});

  useEffect(() => {
    getCampsiteByID(campsite_id)
    .then((data) => {
      setCampsite(data)
    })
  }, [campsite_id])
    
  
        
    return (
       <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
            <Header title={campsite.campsite_name}/>
            <TouchableOpacity style={styles.usernameButton} onPress={handleUsernamePress}>
        <Text style={styles.buttonText}>{username}</Text>
      </TouchableOpacity>
      <AddToFavouritesButton />
      <View style={styles.imagesContainer}>
          <Images />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sections}>Contact Information</Text>
          <View style={styles.contactContainer}>
            {Array.isArray(campsite.contact) && campsite.contact.map((person) => (
              <View key={person.campsite_contact_id} style={styles.contactItem}>
                <Text style={styles.contactInfo}>Contact Name: {person.campsite_contact_name}</Text>
                <Text style={styles.contactInfo}>Phone: {person.campsite_contact_phone}</Text>
                <Text style={styles.contactInfo}>Email: {person.campsite_contact_email || 'N/A'}</Text>
              </View>
            ))}
          </View>
          {/* <Text style={styles.sections}>Facilities</Text> */}
          {/* <Text style={styles.text}>These are the facilities the campsite has</Text> */}
          {campsite.category && ( <><Text style={styles.sections}>Category</Text>
          <Text style={styles.text}>{campsite.category.category_name}</Text></> )}
          <Text style={styles.sections}>Prices</Text>
          <Text style={styles.text}>Parking: £{campsite.parking_cost}</Text>
          <Text style={styles.text}>Facilities: £{campsite.facilities_cost}</Text>
        </View>
        <View style={styles.reviewsContainer}>
          <CampsiteReviews campsite_id = {campsite_id}/>
          <Text style={styles.sections}>Reviews</Text>
          <Text style={styles.text}>This is where reviews go</Text>
          <ReviewForm />
        </View>
        
        </View>
         </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#fff', 
      },
      scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20, 
        paddingTop: 100, 
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
      contactContainer: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 16,
      },
      contactContainer: {
        marginBottom: 1,
        alignItems: 'center', 
      },
      contactItem: {
        marginBottom: 1,
        alignItems: 'center', 
      },
      contactInfo: {
        fontSize: 16,
        textAlign: 'center', 
        marginBottom: 4,
      },
     
});

export default IndividualCampsiteView;
