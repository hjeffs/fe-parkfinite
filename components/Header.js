import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import UsernameButton from "../components/UsernameButton";


const Header = ({ subtitle }) => {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.headerTitle}>{"PARKFINITE"}</Text>
            <Text style={styles.headerSubtitle}>{subtitle}</Text>
            <UsernameButton/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 110,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        marginTop: 35
    },
    headerSubtitle: {
        color: 'white',
        fontSize: 20,
    }
});

export default Header;