import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

export default (props) => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor="#ff801a" valor={1} />
            <Quadrado cor="#50d1f6" valor={2} />
            <Quadrado cor="#dd22c1" valor={3} />
            <Quadrado cor="#8312ed" valor={4} />
            <Quadrado cor="#36c9a7" valor={5} />
        </View>
    );
};

const style = StyleSheet.create({
    FlexV2: {
        backgroundColor: '#000',
        // Main Axis (O eixo principal, que é a coluna)
        flexGrow: 1,
        justifyContent: 'space-between',
        // Cross Axis (O eixo secundário/alternativo, que é a linha)
        width: '100%',
        alignItems: 'center'
    }
})
