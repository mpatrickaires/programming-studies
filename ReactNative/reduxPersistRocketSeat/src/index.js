import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import TodoList from './TodoList';

const index = props => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TodoList />
                </SafeAreaView>
            </PersistGate>
        </Provider>
    );
};

export default index;
