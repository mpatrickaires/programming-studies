import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

export default (props) => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor="#ff801a" valor={1} lado={20} />
            <Quadrado cor="#50d1f6" valor={2} lado={30} />
            <Quadrado cor="#dd22c1" valor={3} lado={40} />
            <Quadrado cor="#8312ed" valor={4} lado={50} />
            <Quadrado cor="#36c9a7" valor={5} lado={60} />
        </View>
    );
};

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        // flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    },
});
