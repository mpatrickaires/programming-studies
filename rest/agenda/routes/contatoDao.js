const express = require('express');
const router = express.Router();

router.post('/update', (req, res, next) => {
    const { id, nome, fone } = req.body;

    const contato = {
        id,
        nome,
        fone,
    };

    res.status(201).send({
        mensagem: 'Contato atualizado!',
        contato,
    });
});

router.post('/delete', (req, res, next) => {
    const { id } = req.body;

    const contato = {
        id,
    };

    res.status(201).send({
        mensagem: 'Contato excluído!',
        contato,
    });
});
module.exports = router;
