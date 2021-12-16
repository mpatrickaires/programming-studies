import React from 'react';
import { SafeAreaView } from 'react-native';

import ItemList from './screens/ItemList';

const App = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ItemList />
        </SafeAreaView>
    );
};

export default App;
