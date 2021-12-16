import React from 'react';
import { View, Text } from 'react-native';

export default ({ cor, valor }) => {
    const lado = 50;

    return (
        <View
            style={{
                height: lado,
                width: lado,
                backgroundColor: cor || '#000',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{ fontSize: 24 }}>{valor}</Text>
        </View>
    );
};
