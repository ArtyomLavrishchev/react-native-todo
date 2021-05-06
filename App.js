import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [todoId, setTodoId] = useState(null);
    const addTodo = (title) => {
        setTodos(prev => [{
            id: Date.now().toString(),
            title,
        }, ...prev,])
    };
    const removeTodo = (id) => {
        setTodos(prev => prev.filter((todo) => todo.id !== id));
    };
    let content = (
        <MainScreen
            todos={todos}
            addTodo={addTodo}
            removeTodo={removeTodo}/>
    );
    if(todoId) {
        content = <TodoScreen/>
    }
    return (
        <View>
            <Navbar title={'Todo App'}/>
            {content}
            <StatusBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
});
