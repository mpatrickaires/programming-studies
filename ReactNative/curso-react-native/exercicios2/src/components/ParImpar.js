import React from 'react';
import { View, Text } from 'react-native';
import Estilo from './estilo';

export default ({numero = 0}) => {
    return (
        <View>
            <Text style={Estilo.txtG}>
                O resultado é: {numero % 2 == 0 ? 'Par' : 'Ímpar'}
            </Text>
        </View>
    );
};
