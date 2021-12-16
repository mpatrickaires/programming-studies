import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

export default ({ nome, sobrenome }) => {
    return (
        <Text style={Estilo.txtG}>
            {nome} {sobrenome}
        </Text>
    );
};
