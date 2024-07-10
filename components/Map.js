import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getCampsites, getFavourites } from "../utils/api";
import { UserContext } from "../utils/UserContext";
import { CustomMarkerContext } from "../utils/CustomMarkerContext";
import { useContext } from "react";

const Map = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [currentLocation, setCurrentLocation] = useState(null);
  // const [destination, setDestination] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const {customMarker, setCustomMarker} = useContext(CustomMarkerContext)
  const [selectedCampsite, setSelectedCampsite] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const [campsites, setCampsites] = useState([]);
  const [selectedView, setSelectedView] = useState("all");



  useEffect(() => {
    getCampsites().then((campsites) => {
      setCampsites(campsites);
    });
  }, []);

  useEffect(() => {
    console.log(user.username, "username");
    getFavourites(user.username).then((data) => {
      setFavourites(data);
    });
  }, [user.username]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission needed",
          "Please allow location access to use this feature."
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
    })();

    // loadFavorites();
  }, []);

  // const loadFavorites = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("@favorites");
  //     if (jsonValue !== null) {
  //       setFavorites(JSON.parse(jsonValue));
  //     }
  //   } catch (error) {
  //     console.error("Error loading favorites:", error);
  //   }
  // };

  // const saveFavorite = async (location) => {
  //   try {
  //     const newFavorites = [...favorites, location];
  //     setFavorites(newFavorites);
  //     await AsyncStorage.setItem("@favorites", JSON.stringify(newFavorites));
  //     Alert.alert("Saved!", "Campsite added to favorites.");
  //   } catch (error) {
  //     console.error("Error saving favorite:", error);
  //     Alert.alert("Error", "Failed to save campsite to favorites.");
  //   }
  // };

  const handleMapPress = (e) => {
    const { coordinate } = e.nativeEvent;
    setCustomMarker(coordinate);
  };

  const handleNavigate = async (location) => {
    if (currentLocation) {
      setDestination(location);
    } else {
      Alert.alert(
        "Location not available",
        "Unable to retrieve your current location."
      );
    }
  };

  const goToIndividualCampsite = (campsite) => {
    navigation.navigate("IndividualCampsiteView", campsite.campsite_id);
  };

  const goToPostCampsite = () => {
    navigation.navigate("PostCampsiteView");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedView}
          onValueChange={(itemValue) => setSelectedView(itemValue)}
        >
          <Picker.Item label="All Campsites" value="all" />
          <Picker.Item label="Favourites" value="favourites" />
        </Picker>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 53.483959,
            longitude: -2.244644,
            latitudeDelta: 5.0,
            longitudeDelta: 5.0,
          }}
          onPress={handleMapPress}
        >
          {/* {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Current Location"
          />
        )} */}
          {selectedView === "all"
            ? campsites.map((location) => (
                <Marker
                  key={location.campsite_id}
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }}
                  title={location.name}
                  description={location.description}
                  onPress={() => setSelectedCampsite(location)}
                />
              ))
            : favourites.map((location) => (
                <Marker
                  key={location.campsite_id}
                  coordinate={{
                    latitude: location.campsite_latitude,
                    longitude: location.campsite_longitude,
                  }}
                  title={location.campsite_name}
                  description={location.description}
                  onPress={() => setSelectedCampsite(location)}
                />
              ))}

          {customMarker && (
            <>
              <Marker
                coordinate={{
                  latitude: customMarker.latitude,
                  longitude: customMarker.longitude,
                }}
                title={customMarker.title}
                pinColor="blue"
              />
            </>
          )}

          {/* {destination && (
          <>
            <Marker
              coordinate={{
                latitude: destination.latitude,
                longitude: destination.longitude,
              }}
              title={destination.title}
              pinColor="green"
            />
            {currentLocation && (
              <Polyline
                coordinates={[
                  {
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                  },
                  {
                    latitude: destination.latitude,
                    longitude: destination.longitude,
                  },
                ]}
                strokeColor="#3498DB"
                strokeWidth={3}
              />
            )}
          </>
        )} */}
        </MapView>

        {customMarker && <Button title="Post New Campsite" onPress={() => goToPostCampsite()} />}

        {selectedCampsite && (
          <View style={styles.campsiteInfo}>
            <Text style={styles.title}>{selectedCampsite.name} </Text>
            <Text>{selectedCampsite.average_rating}⭐ </Text>
            <Text style={styles.description}>
              {selectedCampsite.description}
            </Text>
            <Button
              title="Go to Individual Campsite"
              onPress={() => goToIndividualCampsite(selectedCampsite)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: "white",
    padding: 10,
    zIndex: 1, // Ensure the Picker is above the MapView
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  campsiteInfo: {
    position: "absolute",
    bottom: 50,
    left: 10,
    right: 10,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 5,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  buttonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Map;
