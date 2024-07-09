import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Images =  ({campsite}) => {
    return (
        <View style={styles.imageContainer}>
      {campsite.photos && Array.isArray(campsite.photos) ? (
        campsite.photos.map((photo, index) => (
          <Image
            key={index} // Adding a key is important for lists in React
            style={styles.images}
            source={{ uri: photo.campsite_photo_url }}
          />
        ))
      ) : (
        <Text>No photos available</Text>
      )}
    </View>
)
}
const styles = StyleSheet.create({images: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 8, 
    marginHorizontal: 5,   
},
imageContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 5,
    
}
});

export default Images