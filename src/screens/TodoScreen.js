import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

const TodoScreen = ({goBack, todo}) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <Button color={'#2e8ca7'} onPress={goBack} title={'Go back'}/>
        </View>
    );
};

export default TodoScreen;

const styles = StyleSheet.create({
    wrapper: {},
})
