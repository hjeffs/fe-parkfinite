import React, { useState } from "react";
import { Button, View, Text, TextInput } from "react-native";
import { formStyles } from "./PostCampsiteFormStyles";

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({});

  const handleChange = (name, value) => {
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <View style={formStyles.fieldset}>
      <Text style={formStyles.label}>Add a contact for the campsite...</Text>
      <TextInput
        style={formStyles.input}
        onChangeText={(text) => handleChange("campsite_contact_name", text)}
        value={contact.campsite_contact_name}
        placeholder="Contact Name"
      />
      <View style={formStyles.rowContainer}>
        <View style={formStyles.halfInputContainer}>
          <TextInput
            style={formStyles.input}
            onChangeText={(text) =>
              handleChange("campsite_contact_phone", text)
            }
            value={contact.campsite_contact_phone}
            placeholder="Contact Phone"
            keyboardType="phone-pad"
          />
        </View>

        <View style={formStyles.halfInputContainer}>
          <TextInput
            style={formStyles.input}
            onChangeText={(text) =>
              handleChange("campsite_contact_email", text)
            }
            value={contact.campsite_contact_email}
            placeholder="Contact Email"
            keyboardType="email-address"
          />
        </View>
      </View>
      <Button
        title="Add Contact"
        onPress={() => {
          addContact(contact);
          setContact({});
        }}
      />
    </View>
  );
};

export default ContactForm;
