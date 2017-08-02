var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function mostrar(ok, error) {
    helper.query(sql, "MAESTRO.SP_SEL_DSP_SEDE_BY_EMPRESA", [], ok, error)
}

function listar(ok, error) {
    helper.query(sql, "MAESTRO.SP_SEL_DSP_SEDE_BY_EMPRESA", [], ok, error)
}

function filtrar(vcRucEmpresa, iIdUnidadOrganizativa, ok, error) {
    var parameters = []
    parameters.push( { name: "vcRucEmpresa", value: vcRucEmpresa } )
    parameters.push( { name: "iIdUnidadOrganizativa", value: iIdUnidadOrganizativa } )
    helper.query(sql, "MAESTRO.SP_SEL_DSP_SEDE_BY_EMPRESA", parameters, ok, error)
}

function buscar(id, ok, error) {
}

function insertar(sede, ok, error) {
}

function modificar(sede, ok, error) {
}

function eliminar(id, ok, error) {
}

exports.mostrar = mostrar
exports.listar = listar
exports.filtrar = filtrar
exports.buscar = buscar
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar