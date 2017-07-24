/*DAO*/
var PlanillaDao = require('./../DAO/PlanillaDAO')

/*model*/

var model = require('./../Model/Planilla')

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
    if(req.body.dsp==undefined){
        PlanillaDao.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        PlanillaDao.mostrar(ok, error)
    }
}


exports.listarTodo = listarTodo