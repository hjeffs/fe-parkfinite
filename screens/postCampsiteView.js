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
      <Header subtitle={"Post a new campsite "}></Header>
      <View style={styles.container}>

        <View style={styles.sectionContainer}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  container: {
    top: 200,
    width: 500,
    flex: 1,
    justifyContent: "flex",
    alignItems: "center",
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

  text: {
    textAlign: "center",
  },
});

export default PostCampsiteView;
