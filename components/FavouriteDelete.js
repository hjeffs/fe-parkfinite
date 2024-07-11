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
import { deleteFavourite } from "../utils/api";

export const FavouriteDeleteButton = ({campsiteId, setSelectedCampsite}) => {
  const { user, setUser } = useContext(UserContext);

  const handleDeleteFavouritePress = () => {
    setSelectedCampsite(null)
    deleteFavourite(user.username, campsiteId);
    getUserbyUsername().then(user => {
      setUser(user)
    })
  };

  return (
    <TouchableOpacity
      style={styles.favouritesButton}
      onPress={handleDeleteFavouritePress}
    >
      <Icon name="heart" size={15} color="#b22222" style={styles.icon} />
      <Text style={styles.buttonText}>DELETE FAVOURITE</Text>
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
