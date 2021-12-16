// URL base do projeto
const URL_BASE = '/api.agenda';

// Importar a biblioteca FOUNDATION do projeto express
const express = require('express');

// Criar uma instância do express
const app = express();

// Habilitar o depurador morgan
const morgan = require('morgan');
app.use(morgan('dev'));

// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // somente dados simples na URL
app.use(bodyParser.json()); // somente aceitar json

// Verificar resposta da URL base do servidor
// app.use((req, res, next) => {
//     res.status(200).send({
//         resposta: 'URL base do servidor funcionou!',
//     });
// });

// Configurar minhas rotas
const rotaContatos = require('./routes/contatoDao');
app.use('/api.agenda/contato', rotaContatos);

// Verificar resposta da URL base do servidor 2
app.use(URL_BASE, (req, res, next) => {
    res.status(200).send({
        resposta: 'URL base do servidor funcionou 2!',
    });
});

// Passou por todas as rotas acima e não encontrou nada: exibir mensagem de erro
app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada!');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message,
        },
    });
});

// Exportar app para o servidor
module.exports = app;
