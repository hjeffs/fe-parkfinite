import { UserContext } from "../utils/UserContext";
import { useState } from "react";
import { useContext } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, RNPickerSelect } from "react-native";
import { postReview } from "../utils/api";



export const PostReview = ({setReviews, campsite_id}) => {
    const [reviewBody, setReviewBody] = useState('')
    const [rating, setRating] = useState(0)
    const user = useContext(UserContext)
    const ratings = [
        {label: "1 star", value: 1},
        {label: "2 star", value: 2},
        {label: "3 star", value: 3},
        {label: "4 star", value: 4},
        {label: "5 star", value: 5}
    ]

    const handleReviewInput = (input) => {
                setReviewBody(input)
            }
    const handleRatingInput = (ratingInput) => {
        setRating(ratingInput)
    }                
    const handleReviewSubmit = () => {
               const commentData = {comment: reviewBody, username: user, rating: rating}
               setReviews((currReviews) => [commentData, ...currReviews]) 
               postReview(campsite_id, commentData)
            }
    
    return (
        
                    <View style={styles.reviewFormContainer}>
                  
                        <Text style={styles.text}>Leave a review</Text>

                         {/* <Text >Select a rating:</Text><RNPickerSelect onValueChange={(value) => setRating(value)} ratings={ratings} placeholder={{ label: "Select an option..."}} />  */}
                        <TextInput style={[styles.input, styles.textArea]}
                onChangeText={handleReviewInput}
                value={reviewBody}
                placeholder="Write a review..."
                placeholderTextColor="#888"
                multiline
                  />
                 <TouchableOpacity style={styles.submitButton} onPress={handleReviewSubmit}>
                        <Text style={styles.submitButtonText}>Submit Review</Text>
                      </TouchableOpacity>
                    </View>
 );
};

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2c3e50',
        },
        reviewFormContainer: {
            width: '100%',
            padding: 20,
            backgroundColor: 'darkseagreen',
            borderRadius: 10,
            marginTop: 20,
          },
          input: {
            width: '100%',
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginBottom: 10,
            backgroundColor: '#fff',
          },
          textArea: {
            height: 100,
            verticalAlign: 'top', // Ensures text starts at the top of the input
          },
          submitButton: {
            backgroundColor: 'green',
            paddingVertical: 10,
            borderRadius: 5,
            alignItems: 'center',
          },
          submitButtonText: {
            color: '#fff',
            fontWeight: 'bold',
          },
        
          text: {
            fontSize: 20,
            textAlign: 'center'
          }
    });
