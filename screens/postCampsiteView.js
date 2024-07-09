import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import UsernameButton from "../components/UsernameButton";

const PostCampsiteView = () => {
  const { user, setUser } = useContext(UserContext);
  const [newCampsite, setNewCampsite] = useState({});

  const handleUsernamePress = () => {};

  // const route = useRoute();
  // const campsite_id  = route.params;

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.container}>
        <Header subtitle={"Post a new campsite "}></Header>

        <View style={styles.sectionContainer}></View>
      </View>
    </ScrollView>
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
    width: "100%",
    flex: -1,
    padding: 20,
    backgroundColor: "darkseagreen",
    marginBottom: 20,
    borderRadius: 10,
  },
  imagesContainer: {
    paddingTop: 50,
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
  reviewsContainer: {
    width: "100%",
    backgroundColor: "darkseagreen",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
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

export default PostCampsiteView;
