import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";

import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { CustomMarkerContext } from "../utils/CustomMarkerContext";

import Header from "../components/Header";
import { formStyles } from "../components/PostCampsiteForm/PostCampsiteFormStyles";
import MonthPicker from "../components/PostCampsiteForm/MonthPicker";
import ContactForm from "../components/PostCampsiteForm/ContactForm";
import ContactList from "../components/PostCampsiteForm/ContactList"
import CategoryPicker from "../components/PostCampsiteForm/CategoryPicker";
import CostInputs from "../components/PostCampsiteForm/CostInputs";
import Button from "../components/Button";

import { patchUserXP, postCampsite } from "../utils/api";
import { useNavigation } from "@react-navigation/native";
import UsernameButton from "../components/UsernameButton";
const PostCampsiteView = () => {
  const navigation = useNavigation()
  const { user, setUser } = useContext(UserContext);
  const {customMarker, setCustomMarker} = useContext(CustomMarkerContext)
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

  const deleteContact = (index) => {
    setNewCampsite(prev => ({
      ...prev,
      contacts: prev.contacts.filter((_, i) => i !== index)
    }));
  };

  const handleSubmitCampsite = (newCampsite) => {
    const campsiteToSubmit = {
      ...newCampsite,
      added_by: user.username,
      campsite_latitude: customMarker["latitude"],
      campsite_longitude: customMarker["longitude"],
      photos: [{ campsite_photo_url: "https://picsum.photos/150/150" }],
    };
    postCampsite(campsiteToSubmit)
      .then(() => {
        setNewCampsite({
          contacts: []
        });
        patchUserXP(user.username, 100)
        setUser({ username: user.username, xp: user.xp + 100 });
        setCustomMarker()
        navigation.navigate("SearchCampsiteView")
      })
      .catch((err) => {
        setNewCampsite({
          contacts: [],
        });
      });
  };

  return (
    <>
    <UsernameButton/>
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
          style={[formStyles.input, styles.textArea]}
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
        <ContactList
        contacts={newCampsite.contacts}
        deleteContact={deleteContact}
      />
      </View>
      <Button
        title="Submit New Campsite!"
        onPress={() => {
          handleSubmitCampsite(newCampsite);
        }}
      />
    </ScrollView>
    </>
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
