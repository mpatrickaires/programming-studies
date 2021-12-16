import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import FlexboxV1 from './components/layout/FlexboxV1';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ParImpar from './components/ParImpar';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';

export default () => {
    return (
        <SafeAreaView style={style.App}>
            <FlexboxV1 />
            {/* 
            <DigiteSeuNome />
            <ListaProdutosV2 />
            <ListaProdutos />
            <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} />
            <UsuarioLogado usuario={{ nome: 'Ana' }} />
            <UsuarioLogado usuario={{ email: 'carlos@empresa.com' }} />
            <UsuarioLogado usuario={{}} />
            <UsuarioLogado usuario={null} />
            <Familia>
                <Membro nome="Bia" sobrenome="Arruda" />
                <Membro nome="Carlos" sobrenome="Arruda" />
            </Familia>
            <Familia>
                <Membro nome="Ana" sobrenome="Silva" />
                <Membro nome="Júlia" sobrenome="Silva" />
                <Membro nome="Gui" sobrenome="Silva" />
                <Membro nome="Rebeca" sobrenome="Silva" />
            </Familia>
            <ParImpar numero={2} />
            <Diferenciar />
            <ContadorV2 />
            <Pai />
            <Pai />
            <Contador inicial={100} passo={10} />
            <Contador />
            <Botao />
            <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto" />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <MinMax valor1={10} valor2={50} />
            <CompPadrao />
            <Comp1 />
            <Comp2 />
            <Primeiro />
             */}
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});
