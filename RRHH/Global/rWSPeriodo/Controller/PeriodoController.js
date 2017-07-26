/*DAO*/
var PeriodoDao = require('./../DAO/PeriodoDAO')

/*model*/

var model = require('./../Model/Periodo')

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
        PeriodoDao.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        PeriodoDao.mostrar(ok, error)
    }
}
/*
//GET - Buscar por ID
buscarById = function (req, res) {
    function ok(object) {
        res.send(object)
    }
    function error(error) {
        console.log(error)
    }
    PeriodoDao.buscar(req.params.id, ok, error)
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    var Periodo = model.Periodo
    Periodo.iIdPeriodo = req.body.iIdPeriodo
    Periodo.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + Periodo.iIdPeriodo)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    PeriodoDao.insertar(Periodo, ok, error)
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {
    var Periodo = model.Periodo
    Periodo.iIdPeriodo = req.body.iIdPeriodo
    Periodo.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + Periodo.iIdPeriodo)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    PeriodoDao.modificar(Periodo, ok, error)
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
    PeriodoDao.eliminar(req.params.id, ok, error)
}
*/
exports.listarTodo = listarTodo
/*exports.buscarById = buscarById
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro*/