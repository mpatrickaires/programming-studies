import React, { useState, useReducer } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import { sha256 } from 'react-native-sha256';

import useMarketList from '../hooks/useMarketList';

const ItemList = (props) => {
    const createItem = async () => {
        addItem(title);
        setTitle('');
    };

    const renderItem = (item) => {
        const checkedItemStyle = {
            textDecorationLine: 'line-through',
            backgroundColor: '#e0e0e0',
        };

        return (
            <View style={styles.itemsContainer}>
                <TouchableOpacity
                    style={styles.itemCheckButton}
                    onPress={() => checkItem(item.id)}
                >
                    <Text
                        style={[
                            styles.listItem,
                            item.check && checkedItemStyle,
                        ]}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.itemRemoveButton}
                    onPress={() => removeItem(item.id)}
                >
                    <Text style={styles.itemRemoveButtonText}>Remover</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const [title, setTitle] = useState('');

    const [state, addItem, checkItem, removeItem] = useMarketList();

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Adicionar produto"
                />
                <TouchableOpacity style={styles.addButton} onPress={createItem}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={state}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => renderItem(item)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    input: {
        flex: 1,
        fontSize: 30,
        color: 'black',
    },
    addButton: {
        marginHorizontal: 5,
        alignItems: 'center',
        alignSelf: 'center',
    },
    addButtonText: {
        textAlign: 'center',
        color: 'red',
        fontSize: 60,
    },
    itemsContainer: {
        flexDirection: 'row',
    },
    itemCheckButton: {
        flex: 1,
    },
    itemRemoveButton: {
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    itemRemoveButtonText: {
        fontSize: 12,
        color: 'red',
    },
    listItem: {
        fontSize: 22,
        marginVertical: 3,
        marginHorizontal: 7,
        padding: 10,
    },
});

export default ItemList;
