var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function buscarByFiltro(parametros, ok, error) {
    helper.query(sql, "NatclarAdmin.rhTareo.SP_REPORTE_ASISTENCIAS_TAREO", parametros, ok, error)
}

exports.buscarByFiltro = buscarByFiltro