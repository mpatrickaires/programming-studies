import React from 'react';
import { View, Text } from 'react-native';

export default ({ cor, valor, lado }, props) => {
    const tamanho = lado || 50;

    return (
        <View
            style={{
                height: tamanho,
                width: tamanho,
                backgroundColor: cor || '#000',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Se manter o Text, a propriedade "alignItems: 'baseline'" irá considerar como base de centralização o texto, não funcionando muito bem dessa maneira */}
            {/* <Text style={{ fontSize: 16 }}>{valor}</Text> */}
        </View>
    );
};
