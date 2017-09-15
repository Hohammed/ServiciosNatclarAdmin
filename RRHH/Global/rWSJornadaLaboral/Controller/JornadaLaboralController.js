/*DAO*/
var JornadaLaboralDao = require('./../DAO/JornadaLaboralDAO')

/*model*/

var model = require('./../Model/JornadaLaboral')

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
        JornadaLaboralDao.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        JornadaLaboralDao.mostrar(ok, error)
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
    JornadaLaboralDao.buscar(req.params.id, ok, error)
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    var JornadaLaboral = model.JornadaLaboral
    JornadaLaboral.iIdJornadaLaboral = req.body.iIdJornadaLaboral
    JornadaLaboral.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + JornadaLaboral.iIdJornadaLaboral)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    JornadaLaboralDao.insertar(JornadaLaboral, ok, error)
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {
    var JornadaLaboral = model.JornadaLaboral
    JornadaLaboral.iIdJornadaLaboral = req.body.iIdJornadaLaboral
    JornadaLaboral.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + JornadaLaboral.iIdJornadaLaboral)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    JornadaLaboralDao.modificar(JornadaLaboral, ok, error)
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
    JornadaLaboralDao.eliminar(req.params.id, ok, error)
}
*/
exports.listarTodo = listarTodo
/*exports.buscarById = buscarById
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro*/