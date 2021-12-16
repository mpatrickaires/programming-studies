import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo';

export default ({ valor1, valor2 }) => {
    const maior = Math.max(valor1, valor2);
    const menor = Math.min(valor1, valor2);

    return (
        <Text style={Estilo.txtG}>
            O valor {maior} é maior que o valor {menor}!
        </Text>
    );
};
