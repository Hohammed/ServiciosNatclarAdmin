/*DAO*/
var estadoCivilDAO = require('./../DAO/EstadoCivilDAO')

/*model*/

var model = require('./../Model/EstadoCivil')

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    if(req.body.dsp==undefined){
        estadoCivilDAO.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        estadoCivilDAO.mostrar(ok, error)
    }
}
//GET - Buscar por ID
buscarById = function (req, res) {
    function ok(object) {
        res.send(object)
    }
    function error(error) {
        console.log(error)
    }
    estadoCivilDAO.buscar(req.params.id, ok, error)
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    var estadoCivil = model.EstadoCivil
    estadoCivil.cIdEstadoCivil = req.body.cIdEstadoCivil
    estadoCivil.vcDenominacion = req.body.vcDenominacion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + estadoCivil.cIdEstadoCivil)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    estadoCivilDAO.insertar(estadoCivil, ok, error)
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {
    var estadoCivil = model.EstadoCivil
    estadoCivil.cIdEstadoCivil = req.body.cIdEstadoCivil
    estadoCivil.vcDenominacion = req.body.vcDenominacion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + estadoCivil.cIdEstadoCivil)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    estadoCivilDAO.modificar(estadoCivil, ok, error)
}

//DELETE - Eliminar registro
eliminarRegistro = function (req, res) {
    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro eliminado: ID - ' + req.params.id)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    estadoCivilDAO.eliminar(req.params.id, ok, error)
}

exports.listarTodo = listarTodo
exports.buscarById = buscarById
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro