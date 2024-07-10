import { UserContext } from "../utils/UserContext";
import { useState } from "react";
import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { patchUserXP, postReview } from "../utils/api";
import RNPickerSelect from "react-native-picker-select";
import uuid from "react-native-uuid";
import { Alert } from "react-native";

export const PostReview = ({ setReviews, campsite_id }) => {
  const [reviewBody, setReviewBody] = useState("");
  const [rating, setRating] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const ratings = [
    { label: "1 star", value: 1 },
    { label: "2 stars", value: 2 },
    { label: "3 stars", value: 3 },
    { label: "4 stars", value: 4 },
    { label: "5 stars", value: 5 },
  ];

  const handleReviewInput = (input) => {
    setReviewBody(input);
  };

  const handleReviewSubmit = () => {
    if (!rating) {
      Alert.alert("Error", "Please select a rating", [{ text: "OK" }], {
        cancelable: false,
      });
    } else {
      const commentData = {
        review_id: uuid.v4(),
        comment: reviewBody,
        username: user.username,
        rating: rating,
      };
      setReviews((currReviews) => [commentData, ...currReviews]);
      setUser({ username: user.username, xp: user.xp + 25 });
      patchUserXP(user.username, 25);
      postReview(campsite_id, commentData);
      setRating(null);
      setReviewBody("");
    }
  };

  return (
    <View style={styles.reviewFormContainer}>
      <Text style={styles.text}>Leave a review</Text>

      <RNPickerSelect
        onValueChange={(value) => setRating(value)}
        items={ratings}
        placeholder={{ label: "Select a rating...", value: null }}
        style={pickerSelectStyles}
        value={rating}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        onChangeText={handleReviewInput}
        value={reviewBody}
        placeholder="Write a review..."
        placeholderTextColor="#888"
        multiline
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleReviewSubmit}
      >
        <Text style={styles.submitButtonText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  reviewFormContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "darkseagreen",
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    verticalAlign: "top", // Ensures text starts at the top of the input
  },
  submitButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 5,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "#fff",
    marginBottom: 10,
  },
});
