import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo';

import If from './If';

export default (props) => {
    // Código necessário para que null possa ser passado para 'props.usuario'
    const usuario = props.usuario || {};

    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtG}>Usuário Logado:</Text>
                <Text style={Estilo.txtG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    );
};
