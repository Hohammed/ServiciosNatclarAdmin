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
    console.log("DAO: " + idunidad)
    var parameters = []
    var parameter = {name: "iIdUnidadOrganizativa", value: idunidad}
    parameters.push(parameter)
    helper.query(sql, "Maestro.SP_SEL_DSP_EMPRESA_BY_UNIDAD_ORGANIZATIVA", parameters, ok, error)
}

function buscar(id, ok, error) {/*
    var parameters = []
    var parameter = { name: "vcRucEmpresa",
    //type: sql.VarChar,
    value: id }
    parameters.push(parameter);
    helper.query(sql, "", parameters, ok, error)*/
}

function insertar(unidadOrganizativa, ok, error) {/*
    var parameters = []
    var parameter1 = {
        name: "vcRucEmpresa",
        //type: sql.VarChar,
        value: unidadOrganizativa.vcRucEmpresa
    }
    parameters.push(parameter1);
    helper.transaction(sql, "", parameters, ok, error)*/
}

function modificar(unidadOrganizativa, ok, error) {/*
    var parameters = []
    var parameter1 = {
        name: "vcRucEmpresa",
        //type: sql.VarChar,
        value: unidadOrganizativa.vcRucEmpresa
    }
    parameters.push(parameter1);
    helper.transaction(sql, "", parameters, ok, error)*/
}

function eliminar(id, ok, error) {/*
    var parameters = []
    var parameter1 = {
        name: "vcRucEmpresa",
        //type: sql.VarChar,
        value: id
    }
    parameters.push(parameter1);
    helper.transaction(sql, "", parameters, ok, error)*/
}

/*Funciones para EMPRESA_ENTIDAD_FINANCIERA*/

//function ListarCuentasBancarias(vcRucEmpresa, ok, error){
function ListarCuentasBancarias(EmpresaEntidadFinanciera, ok, error){
console.log("EmpresaDAO: " +  JSON.stringify(EmpresaEntidadFinanciera))
    var parameters = [ 
        {name: "vcRucEmpresa", value: EmpresaEntidadFinanciera.vcRUCEmpresa}
    ,   {
        name: "vcIdEntidadFinanciera", value: EmpresaEntidadFinanciera.vcIdEntidadFinanciera }]
    /*var parameter = {name: "vcRucEmpresa", value: EmpresaEntidadFinanciera.vcRUCEmpresa}
    parameters.push(parameter)*/
    console.log("EmpresaDAO: " +  JSON.stringify(parameters))
    helper.query(sql, "Maestro.SP_SEL_EMPRESA_CUENTA_BANCARIA", parameters, ok, error)

}

exports.mostrar = mostrar
exports.listar = listar
exports.filtrar = filtrar
exports.buscar = buscar
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar
exports.listacuentabancaria = ListarCuentasBancarias