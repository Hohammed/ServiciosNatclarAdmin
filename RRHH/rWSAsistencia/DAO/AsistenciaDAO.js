var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')
var js2xmlparser = require("js2xmlparser")

/*DAO*/
function buscarByFiltro(parametros, ok, error) {
    helper.query(sql, "NatclarAdmin.rhTareo.SP_REPORTE_ASISTENCIAS", parametros, ok, error)
}

function subirTareo(asistencia, ok, error) {
    var parameters = []
    parameters.push({ name: "Asistencia", value: js2xmlparser.parse("Asistencia", asistencia) })
    console.log(js2xmlparser.parse("Asistencia", asistencia))
    helper.transaction(sql, "NatclarAdmin.rhTareo.SP_INS_TAREO_MASIVO", parameters, ok, error)
}

function programarTareo(iIdTrabajador,FechaIni,FechaFin,Tipo_CI,FechaIni2,FechaFin2,Tipo_T,FechaIni3,FechaFin3,Tipo_L, ok, error) {
    var parameters = []
        parameters.push({ name: "ID_TRAB", value: iIdTrabajador})
        parameters.push({ name: "FECHA_INI", value: FechaIni})
        parameters.push({ name: "FECHA_FIN_CAPACITACION", value: FechaFin})
        parameters.push({ name: "TAREO1", value: Tipo_CI})
        parameters.push({ name: "FECHA_INI_TRABAJADO", value: FechaIni2})
        parameters.push({ name: "FECHA_FIN_TRABAJADO", value: FechaFin2})
        parameters.push({ name: "TAREO2", value: Tipo_T})
        parameters.push({ name: "FECHA_INI_LIBRE", value: FechaIni3})
        parameters.push({ name: "FECHA_FIN_LIBRE", value: FechaFin3})
        parameters.push({ name: "TAREO3", value: Tipo_L})
    helper.transaction(sql, "rhTareo.SP_INS_TAREO_PROGRAMADO", parameters, ok, error)
}

exports.buscarByFiltro = buscarByFiltro
exports.subirTareo = subirTareo
exports.programarTareo = programarTareo