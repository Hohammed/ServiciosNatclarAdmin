/*DAO*/
var requerimientoDAO = require('./../DAO/RequerimientoDAO')

/*model*/

var model = require('./../Model/Requerimiento')

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
    function ok(lista) {
        console.log(lista)
        res.status(200).send(lista)
    }
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    requerimientoDAO.listar(req.query.responsable, req.query.SedeOrigen, req.query.SedeDestino, req.query.fechainicio, req.query.fechafin, req.query.iIdEstadoAprobacion, ok, error)
}
//GET - Buscar por ID
buscarById = function (req, res) {
    function ok(object) {
        console.log(object)
        res.send(object)
    }
    function error(error) {
        console.log(error)
        res.send(error)
    }
    requerimientoDAO.buscar(req.params.id, ok, error)
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    var requerimiento = model.Requerimiento
    requerimiento.idGerencia = req.body.idGerencia,
    requerimiento.iIdMofPuesto = req.body.iIdMofPuesto,
    requerimiento.iIdRequerimiento = req.body.iIdRequerimiento,
    requerimiento.vcNumeroDocumento = req.body.vcNumeroDocumento,
    requerimiento.vcIdSedeOrigen = req.body.vcIdSedeOrigen,
    requerimiento.iIdUnidadOrganizativa = req.body.iIdUnidadOrganizativa,
    requerimiento.vcIdSede = req.body.vcIdSede,
    requerimiento.vcRucEmpresa = req.body.vcRucEmpresa,
    requerimiento.vcCodigoUbigeo = req.body.vcCodigoUbigeo,
    requerimiento.dtFecha = req.body.dtFecha,
    requerimiento.iIdEstadoAprobacion = req.body.iIdEstadoAprobacion,
    requerimiento.iIdEstadoConfirmacion = req.body.iIdEstadoConfirmacion,
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
modificarRegistro = function (req, res) {
}

exports.listarTodo = listarTodo
exports.buscarById = buscarById
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro