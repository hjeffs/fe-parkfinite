import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const Header = ({ title }) => {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
    }
});

export default Header;