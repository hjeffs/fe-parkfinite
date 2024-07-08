// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
// import { TextInput } from 'react-native';
// import { useState, useEffect } from 'react';
// import {getReviewByCampsiteID} from '../utils/api'
// import {useRoute} from '@react-navigation/native'


// export const CampsiteReviews = ({campsite_id}) => {
//   const [reviews, setReviews] = useState([])
//   const route = useRoute();


//   campsite_id  = route.params;
//   console.log(route.params)

//   useEffect(() => {
//     getReviewByCampsiteID(campsite_id)
//     .then((data) => {
//       console.log(data)
//       setReviews(data)
      
//     })
//   }, [campsite_id])

//   return (
//    <View>
//     <Text> REVIEWS ARE COMING </Text>
//    </View>
//   )

// }

 
  