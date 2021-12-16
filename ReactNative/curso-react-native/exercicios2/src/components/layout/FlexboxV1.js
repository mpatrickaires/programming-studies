import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

export default (props) => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor="#ff801a" valor={1} />
            <Quadrado cor="#50d1f6" valor={2} />
            <Quadrado cor="#dd22c1" valor={3} />
            <Quadrado cor="#8312ed" valor={4} />
            <Quadrado cor="#36c9a7" valor={5} />
        </View>
    );
};

const style = StyleSheet.create({
    FlexV1: {
        backgroundColor: '#000',
        flexGrow: 1,
        justifyContent: 'space-between'
    }
})
