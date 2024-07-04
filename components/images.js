import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Images =  () => {
    return (
        <View style={styles.imageContainer}>
<Image
style={styles.images}
source={require('../assets/campsiteImage1.png')}
/>
<Image
style={styles.images}
source={require('../assets/campsiteImage2.png')}
/>

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