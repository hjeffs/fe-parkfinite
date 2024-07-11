import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import { FlatList } from "react-native-web";
import Images from "../components/images";
import { AddToFavouritesButton } from "../components/FavouriteButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getCampsiteByID } from "../utils/api";
import { useState, useEffect } from "react";

import { UserContext } from "../utils/UserContext";
import { useContext } from "react";

import { ReviewList } from "../components/ReviewList";
import UsernameButton from "../components/UsernameButton";
import { getStars } from "../components/GetStars";
import Button from "../components/Button"

const IndividualCampsiteView = () => {
  const { user, setUser } = useContext(UserContext);
const navigation = useNavigation()



  const handleUsernamePress = () => {};

  const route = useRoute();
  const { campsiteId } = route.params; 
  const [campsite, setCampsite] = useState({});

  useEffect(() => {
    if (campsiteId) {
      getCampsiteByID(campsiteId)
      .then((data) => {
        setCampsite(data);
      })
      .catch((err) => {
        alert("Couldn't find campsite, please try reloading");
      });
    }
  }, [campsiteId]);


  return (
    <>
      <UsernameButton />
      <AddToFavouritesButton campsiteId={campsiteId}/>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Header subtitle={campsite.campsite_name} />

        <View style={styles.imagesContainer}>
          <Images campsite={campsite} />
        </View>

        <View style={styles.sectionContainer}>


        

          <Text style={styles.sections}>Contact Information</Text>
          <View style={styles.contactContainer}>
            {Array.isArray(campsite.contacts) &&
              campsite.contacts.map((person) => (
                <View
                key={person.campsite_contact_id}
                style={styles.contactItem}
                >
                  <Text style={styles.contactInfo}>
                    Contact Name: {person.campsite_contact_name}
                  </Text>
                  <Text style={styles.contactInfo}>
                    Phone: {person.campsite_contact_phone}
                  </Text>
                  <Text style={styles.contactInfo}>
                    Email: {person.campsite_contact_email || "N/A"}
              </Text>
                </View>
              ))}
              <Text style={styles.contactItem}>{getStars(campsite.average_rating)}</Text>
              <Text style={styles.contactItem}>Average Rating: {campsite.average_rating && campsite.average_rating.toFixed(1)}</Text>
          </View>
          {campsite.category && (
            <>
              <Text style={styles.sections}>Category</Text>
              <Text style={styles.text}>{campsite.category.category_name}</Text>
            </>
          )}
          <Text style={styles.sections}>Prices</Text>
          <Text style={styles.text}>Parking: £{campsite.parking_cost}</Text>
          <Text style={styles.text}>
            Facilities: £{campsite.facilities_cost}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sections}>Reviews</Text>
          {campsite.campsite_id && <ReviewList campsite_id={campsiteId} />}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    width: 500,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    margin: 30,
  },
  usernameButton: {
    position: "absolute",
    top: 70,
    right: 20,
    backgroundColor: "#2ECC71",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    zIndex: 10,
  },
  sections: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionContainer: {
    width: "80%",
    flex: -1,
    padding: 20,
    backgroundColor: "darkseagreen",
    marginBottom: 20,
    borderRadius: 10,
  },
  imagesContainer: {
    paddingTop: 65,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  images: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  text: {
    textAlign: "center",
  },
  contactContainer: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 16,
  },
  contactContainer: {
    marginBottom: 1,
    alignItems: "center",
  },
  contactItem: {
    marginBottom: 1,
    alignItems: "center",
  },
  contactInfo: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 4,
  },
});

export default IndividualCampsiteView;
