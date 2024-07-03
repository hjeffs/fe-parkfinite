import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import SearchCampsiteView from "./searchCampsiteView";

const IndividualCampsiteView = ({campsite_id}) => {
    return (
        <View style={styles.container}>
            <Header />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
});

export default IndividualCampsiteView;
