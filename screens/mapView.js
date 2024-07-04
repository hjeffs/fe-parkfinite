import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Text, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import { getCampsites } from '../utils/api';

const locations = getCampsites()
// [
//   { id: '1', title: 'Campsite 1', description: 'Beautiful campsite in the countryside', latitude: 51.5074, longitude: -0.1278 }, // London
//   { id: '2', title: 'Campsite 2', description: 'Peaceful site near the coast', latitude: 52.3555, longitude: -1.1743 }, // Midlands
//   { id: '3', title: 'Campsite 3', description: 'Family-friendly campsite with amenities', latitude: 53.483959, longitude: -2.244644 }, // Manchester
//   { id: '4', title: 'Campsite 4', description: 'Remote campsite with stunning views', latitude: 54.978252, longitude: -1.617439 }, // Newcastle
//   { id: '5', title: 'Campsite 5', description: 'Lakeside campsite perfect for fishing', latitude: 54.8985, longitude: -2.9323 }, // Lake District
// ];

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [customMarker, setCustomMarker] = useState(null);
  const [selectedCampsite, setSelectedCampsite] = useState(null); // State for selected campsite
  const navigation = useNavigation(); // Use useNavigation for navigation

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Please allow location access to use this feature.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
    })();
   
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites');
      if (jsonValue !== null) {
        setFavorites(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const saveFavorite = async (location) => {
    try {
      const newFavorites = [...favorites, location];
      setFavorites(newFavorites);
      await AsyncStorage.setItem('@favorites', JSON.stringify(newFavorites));
      Alert.alert('Saved!', 'Campsite added to favorites.');
    } catch (error) {
      console.error('Error saving favorite:', error);
      Alert.alert('Error', 'Failed to save campsite to favorites.');
    }
  };

  const handleMapPress = (e) => {
    const { coordinate } = e.nativeEvent;
    setCustomMarker(coordinate);
  };

  const handleNavigate = async (location) => {
    if (currentLocation) {
      setDestination(location);
    } else {
      Alert.alert('Location not available', 'Unable to retrieve your current location.');
    }
  };

  const goToIndividualCampsite = (location) => {
    navigation.navigate('IndividualCampsiteView', { location });
  };

  return (
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
        {currentLocation && (
          <Marker
            coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}
            title="Current Location"
          />
        )}
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.title}
            description={location.description}
            onPress={() => setSelectedCampsite(location)} // Set selected campsite on marker press
          />
        ))}
        {destination && (
          <>
            <Marker
              coordinate={{ latitude: destination.latitude, longitude: destination.longitude }}
              title={destination.title}
              pinColor="green"
            />
            {currentLocation && (
              <Polyline
                coordinates={[
                  { latitude: currentLocation.latitude, longitude: currentLocation.longitude },
                  { latitude: destination.latitude, longitude: destination.longitude },
                ]}
                strokeColor="#3498DB"
                strokeWidth={3}
              />
            )}
          </>
        )}
      </MapView>

      {selectedCampsite && (
        <View style={styles.campsiteInfo}>
          <Text style={styles.title}>{selectedCampsite.title}</Text>
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
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  campsiteInfo: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Map;
