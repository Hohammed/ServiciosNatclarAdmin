/*DAO*/
var unidadOrganizativaDAO = require('./../DAO/UnidadOrganizativaDAO')

/*model*/
var model = require('./../Model/UnidadOrganizativa')

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
    console.log("controller")
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
//GET - Buscar por ID
buscarById = function (req, res) {/*
    function ok(object) {
        res.send(object)
    }
    function error(error) {
        console.log(error)
    }
    unidadOrganizativaDAO.buscar(req.params.id, ok, error)*/
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {/*
    var unidadOrganizativa = model.UnidadOrganizativa
    unidadOrganizativa.iIdUnidadOrganizativa = req.body.iIdUnidadOrganizativa
    unidadOrganizativa.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + unidadOrganizativa.iIdUnidadOrganizativa)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    unidadOrganizativaDAO.insertar(unidadOrganizativa, ok, error)*/
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {/*
    var unidadOrganizativa = model.UnidadOrganizativa
    unidadOrganizativa.iIdUnidadOrganizativa = req.body.iIdUnidadOrganizativa
    unidadOrganizativa.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + unidadOrganizativa.iIdUnidadOrganizativa)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    unidadOrganizativaDAO.modificar(unidadOrganizativa, ok, error)*/
}

//DELETE - Eliminar registro
eliminarRegistro = function (req, res) {/*
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
    unidadOrganizativaDAO.eliminar(req.params.id, ok, error)*/
}

exports.listarTodo = listarTodo
exports.buscarById = buscarById
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro