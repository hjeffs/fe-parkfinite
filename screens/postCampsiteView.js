import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";

import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";

import Header from "../components/Header";
import { formStyles } from "../components/PostCampsiteForm/PostCampsiteFormStyles";
import MonthPicker from "../components/PostCampsiteForm/MonthPicker";
import ContactForm from "../components/PostCampsiteForm/ContactForm";
import CategoryPicker from "../components/PostCampsiteForm/CategoryPicker";
import CostInputs from "../components/PostCampsiteForm/CostInputs";
import Button from "../components/Button";

import { postCampsite } from "../utils/api";

const PostCampsiteView = () => {
  const { user } = useContext(UserContext);
  const [newCampsite, setNewCampsite] = useState({
    contacts: []
  });

  const handleChange = (name, value) => {
    setNewCampsite((prev) => {
      const updated = { ...prev, [name]: value };
      return updated;
    });
  };

  const addContact = (newContact) => {
    setNewCampsite((prev) => ({
      ...prev,
      contacts: [...prev.contacts, newContact],
    }));
    alert("A contact has been added for sumbission...");
  };

  const handleSubmitCampsite = (newCampsite) => {
    const campsiteToSubmit = {
      ...newCampsite,
      added_by: user.username,
      campsite_latitude: 1.78,
      campsite_longitude: 54.321,
      photos: [{ campsite_photo_url: "https://picsum.photos/150/150" }],
    };

    postCampsite(campsiteToSubmit)
      .then(() => {
        setNewCampsite({
          contacts: []
        });
      })
      .catch((err) => {
        setNewCampsite({
          contacts: [],
        });
      });
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
    >
      <Header subtitle={"Post a new campsite... get 100xp!"} />
      <View style={styles.container}>
        <Text style={formStyles.label}>
          Name and description for your spot... (*required)
        </Text>
        <TextInput
          value={newCampsite.campsite_name}
          onChangeText={(text) => handleChange("campsite_name", text)}
          placeholder="Insert parkup name... "
          placeholderTextColor="999"
          multiline
          style={formStyles.input}
        />
        <TextInput
          value={newCampsite.description}
          onChangeText={(text) => handleChange("description", text)}
          placeholder="Insert description..."
          placeholderTextColor="111"
          multiline
          style={[styles.input, styles.textArea]}
        />
        <CategoryPicker
          categoryId={newCampsite.category_id}
          handleCategoryChange={handleChange}
        />

        <CostInputs
          parkingCost={newCampsite.parking_cost}
          facilities_cost={newCampsite.facilities_cost}
          handleCostChange={handleChange}
        />

        <MonthPicker
          openingMonth={newCampsite.opening_month}
          closingMonth={newCampsite.closing_month}
          handleMonthChange={handleChange}
        />
        <ContactForm addContact={addContact} />
      </View>
      <Button
        text="Submit New Campsite!"
        onPress={() => {
          handleSubmitCampsite(newCampsite);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  container: {
    backgroundColor: "darkseagreen",
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 180,
    padding: 10,
  },
});

export default PostCampsiteView;
