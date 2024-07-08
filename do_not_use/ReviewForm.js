// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
// import { TextInput } from 'react-native';
// import { useState, useEffect } from 'react';
// import {getReviewByCampsiteID} from '../utils/api'
// import {useRoute} from '@react-navigation/native'







// export const ReviewForm = () => {
//     const [review, setReview] = useState('')

//     const handleReviewInput = (input) => {
//         setReview(input)
//     }
//     const handleReviewSubmit = () => {
//         console.log("Sending review")
//     }

//     return (
//         <View style={styles.reviewFormContainer}>
      
//             <Text style={styles.text}>Leave a review</Text>
            
//             <TextInput style={[styles.input, styles.textArea]}
//     onChangeText={handleReviewInput}
//     value={review}
//     placeholder="Write a review..."
//     placeholderTextColor="#888"
//     multiline
//       />
//      <TouchableOpacity style={styles.submitButton} onPress={handleReviewSubmit}>
//             <Text style={styles.submitButtonText}>Submit Review</Text>
//           </TouchableOpacity>
//         </View>
//     );
// };


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
//     reviewFormContainer: {
//         width: '100%',
//         padding: 20,
//         backgroundColor: 'darkseagreen',
//         borderRadius: 10,
//         marginTop: 20,
//       },
//       input: {
//         width: '100%',
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginBottom: 10,
//         backgroundColor: '#fff',
//       },
//       textArea: {
//         height: 100,
//         textAlignVertical: 'top', // Ensures text starts at the top of the input
//       },
//       submitButton: {
//         backgroundColor: 'green',
//         paddingVertical: 10,
//         borderRadius: 5,
//         alignItems: 'center',
//       },
//       submitButtonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//       },
    
//       text: {
//         fontSize: 20,
//         textAlign: 'center'
//       }
// });


// export default ReviewForm

