import React from 'react';
import { Text, View, StyleSheet } from "react-native";

const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
                { title }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 55,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#2e8ca7',
        paddingBottom: 5,
    },
    text: {
        color: '#eeeeee',
        fontSize: 17,
    },
})

export default Navbar;