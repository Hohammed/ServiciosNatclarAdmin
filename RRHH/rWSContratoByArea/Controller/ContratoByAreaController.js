/*DAO*/
var ContratoByAreaDAO = require('./../DAO/ContratoByAreaDAO')

/*model*/

var model = require('./../Model/ContratoByArea')

/*HTTP*/
var http = require('http');

/*controller*/
//POST - Listar
listarTodo = function (req, res) {
   function ok(lista) {
        res.send(lista)
    }
    function error(error) {
        console.log(error)
    }
    console.log(req.body.AREA)
    ContratoByAreaDAO.listarTodo(req.body.AREA, ok, error)
}

buscarByFiltro = function (req, res) {
   function ok(lista) {
        res.send(lista)
    }
    function error(error) {
        console.log(error)
    }
    console.log(req.body.filtro)
    ContratoByAreaDAO.buscarByFiltro(req.body.filtro, ok, error)
}


exports.listarTodo = listarTodo
exports.buscarByFiltro = buscarByFiltro