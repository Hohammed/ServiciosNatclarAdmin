/*DAO*/
var correoDAO = require('./../DAO/CorreoDAO')

/*model*/
var model = require('./../Model/Correo')

/*controller*/
//GET - Listar
enviarCorreo = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function noOk(error) {
        res.status(201).send(error)
    }
    console.log(req.body)
    correoDAO.enviarCorreo(req.body.from, req.body.to, req.body.subject, req.body.text, ok, noOk)
}

exports.enviarCorreo = enviarCorreo