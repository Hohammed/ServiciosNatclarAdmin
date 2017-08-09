/*DAO*/
var requerimientoAprobacionDAO = require('./../DAO/RequerimientoAprobacionDAO')

/*model*/
var model = require('./../Model/RequerimientoAprobacion')

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
}
//GET - Buscar por ID
buscarById = function (req, res) {
    function ok(object) {
        res.send(object)
    }
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    requerimientoAprobacionDAO.buscar(req.params.id, ok, error)
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    var requerimientoAprobacion = model.RequerimientoAprobacion
    requerimientoAprobacion.iIdRequerimiento = req.body.iIdRequerimiento
    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + requerimientoAprobacion.iIdRequerimiento)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    requerimientoAprobacionDAO.insertar(requerimientoAprobacion, ok, error)
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {
    var requerimientoAprobacion = model.RequerimientoAprobacion
    requerimientoAprobacion.iIdRequerimiento = req.body.iIdRequerimiento
    requerimientoAprobacion.iIdMofPuesto = req.body.iIdMofPuesto
    requerimientoAprobacion.vcLogin = req.body.vcLogin
    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + requerimientoAprobacion.iIdRequerimiento)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    requerimientoAprobacionDAO.modificar(requerimientoAprobacion, ok, error)
}

exports.listarTodo = listarTodo
exports.buscarById = buscarById
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro