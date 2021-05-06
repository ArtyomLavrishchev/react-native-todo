import React from 'react';

import {FlatList, StyleSheet} from 'react-native';
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({addTodo, todos, removeTodo, onOpen}) => {
    return (
        <>
            <AddTodo addTodo={addTodo}/>
            <FlatList
                data={todos}
                renderItem={({item}) => <Todo
                    removeTodo={removeTodo}
                    onOpen={onOpen}
                    todo={item}/>}
                keyExtractor={item => item.id}
            />
        </>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    wrapper: {},
})