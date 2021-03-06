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

//function programarTareo(iIdTrabajador,FechaIni,FechaFin,Tipo_CI,FechaIni2,FechaFin2,Tipo_T,FechaIni3,FechaFin3,Tipo_L, ok, error) {
function programarTareo(TAREO_PROGRAMADO, ok, error) {
    var parameters = []
       /* parameters.push({ name: "ID_TRAB", value: iIdTrabajador})
        parameters.push({ name: "FECHA_INI", value: FechaIni})
        parameters.push({ name: "FECHA_FIN_CAPACITACION", value: FechaFin})
        parameters.push({ name: "TAREO1", value: Tipo_CI})
        parameters.push({ name: "FECHA_INI_TRABAJADO", value: FechaIni2})
        parameters.push({ name: "FECHA_FIN_TRABAJADO", value: FechaFin2})
        parameters.push({ name: "TAREO2", value: Tipo_T})
        parameters.push({ name: "FECHA_INI_LIBRE", value: FechaIni3})
        parameters.push({ name: "FECHA_FIN_LIBRE", value: FechaFin3})
        parameters.push({ name: "TAREO3", value: Tipo_L})
    helper.transaction(sql, "rhTareo.SP_INS_TAREO_PROGRAMADO", parameters, ok, error)*/
      parameters.push({ name: "TAREO_PROGRAMADO", value: js2xmlparser.parse("TAREO_PROGRAMADO", TAREO_PROGRAMADO) })
      console.log(js2xmlparser.parse("TAREO_PROGRAMADO", TAREO_PROGRAMADO))
    helper.transaction(sql, "rhTareo.SP_INS_TAREO_PROGRAMADO", parameters, ok, error)
}

function buscarTareoProgramadobyIdTrabajador(iIdTrabajador, ok, error) {
    var parameters = []
        parameters.push({ name: "ID_TRAB", value: iIdTrabajador})
        console.log('buscarTareoProgramadobyIdTrabajador')
        console.log(parameters)
    helper.query(sql, "rhTareo.SP_SEL_TAREO_PROGRAMADO", parameters, ok, error)
}

function buscarAsistenciabyTareoProgramado(iIdTrabajador, FechaIni, FechaFin, ok, error) {
    var parameters = []
        parameters.push({ name: "ID_TRAB", value: iIdTrabajador})
        parameters.push({ name: "FECHA_INI", value: FechaIni})
        parameters.push({ name: "FECHA_FIN", value: FechaFin})
         console.log('buscarAsistenciabyTareoProgramado')
        console.log(parameters)
    helper.query(sql, "rhTareo.SP_SEL_ASISTENCIA_BY_TAREO_PROGRAMADO", parameters, ok, error)
}

function UpdateTareoProgramado(dfecha, TipoTP, iIdAsistenciaTP, ok, error) {
    var parameters = []
        parameters.push({ name: "iIdAsistencia", value: iIdAsistenciaTP})
        parameters.push({ name: "FECHA", value: dfecha})
        parameters.push({ name: "TAREO", value: TipoTP})
        console.log('UpdateTareoProgramado')
        console.log(parameters)
    helper.transaction(sql, "rhTareo.SP_UPD_TAREO_PROGRAMADO", parameters, ok, error)
}

exports.buscarByFiltro = buscarByFiltro
exports.subirTareo = subirTareo
exports.programarTareo = programarTareo
exports.buscarTareoProgramadobyIdTrabajador = buscarTareoProgramadobyIdTrabajador
exports.buscarAsistenciabyTareoProgramado = buscarAsistenciabyTareoProgramado
exports.UpdateTareoProgramado = UpdateTareoProgramado