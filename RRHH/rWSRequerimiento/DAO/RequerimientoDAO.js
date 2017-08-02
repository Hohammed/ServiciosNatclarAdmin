var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')
var js2xmlparser = require("js2xmlparser");

/*DAO*/
function listar(responsable, SedeOrigen, SedeDestino, fechainicio, fechafin, iIdEstadoAprobacion, ok, error) {
    var parameters = []
    parameters.push({ name: "vcNumeroDocumento", value: responsable })
    parameters.push({ name: "vcIdSedeOrigen", value: SedeOrigen })
    parameters.push({ name: "vcIdSede", value: SedeDestino })
    parameters.push({ name: "dFechaIni", value: fechainicio })
    parameters.push({ name: "dFechaFin", value: fechafin })
    parameters.push({ name: "iIdEstadoAprobacion", value: iIdEstadoAprobacion })
    helper.query(sql, "rhRequerimiento.SP_SEL_BUSCAR_REQUERIMIENTO", parameters, ok, error)
}

function buscar(iIdRequerimiento, ok, error) {
    var parameters = []
    parameters.push({name: "iIdRequerimiento", value: iIdRequerimiento})
    helper.query(sql, "rhRequerimiento.SP_SEL_OBTENER_RQ_BY_ID", parameters, ok, error)
}

function insertar(requerimiento, ok, error) {
    //var xml = requerimiento.DETALLE_XML
    var parameters = []
    parameters.push({ name: "idGerencia", value: requerimiento.idGerencia })
    parameters.push({ name: "iIdMofPuesto", value: requerimiento.iIdMofPuesto })
    parameters.push({ name: "iIdRequerimiento", value: requerimiento.iIdRequerimiento })
    parameters.push({ name: "vcNumeroDocumento", value: requerimiento.vcNumeroDocumento })
    parameters.push({ name: "vcIdSedeOrigen", value: requerimiento.vcIdSedeOrigen })
    parameters.push({ name: "iIdUnidadOrganizativa", value: requerimiento.iIdUnidadOrganizativa })
    parameters.push({ name: "vcIdSede", value: requerimiento.vcIdSede })
    parameters.push({ name: "vcRucEmpresa", value: requerimiento.vcRucEmpresa })
    parameters.push({ name: "vcCodigoUbigeo", value: requerimiento.vcCodigoUbigeo })
    parameters.push({ name: "dtFecha", value: requerimiento.dtFecha })
    parameters.push({ name: "iIdEstadoAprobacion", value: requerimiento.iIdEstadoAprobacion })
    parameters.push({ name: "iIdEstadoConfirmacion", value: requerimiento.iIdEstadoConfirmacion })
    parameters.push({ name: "iIdEstado", value: requerimiento.iIdEstado })
    parameters.push({ name: "vcUsuarioCreacionApp", value: requerimiento.vcUsuarioCreacionApp })
    parameters.push({ name: "vcUsuarioModificacionOT", value: requerimiento.vcUsuarioModificacionOT })
    parameters.push({ name: "iIdEstado", value: requerimiento.iIdEstado })
    parameters.push({ name: "DETALLE_XML", value: js2xmlparser.parse("RequerimientoDetalle", requerimiento.DETALLE_XML) })
    console.log(requerimiento)
    helper.transaction(sql, "rhRequerimiento.SP_INS_REQUERIMIENTO", parameters, ok, error)
}

function modificar(estadoCivil, ok, error) {
}

exports.listar = listar
exports.buscar = buscar
exports.insertar = insertar
exports.modificar = modificar