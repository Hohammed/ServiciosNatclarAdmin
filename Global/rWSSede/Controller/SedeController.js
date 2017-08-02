/*DAO*/
var sedeDAO = require('./../DAO/SedeDAO')

/*model*/
var model = require('./../Model/Sede')

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
}
filtrarByEmpresa = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    sedeDAO.filtrar(req.body.vcRucEmpresa, req.body.iIdUnidadOrganizativa, ok, error)
}
//GET - Buscar por ID
buscarById = function (req, res) {
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {
}

//DELETE - Eliminar registro
eliminarRegistro = function (req, res) {
}

exports.listarTodo = listarTodo
exports.buscarById = buscarById
exports.filtrarByEmpresa = filtrarByEmpresa
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro