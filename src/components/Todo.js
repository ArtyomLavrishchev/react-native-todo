import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, } from "react-native";

const Todo = ({todo, removeTodo}) => {
    const longPressHandler = () => {
        removeTodo(todo.id);
    }
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onLongPress={longPressHandler}
        >
            <View style={styles.todo}>
                <Text style={styles.text}>
                    {todo.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#eee',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        color: '#2e8ca7',
        fontSize: 17,
    }
})

export default Todo;