import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { UserContext } from "../utils/UserContext";
import { useContext } from "react";

const UsernameButton = ({ title, onPress }) => {
  const { user, setUser } = useContext(UserContext);
  
  const handleUsernamePress = () => {}
  
  return (
    <TouchableOpacity
      style={styles.usernameButton}
      onPress={handleUsernamePress}
    >
    <Text style={styles.buttonText}>{user.username} {user.username !== 'Guest' ? ( <Text style={styles.buttonText}>{user.xp} XP</Text> ) : null}</Text>
   
    
     </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  usernameButton: {
    position: "absolute",
    left: 120,
    right:120,
    backgroundColor: "#2ECC71",
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    zIndex: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center"
  },
});

export default UsernameButton;
