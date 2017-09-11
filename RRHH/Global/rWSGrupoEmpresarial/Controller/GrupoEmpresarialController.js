/*DAO*/
var GrupoEmpresarialDao = require('./../DAO/GrupoEmpresarialDao')

/*model*/

var model = require('./../Model/GrupoEmpresarial')

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
        GrupoEmpresarialDao.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        GrupoEmpresarialDao.mostrar(ok, error)
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
    GrupoEmpresarialDao.buscar(req.params.id, ok, error)
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    var GrupoEmpresarial = model.GrupoEmpresarial
    GrupoEmpresarial.iIdGrupoEmpresarial = req.body.iIdGrupoEmpresarial
    GrupoEmpresarial.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + GrupoEmpresarial.iIdGrupoEmpresarial)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    GrupoEmpresarialDao.insertar(GrupoEmpresarial, ok, error)
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {
    var GrupoEmpresarial = model.GrupoEmpresarial
    GrupoEmpresarial.iIdGrupoEmpresarial = req.body.iIdGrupoEmpresarial
    GrupoEmpresarial.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + GrupoEmpresarial.iIdGrupoEmpresarial)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    GrupoEmpresarialDao.modificar(GrupoEmpresarial, ok, error)
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
    GrupoEmpresarialDao.eliminar(req.params.id, ok, error)
}
*/
exports.listarTodo = listarTodo
/*exports.buscarById = buscarById
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro*/