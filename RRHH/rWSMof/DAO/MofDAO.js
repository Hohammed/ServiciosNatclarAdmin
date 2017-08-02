var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function puestoByFiltro(filtro, ok, error) {
    var parameters = []
    parameters.push({ name: "FILTRO", value: filtro })
    helper.query(sql, "rhMof.SP_SEL_MOF_PUESTO_BY_FILTRO", parameters, ok, error)
}
function objetivos(iIdMofPuesto, ok, error) {
    var parameters = []
    parameters.push({ name: "iIdMofPuesto", value: iIdMofPuesto })
    helper.query(sql, "rhMof.SP_SEL_MOF_OBJETIVO_BY_PUESTO", parameters, ok, error)
}

function funciones(iIdMofPuesto, ok, error) {
    var parameters = []
    parameters.push({ name: "iIdMofPuesto", value: iIdMofPuesto })
    helper.query(sql, "rhMof.SP_SEL_MOF_FUNCIONES_BY_PUESTO", parameters, ok, error)
}

function educacionProfecional(iIdMofPuesto, ok, error) {
    var parameters = []
    parameters.push({ name: "iIdMofPuesto", value: iIdMofPuesto })
    helper.query(sql, "rhMof.SP_SEL_MOF_EDUCACION_PROFESIONAL_BY_PUESTO", parameters, ok, error)
}

function educacionComplementaria(iIdMofPuesto, ok, error) {
    var parameters = []
    parameters.push({ name: "iIdMofPuesto", value: iIdMofPuesto })
    helper.query(sql, "rhMof.SP_SEL_MOF_EDUCACION_COMPLEMENTARIA_BY_PUESTO", parameters, ok, error)
}

function competenciasGenerales(iIdMofPuesto, ok, error) {
    var parameters = []
    parameters.push({ name: "iIdMofPuesto", value: iIdMofPuesto })
    helper.query(sql, "rhMof.SP_SEL_MOF_COMPETENCIAS_GENERALES_BY_PUESTO", parameters, ok, error)
}

function competenciasEspecificas(iIdMofPuesto, ok, error) {
    var parameters = []
    parameters.push({ name: "iIdMofPuesto", value: iIdMofPuesto })
    helper.query(sql, "rhMof.SP_SEL_MOF_COMPETENCIAS_ESPECIFICAS_BY_PUESTO", parameters, ok, error)
}

exports.puestoByFiltro = puestoByFiltro
exports.objetivos = objetivos
exports.funciones = funciones
exports.educacionProfecional = educacionProfecional
exports.educacionComplementaria = educacionComplementaria
exports.competenciasGenerales = competenciasGenerales
exports.competenciasEspecificas = competenciasEspecificas