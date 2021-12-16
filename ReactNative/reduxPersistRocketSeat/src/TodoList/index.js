import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../store/actions/todos';

const TodoList = ({ todoList, addTodo }) => {
    const [title, setTitle] = useState('');

    const renderTodoList = ({ item: todo }) => (
        <View>
            <Text>- {todo.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.insertContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui..."
                    onChangeText={setTitle}
                />
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => addTodo(title)}
                >
                    <Text>Salvar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={todoList}
                keyExtractor={todo => todo.id}
                renderItem={renderTodoList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    insertContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    input: {
        flex: 8,
        borderBottomWidth: 1,
        padding: 0,
        marginRight: 15,
    },
    saveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        height: '60%',
        flex: 2,
    },
});

const mapStateToProps = state => ({
    todoList: state.todos.todoList,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
