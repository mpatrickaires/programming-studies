import React, { useState } from 'react';
import { Text, Button } from 'react-native';

import Estilo from './estilo';

export default ({ inicial = 0, passo = 1 }) => {
    const [numero, setNumero] = useState(inicial);

    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={() => setNumero(numero + passo)} />
            <Button title="-" onPress={() => setNumero(numero - passo)} />
        </>
    );
};
