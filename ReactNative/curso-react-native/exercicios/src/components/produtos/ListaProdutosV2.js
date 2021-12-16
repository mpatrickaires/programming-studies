import React from 'react';
import { Text, FlatList } from 'react-native';

import Estilo from '../estilo';

import produtos from './produtos';

export default (props) => {
    const renderProduto = ({ item: produto }) => (
        <Text style={Estilo.txtG}>
            {produto.id} - {produto.nome} tem R$ {produto.preco}
        </Text>
    );

    return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos V2</Text>
            <FlatList
                data={produtos}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderProduto}
            />
        </>
    );
};
