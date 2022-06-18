const { RSA_NO_PADDING } = require('constants');

const express = require('express'),
router = express.Router(),
{_create} = require('../controller/tipo_usuario');


router.post('/signup', async(rep, res) => {
        try {
            const tipo_usuario = await _create(req.body);
            return res.status(201).json({
                status: 'success',
                message: 'El Usuario ${tipo_usuario.EMAIL} fue creado correctamente'
            })
        } catch (e) {
            return res.status(500).json(e.message);
        }


});

module.exports = router;