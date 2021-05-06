import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";

const AddTodo = ({addTodo}) => {
    const [todo, setTodo] = useState('')
    const pressHandler = () => {
        if (todo.trim()) {
            addTodo(todo);
            setTodo('');
        } else {
            Alert.alert('Todo should be entered')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput
                value={todo}
                placeholder={'New todo'}
                style={styles.input}
                onChangeText={setTodo}
                autoCorrect={false}
                autoCapitalize={'none'}
            />
            <Button
                color={'#2e8ca7'}
                title={'Add'}
                onPress={pressHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15,
    },
    input: {
        width: '75%',
        borderBottomWidth: 2,
        borderBottomColor: '#2e8ca7',
        padding: 10,
    },
})

export default AddTodo;
