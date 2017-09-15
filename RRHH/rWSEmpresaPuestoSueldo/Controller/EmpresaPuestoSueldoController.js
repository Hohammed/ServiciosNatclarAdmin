/*DAO*/
var empresaDAO = require('./../DAO/EmpresaPuestoSueldoDAO')

/*model*/
var model = require('./../Model/EmpresaPuestoSueldo')

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
}

//GET - Buscar por ID
buscarById = function (req, res) {
}

buscarEmpresaPuestoSueldo = function (req, res) {
     function ok(lista) {
        res.send(lista)
    }
    function error(error) {
        console.log(error)
    }
    console.log(req.body.filtro)
    empresaDAO.buscarEmpresaPuestoSueldo(req.body.filtro, ok, error)
}

//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    console.log(req.body.EmpresaPuestoSueldo)
    var EmpresaPuestoSueldo = req.body.EmpresaPuestoSueldo

    //var EmpresaPuestoSueldo= req.body;
    function ok(lista) {
        res.status(200).send(lista)
        console.log(lista)
    }
    function error(error) {
        res.status(201).send(error)
        console.log('ERROR: '+ error)
    }
    empresaDAO.insertarRegistro(EmpresaPuestoSueldo, ok, error)
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {
}

//DELETE - Eliminar registro
eliminarRegistro = function (req, res) {
}

exports.listarTodo = listarTodo
exports.buscarById = buscarById
exports.buscarEmpresaPuestoSueldo = buscarEmpresaPuestoSueldo
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro