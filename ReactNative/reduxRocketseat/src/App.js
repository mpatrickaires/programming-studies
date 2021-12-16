import React from 'react';
import { SafeAreaView } from 'react-native';

import Video from './components/Video';
import Sidebar from './components/Sidebar';

/* REDUX */
import { Provider } from 'react-redux';
import store from './components/store';
/* * */

const App = props => {
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1, padding: 10 }}>
                <Video />
                <Sidebar />
            </SafeAreaView>
        </Provider>
    );
};

export default App;
