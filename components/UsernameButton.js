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
    <Text style={styles.buttonText}>{user.username}</Text>
    {user.username !== 'Guest' ? ( <Text style={styles.buttonText}>{user.xp} XP</Text> ) : null}
    
     </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  usernameButton: {
    position: "absolute",
    top: 120,
    right: 20,
    backgroundColor: "#2ECC71",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    zIndex: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 10,
  },
});

export default UsernameButton;
