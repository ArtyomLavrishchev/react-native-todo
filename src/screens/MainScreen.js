import React from 'react';

import {FlatList, StyleSheet} from 'react-native';
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({addTodo, todos, removeTodo}) => {
    return (
        <>
            <AddTodo addTodo={addTodo}/>
            <FlatList
                data={todos}
                style={styles.container}
                renderItem={({item}) => <Todo removeTodo={removeTodo} todo={item}/>}
                keyExtractor={item => item.id}
            />
        </>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    wrapper: {},
})