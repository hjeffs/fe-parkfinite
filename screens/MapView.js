import React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";
import Map from "../components/Map";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import SearchBarInput from "../components/SearchBarInput";
import IndividualCampsiteView from "./IndividualCampsiteView";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
import Header from "../components/Header";
import UsernameButton from "../components/UsernameButton";

const SearchCampsiteView = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);

  const handleUsernamePress = () => {};


  return (
    <>
      <View style={styles.container}>
        <Map />
        <Header subtitle={"The world is yours to explore... "}></Header>
        <UsernameButton/>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    justifyContent: "flex",
    flex: 1,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default SearchCampsiteView;
