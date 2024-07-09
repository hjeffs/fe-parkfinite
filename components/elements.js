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

const SearchBarInput = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (input) => {
    setSearchInput(input);
  };

  const handleSubmit = () => {
    console.log("Search in progress");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        onChangeText={handleInputChange}
        value={searchInput}
        placeholder="Search Campsites..."
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export const AddToFavouritesButton = () => {
  const handleAddToFavouritesPress = () => {
    // Handle add to favourites press
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
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
  searchBar: {
    top: 120,
    position: "center",
    width: 200,
    backgroundColor: "#D3F8E2",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  favouritesButton: {
    position: "absolute",
    top: 70,
    left: 20,
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

export default SearchBarInput;
