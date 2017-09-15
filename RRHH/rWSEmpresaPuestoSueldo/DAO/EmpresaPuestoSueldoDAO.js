var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')
var js2xmlparser = require("js2xmlparser")

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

function insertarRegistro(EmpresaPuestoSueldo, ok, error) {
    var parameters = []
    parameters.push({ name: "EmpresaPuestoSueldo", value: js2xmlparser.parse("EmpresaPuestoSueldo", EmpresaPuestoSueldo) })
    console.log(js2xmlparser.parse("EmpresaPuestoSueldo", EmpresaPuestoSueldo))
    helper.transaction(sql, "cmGlobal.SP_UPD_CONTRATO_PROFESIONAL", parameters, ok, error)
}

function modificar(unidadOrganizativa, ok, error) {
}

function eliminar(id, ok, error) {
}

exports.buscarEmpresaPuestoSueldo = buscarEmpresaPuestoSueldo
exports.insertarRegistro = insertarRegistro
/*
exports.mostrar = mostrar
exports.listar = listar

exports.buscar = buscar
exports.modificar = modificar
exports.eliminar = eliminar*/