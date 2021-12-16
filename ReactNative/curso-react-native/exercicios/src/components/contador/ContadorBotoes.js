import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default ({ incremento, decremento }) => {
    return (
        <View style={style.View}>
            <Pressable
                style={[style.Button, { borderRightWidth: 1 }]}
                onPress={incremento}
            >
                <Text style={style.ButtonText}>+</Text>
            </Pressable>
            <Pressable style={style.Button} onPress={decremento}>
                <Text style={style.ButtonText}>-</Text>
            </Pressable>
        </View>
    );
};

const style = StyleSheet.create({
    View: {
        flexDirection: 'row',
        width: 300,
    },
    Button: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#e0e0e0',
    },
    ButtonText: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
    },
});
