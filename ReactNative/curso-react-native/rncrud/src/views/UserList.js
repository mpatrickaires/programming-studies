import React, { useContext } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import UsersContext, { actionType } from '../contexts/UserContext';

export default (props) => {
    const { state, dispatch } = useContext(UsersContext);

    function confirmUserDeletion(user) {
        Alert.alert(
            'Excluir Usuário',
            `Deseja realmente excluir o usuário ${user.name}?`,
            [
                {
                    text: 'Sim',
                    onPress() {
                        dispatch({
                            type: actionType.deleteUser,
                            payload: user,
                        });
                    },
                },
                {
                    text: 'Não',
                },
            ]
        );
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        );
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar source={{ uri: user.avatarUrl }} rounded />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(user)}
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                data={state.users}
                keyExtractor={(user) => user.id}
                renderItem={getUserItem}
            />
        </View>
    );
};
