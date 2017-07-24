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

function filtrar(vcRucEmpresa, ok, error) {
    console.log("DAO: " + vcRucEmpresa)
    var parameters = []
    var parameter = {name: "vcRucEmpresa", value: vcRucEmpresa}
    parameters.push(parameter)
    helper.query(sql, "MAESTRO.SP_SEL_DSP_SEDE_BY_EMPRESA", parameters, ok, error)
}

function buscar(id, ok, error) {/*
    var parameters = []
    var parameter = { name: "vcRucEmpresa",
    //type: sql.VarChar,
    value: id }
    parameters.push(parameter);
    helper.query(sql, "", parameters, ok, error)*/
}

function insertar(sede, ok, error) {/*
    var parameters = []
    var parameter1 = {
        name: "vcRucEmpresa",
        //type: sql.VarChar,
        value: sede.vcIdSede
    }
    parameters.push(parameter1);
    helper.transaction(sql, "", parameters, ok, error)*/
}

function modificar(sede, ok, error) {/*
    var parameters = []
    var parameter1 = {
        name: "vcIdSede",
        //type: sql.VarChar,
        value: sede.vcIdSede
    }
    parameters.push(parameter1);
    helper.transaction(sql, "", parameters, ok, error)*/
}

function eliminar(id, ok, error) {/*
    var parameters = []
    var parameter1 = {
        name: "vcIdSede",
        //type: sql.VarChar,
        value: id
    }
    parameters.push(parameter1);
    helper.transaction(sql, "", parameters, ok, error)*/
}

exports.mostrar = mostrar
exports.listar = listar
exports.filtrar = filtrar
exports.buscar = buscar
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar