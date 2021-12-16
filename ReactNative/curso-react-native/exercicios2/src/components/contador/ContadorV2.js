import React, { useState } from 'react';
import { Text } from 'react-native';

import Estilo from '../estilo';

import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default (props) => {
    const [numero, setNumero] = useState(0);

    return (
        <>
            <Text style={Estilo.txtG}>Contador</Text>
            <ContadorDisplay numero={numero} />
            <ContadorBotoes
                incremento={() => setNumero(numero + 1)}
                decremento={() => setNumero(numero - 1)}
            />
        </>
    );
};
