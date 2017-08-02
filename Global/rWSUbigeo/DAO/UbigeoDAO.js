var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function listarDepartamento(ok, error) {
    helper.query(sql, "Maestro.SP_SEL_DSP_DEPARTAMENTO", [], ok, error)
}
function listarProvinciaByDepartamento(vcCodigoUbigeoPadre, ok, error) {
    var parameters = []
    parameters.push({ name: "vcCodigoUbigeoPadre", value: vcCodigoUbigeoPadre })
    helper.query(sql, "Maestro.SP_SEL_DSP_PROVINCIA_BY_DEPARTAMENTO", parameters, ok, error)
}
function listarDistritoByProvincia(vcCodigoUbigeoPadre, ok, error) {
    var parameters = []
    parameters.push({ name: "vcCodigoUbigeoPadre", value: vcCodigoUbigeoPadre })
    helper.query(sql, "Maestro.SP_SEL_DSP_DISTRITO_BY_PROVINCIA", parameters, ok, error)
}
function mostrar(ok, error) {
}

function listar(ok, error) {
}

function buscarBySede(vcIdSede, ok, error) {
    var parameters = []
    parameters.push({ name: "vcIdSede", value: vcIdSede });
    helper.query(sql, "Maestro.SP_SEL_UBIGEO_BY_SEDE", parameters, ok, error)
}

function buscar(id, ok, error) {
}

exports.listarDepartamento = listarDepartamento
exports.listarProvinciaByDepartamento = listarProvinciaByDepartamento
exports.listarDistritoByProvincia = listarDistritoByProvincia
exports.mostrar = mostrar
exports.listar = listar
exports.buscarBySede = buscarBySede
exports.buscar = buscar