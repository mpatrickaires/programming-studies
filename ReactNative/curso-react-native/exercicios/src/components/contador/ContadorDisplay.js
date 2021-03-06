import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Estilo from '../estilo';

export default ({ numero }) => {
    return (
        <View style={style.Display}>
            <Text style={[Estilo.txtG, style.DisplayText]}>{numero}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: '#fff',
    },
});
