/*DAO*/
var estadoRequerimientoDao = require('./../DAO/EstadoRequerimientoDAO')

/*model*/

var model = require('./../Model/EstadoRequerimiento')

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    estadoRequerimientoDao.listar(ok, error)
}

exports.listarTodo = listarTodo