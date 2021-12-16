import React from 'react';
import { View, Text } from 'react-native';

import Estilo from './estilo';

export default ({ principal, secundario }) => {
    return (
        <>
            <Text style={Estilo.txtG}>{principal}</Text>
            <Text>{secundario}</Text>
        </>
    );
};
