import React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";
import Map from "../components/Map";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import SearchBarInput from "../components/elements";
import IndividualCampsiteView from "./IndividualCampsiteView";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
import Header from "../components/Header";

const SearchCampsiteView = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);

  const handleUsernamePress = () => {};


  return (
    <>
      <View style={styles.container}>
        <Map />
        <Header subtitle={"Post a new campsite "}></Header>
        <SearchBarInput />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex",
    flex: 1,
  },
  usernameButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#2ECC71",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    zIndex: 10,
  },
  continueButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#3498DB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    zIndex: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default SearchCampsiteView;
