import React from 'react';
import { Button } from 'react-native';

import Estilo from '../estilo';

export default (props) => {
    function gerarNumero(min, max) {
        const fator = max - min + 1;
        return parseInt(Math.random() * fator) + min;
    }

    return (
        <>
            <Button
                title="Executar"
                onPress={() => {
                    const numero = gerarNumero(props.min, props.max);
                    const parImpar = numero % 2 === 0 ? 'par' : 'ímpar';
                    props.funcao(numero, 'O valor (' + parImpar + ') é: ');
                }}
            />
        </>
    );
};
