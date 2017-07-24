/*DAO*/
var requerimientoDAO = require('./../DAO/RequerimientoDAO')

/*model*/

var model = require('./../Model/Requerimiento')

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
        requerimientoDAO.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        requerimientoDAO.mostrar(ok, error)
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
    requerimientoDAO.buscar(req.params.id, ok, error)*/
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    var requerimiento = model.Requerimiento
    requerimiento.iIdRequerimiento = req.body.iIdRequerimiento,
    requerimiento.vcNumeroDocumento = req.body.vcNumeroDocumento,
    requerimiento.vcIdSedeOrigen = req.body.vcIdSedeOrigen,
    requerimiento.iIdUnidadOrganizativa = req.body.iIdUnidadOrganizativa,
    requerimiento.vcIdSede = req.body.vcIdSede,
    requerimiento.vcRucEmpresa = req.body.vcRucEmpresa,
    requerimiento.vcCodigoUbigeo = req.body.vcCodigoUbigeo,
    requerimiento.dFecha = req.body.dFecha,
    requerimiento.nvObservacion = req.body.nvObservacion,
    requerimiento.iIdEstadoAprobacion = req.body.iIdEstadoAprobacion,
    requerimiento.iIdEstado = req.body.iIdEstado,
    requerimiento.vcUsuarioCreacionApp = req.body.vcUsuarioCreacionApp,
    requerimiento.vcUsuarioModificacionOT = req.body.vcUsuarioModificacionOT,
    requerimiento.DETALLE_XML = req.body.DETALLE_XML
    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + requerimiento.iIdRequerimiento)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    requerimientoDAO.insertar(requerimiento, ok, error)
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {/*
    var requerimiento = model.Requerimiento
    requerimiento.cIdEstadoCivil = req.body.cIdEstadoCivil
    requerimiento.vcDenominacion = req.body.vcDenominacion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + requerimiento.cIdEstadoCivil)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    requerimientoDAO.modificar(requerimiento, ok, error)*/
}

exports.listarTodo = listarTodo
exports.buscarById = buscarById
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro