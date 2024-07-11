import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonGuest = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    borderRadius: 5,
    marginVertical: 100,
    width: "30",
    height: "60",
    alignItems: "center",
    absolute: "bottom",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 160,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ButtonGuest;