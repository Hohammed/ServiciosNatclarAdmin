var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function mostrar(ok, error) {
    helper.query(sql, "Maestro.SP_SEL_DSP_EMPRESA_BY_UNIDAD_ORGANIZATIVA", [], ok, error)
}

function listar(ok, error) {
    helper.query(sql, "Maestro.SP_SEL_DSP_EMPRESA_BY_UNIDAD_ORGANIZATIVA", [], ok, error)
}

function filtrar(idunidad, ok, error) {
    var parameters = []
    parameters.push({name: "iIdUnidadOrganizativa", value: idunidad})
    helper.query(sql, "Maestro.SP_SEL_DSP_EMPRESA_BY_UNIDAD_ORGANIZATIVA", parameters, ok, error)
}

function buscarEmpresaPuestoSueldo(filtro, ok, error) {
    var parameters = []
    parameters.push({name: "vcRucEmpresa", value: filtro})
    helper.query(sql, "cmGlobal.SP_BUSCAR_PUESTOS_BY_EMPRESA", parameters, ok, error)
}

function buscar(id, ok, error) {
}

function insertar(unidadOrganizativa, ok, error) {
}

function modificar(unidadOrganizativa, ok, error) {
}

function eliminar(id, ok, error) {
}

exports.buscarEmpresaPuestoSueldo = buscarEmpresaPuestoSueldo
/*
exports.mostrar = mostrar
exports.listar = listar

exports.buscar = buscar
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar*/