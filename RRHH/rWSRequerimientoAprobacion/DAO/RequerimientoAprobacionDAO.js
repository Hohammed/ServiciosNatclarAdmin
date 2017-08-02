var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function listar(ok, error) {
}

function buscar(iIdRequerimiento, ok, error) {
    var parameters = []
    parameters.push({name: "iIdRequerimiento", value: iIdRequerimiento});
    helper.query(sql, "rhRequerimiento.SP_SEL_REQUERIMIENTO_APROBACION", parameters, ok, error)
}

function insertar(requerimientoAprobacion, ok, error) {
    var parameters = []
    parameters.push({ name: "iIdRequerimiento", value: requerimientoAprobacion.iIdRequerimiento })
    helper.transaction(sql, "rhRequerimiento.SP_INS_REQUERIMIENTO_APROBACION", parameters, ok, error)
}

function modificar(requerimientoAprobacion, ok, error) {
    var parameters = []
    parameters.push({ name: "iIdRequerimiento", value: requerimientoAprobacion.iIdRequerimiento })
    parameters.push({ name: "iIdMofPuesto", value: requerimientoAprobacion.iIdMofPuesto })
    parameters.push({ name: "vcLogin", value: requerimientoAprobacion.vcLogin })
    helper.transaction(sql, "rhRequerimiento.SP_UPD_REQUERIMIENTO_APROBACION", parameters, ok, error)
}

exports.listar = listar
exports.buscar = buscar
exports.insertar = insertar
exports.modificar = modificar