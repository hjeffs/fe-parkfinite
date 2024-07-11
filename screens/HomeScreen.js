import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { ImageBackground, Image } from "react-native";
import Button from "../components/Button";
import ButtonGuest from "../components/ButtonGuest";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { UserContext } from "../utils/UserContext";
import { useContext, useEffect } from "react";
import { getUsers, getUserbyUsername } from "../utils/api";

function HomeScreen() {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation();

  function handleLogin() {
    getUserbyUsername().then((user) => {
      console.log(user);
      setUser(user);
    });
    navigation.navigate("SearchCampsiteView");
  }

  function handleGuest() {
    setUser({ username: "Guest", favourites: [] });
    navigation.navigate("SearchCampsiteView");
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header title="Parkfinite" /> */}
      <ImageBackground
        source={require("../assets/newBackground2.jpg")}
        style={styles.background}
      >
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />
          <Button title="Log In" onPress={handleLogin} />
        </View>
        <ButtonGuest
          title="Continue as guest"
          onPress={handleGuest}
          style={styles.continueAsGuestButton}
        />
        <Text style={styles.label}>
          Guests on this site are restricted to viewing basic campsite info and
          are unable to post, comment or use navigation.
        </Text>
        <Text style={styles.label2}>
          Please join our community to contribute and gain XP!
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: 60,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "static",
    marginTop: 160,
  },
  button: {
    marginHorizontal: 100,
  },

  continueAsGuestButton: {
    fontSize: 3,
  },

  label: {
    padding: 50,
    color: "#333",
    textAlign: "center",
    justifyContent: "center",
    position: "absolute",
    marginHorizontal: 40,
    fontSize: 16,
    fontWeight: "bold",
    bottom: 80,
  },
  label2: {
    padding: 50,
    color: "#333",
    textAlign: "center",
    justifyContent: "center",
    position: "absolute",
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
    bottom: 35,
  },
});

export default HomeScreen;
