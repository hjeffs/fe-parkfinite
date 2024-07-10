import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { UserProvider } from "./utils/UserContext";
import { CustomMarkerContextProvider } from "./utils/CustomMarkerContext";

export default function App() {
  return (
    <UserProvider>
      <CustomMarkerContextProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </CustomMarkerContextProvider>
    </UserProvider>
  );
}
