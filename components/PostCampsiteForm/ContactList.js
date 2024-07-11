import React from "react";
import { View, Text, Button } from "react-native";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <View>
      {contacts.length > 0 ? (
        contacts.map((contact, index) => (
          <View key={index}>
            <Text>
              Contact {index + 1}: {contact.campsite_contact_name} -{" "}
              {contact.campsite_contact_phone} {contact.campsite_contact_email}
            </Text>
            <Button title="Delete" onPress={() => deleteContact(index)} />
          </View>
        ))
      ) : (
        <Text>No contacts added yet.</Text>
      )}
    </View>
  );
};

export default ContactList;
