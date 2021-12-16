import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo';

export default ({ min, max }) => {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    return <Text style={Estilo.txtG}>O valor aleatório é: {numeroAleatorio}</Text>;
};
