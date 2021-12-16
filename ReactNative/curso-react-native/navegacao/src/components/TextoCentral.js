import React from 'react';
import { View, Text } from 'react-native';

export default ({ corFundo, corTexto, children }) => {
    return (
        <View
            style={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: corFundo || '#000',
            }}
        >
            <Text style={{ fontSize: 50, color: corTexto || '#FFF' }}>{children}</Text>
        </View>
    );
};
