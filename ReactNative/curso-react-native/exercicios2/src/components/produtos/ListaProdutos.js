import React from 'react';
import { Text } from 'react-native';

import Estilo from '../estilo';

import produtos from './produtos';

export default (props) => {
    function obterLista() {
        return produtos.map((produto) => (
            <Text key={produto.id}>
                {produto.id}) {produto.nome} tem R$ {produto.preco}
            </Text>
        ));
    }

    return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos</Text>
            {/* {produtos.map((produto) => (
                <Text key={produto.id}>
                    {produto.id}) {produto.nome} tem R$ {produto.preco}
                </Text>
            ))} */}
            {obterLista()}
        </>
    );
};
