import {
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";

import MapView, { Marker, Polyline } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "../utils/GoogleMapsApiKey";
import * as Location from "expo-location";

import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";

import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { CustomMarkerContext } from "../utils/CustomMarkerContext";

import { getCampsites, getFavourites } from "../utils/api";

const Map = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { user } = useContext(UserContext);
  const { customMarker, setCustomMarker } = useContext(CustomMarkerContext);
  
  const [destination, setDestination] = useState(null)
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedCampsite, setSelectedCampsite] = useState(null);
  const [campsites, setCampsites] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [selectedView, setSelectedView] = useState("all");
  const [region, setRegion] = useState({
    latitude: 53.483959,
    longitude: -2.244644,
    latitudeDelta: 5.0,
    longitudeDelta: 5.0,
  });

  useEffect(() => {
    getFavourites(user.username).then((data) => {
      setFavourites(data);
    });
  }, [user.username]);

  useEffect(() => {
    getCampsites().then((campsites) => {
      setCampsites(campsites);
    });
  }, [customMarker]);

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
  }, []);

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
    navigation.navigate("IndividualCampsiteView", {
      campsiteId: campsite.campsite_id,
    });
  };

  const goToPostCampsite = () => {
    navigation.navigate("PostCampsiteView");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pickerAndSearchContainer}>
        <Picker
          selectedValue={selectedView}
          onValueChange={(itemValue) => setSelectedView(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All Campsites" value="all" />
          <Picker.Item label="Favourites" value="favourites" />
        </Picker>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            if (details) {
              const location = {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              };
              setRegion(location);
            } else {
              console.log("No details available");
            }
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          styles={{
            container: {
              flex: 1,
              marginLeft: 10,
              zIndex: 1,
            },
            textInput: {
              height: 40,
              fontSize: 16,
            },
            listView: { backgroundColor: "white" },
          }}
        />
      </View>
      <MapView style={styles.map} region={region} onPress={handleMapPress}>
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Current Location"
          />
        )}

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

      {customMarker && (
        <Button title="Post New Campsite" onPress={() => goToPostCampsite()} />
      )}

      {selectedCampsite && (
        <View style={styles.campsiteInfo}>
          <Text style={styles.title}>{selectedCampsite.name} </Text>
          <Text>{selectedCampsite.average_rating.toFixed(1)}⭐ </Text>
          <Text style={styles.description}>{selectedCampsite.description}</Text>
          <Button
            title="Go to Individual Campsite"
            onPress={() => goToIndividualCampsite(selectedCampsite)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerAndSearchContainer: {
    marginTop: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "white",
    zIndex: 1,
    paddingVertical: 1,
  },
  picker: {
    flex: 0.6,
    height: 40,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  postButton: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: [{ translateX: -75 }],
    backgroundColor: "#3498DB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  postButtonText: {
    color: "white",
    fontSize: 16,
  },
  campsiteInfo: {
    position: "absolute",
    bottom: 80,
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
});

export default Map;
