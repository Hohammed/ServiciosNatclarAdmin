/*DAO*/
var tiempoHorarioDAO = require('./../DAO/TiempoHorarioDAO')

/*model*/
var tiempomodel = require('./../Model/Tiempo')
var horariomodel = require('./../Model/Horario')

/*controller*/
//GET - Listar
listarTiempo = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    tiempoHorarioDAO.listarTiempo(ok, error)
}

listarHorarioByTiempo = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    tiempoHorarioDAO.listarHorarioByTiempo(req.params.id, ok, error)
}

exports.listarTiempo = listarTiempo
exports.listarHorarioByTiempo = listarHorarioByTiempo