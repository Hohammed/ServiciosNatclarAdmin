/*DAO*/
var unidadOrganizativaDAO = require('./../DAO/UnidadOrganizativaDAO')

/*model*/
var model = require('./../Model/UnidadOrganizativa')

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
        unidadOrganizativaDAO.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        unidadOrganizativaDAO.mostrar(ok, error)
    }
}

exports.listarTodo = listarTodo
