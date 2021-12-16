import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import Estilo from '../estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends Component {
    // constructor(props) {
    //     super(props);
    //
    //      this.state = {
    //         qtdeNumeros: props.qtdeNumeros
    //     }
    //
    //      this.qtdeNumeros = this.qtdeNumeros.bind(this)
    // }

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: [],
    };

    alterarQtdeNumeros = (qtde) => {
        if (qtde < 60) {
            this.setState({ qtdeNumeros: +qtde });
        }
    };

    gerarNumeroNaoContido = (array) => {
        const numero = parseInt(Math.random() * 60) + 1;
        return array.includes(numero)
            ? this.gerarNumeroNaoContido(array)
            : numero;
    };

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b);
        this.setState({ numeros });
    };

    // gerarNumeroNaoContido = (array) => {
    //     let numero;

    //     do {
    //         numero = parseInt(Math.random() * 60) + 1;
    //     } while (array.includes(numero));

    //     return numero;
    // };

    // gerarNumeros = () => {
    //     const numeros = [];

    //     for (let i = 0; i < this.state.qtdeNumeros; i++) {
    //         numeros.push(this.gerarNumeroNaoContido(numeros));
    //     }
    //     numeros.sort((a, b) => a - b);

    //     this.setState({ numeros });
    // };

    exibirNumeros = () =>
        this.state.numeros.map((numero) => (
            <MegaNumero key={numero} numero={numero} />
        ));

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>Gerador de Mega-Sena</Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1, textAlign: 'center' }}
                    placeholder="Quantidade de números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumeros}
                />
                <Button title="Gerar" onPress={this.gerarNumeros} />
                <View style={style.NumerosContainer}>
                    {this.exibirNumeros()}
                </View>
            </>
        );
    }
}

const style = StyleSheet.create({
    NumerosContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 15,
    },
});
