import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress }) => {
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
    width: "60",
    height: "60",
    alignItems: "center",
    absolute: "bottom",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 28,
  },
});

export default Button;
