import React, { useEffect, useState } from "react";
import { getReviewByCampsiteID } from "../utils/api";
import { View, Text, StyleSheet } from "react-native";
import { PostReview } from "./PostReview";
import { getStars } from "./GetStars";

export const ReviewList = ({ campsite_id }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewByCampsiteID(campsite_id)
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setReviews([]);
      });
  }, [campsite_id]);

  return (
    <View>
      <PostReview setReviews={setReviews} campsite_id={campsite_id} />
        {reviews.map((review) => {
          return (
            <View key={review.review_id} style={styles.reviewBox}>
              <Text style={styles.username}>{review.username}</Text>
              <Text style={styles.stars}>{getStars(review.rating)}</Text>
              <Text>{review.comment}</Text>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  reviewBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  username: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  stars: {
    marginBottom: 7,
  },
});
