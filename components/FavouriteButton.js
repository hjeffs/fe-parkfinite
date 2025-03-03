import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { getUserbyUsername, postFavourite } from "../utils/api";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";

export const AddToFavouritesButton = ({campsiteId}) => {
  const { user, setUser } = useContext(UserContext);

  const handleAddToFavouritesPress = () => {
    postFavourite(user.username, campsiteId);
    getUserbyUsername().then(user => {
      setUser(user)
    })
  };

  return (
    <TouchableOpacity
      style={styles.favouritesButton}
      onPress={handleAddToFavouritesPress}
    >
      <Icon name="heart" size={15} color="#b22222" style={styles.icon} />
      <Text style={styles.buttonText}>ADD TO FAVOURITES</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  favouritesButton: {
    position: "absolute",
    bottom: 0,
    right: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffb6c1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    zIndex: 10,

    alignSelf: "left",
  },
  icon: {
    marginRight: 5,
  },
});
