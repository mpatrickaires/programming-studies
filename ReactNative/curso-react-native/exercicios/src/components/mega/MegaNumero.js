import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Estilo from '../estilo';

export default ({ numero }) => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.txtG, style.Num]}>{numero}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
        backgroundColor: '#009',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Num: {
        color: '#FFF',
    },
});
