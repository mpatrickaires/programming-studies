import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import Estilo from './estilo';

export default (props) => {
    const [nome, setNome] = useState('Teste');

    return (
        <View>
            <Text style={Estilo.txtG}>{nome}</Text>
            <TextInput placeholder="Digite o seu nome" value={nome} onChangeText={(text) => setNome(text)} />
            <Button title="Cadastrar" onPress={() => console.warn(nome)} />
        </View>
    );
};
