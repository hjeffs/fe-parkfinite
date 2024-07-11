import React from "react";
import { Button, View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Images = ({ campsite }) => {
  const photos = campsite.photos && Array.isArray(campsite.photos)
    ? campsite.photos
    : [];

  return (
    <View style={styles.imageContainer}>
      {photos.length > 0 ? (
        <ScrollView horizontal={true}>
          {photos.map((photo, index) => (
            <Image
              key={index}
              style={styles.images}
              source={{ uri: photo.campsite_photo_url }}
            />
          ))}
        </ScrollView>
      ) : (
        <Image
        style={styles.images}
        source={{ uri: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png" }}
      />
      )}
    </View>
  );
};

const styles = StyleSheet.create({images: {
    width: 150,
    height: 150,
    margin: 20,
    marginLeft: 20,
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