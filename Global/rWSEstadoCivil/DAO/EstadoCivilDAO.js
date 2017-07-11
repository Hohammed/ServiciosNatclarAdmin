var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function mostrar(ok, error) {
    var parameters = []
    var parameter = {
        name: "dsp",
        //type: sql.VarChar,
        value: 1
    }
    parameters.push(parameter);
    helper.query(sql, "MAESTRO.sp_sel_estado_civil", parameters, ok, error)
}

function listar(ok, error) {
    helper.query(sql, "MAESTRO.sp_sel_estado_civil", [], ok, error)
}

function buscar(id, ok, error) {
    var parameters = []
    var parameter = {
        name: "cIdEstadoCivil",
        //type: sql.VarChar,
        value: id
    }
    parameters.push(parameter);
    helper.query(sql, "MAESTRO.sp_sel_estado_civil", parameters, ok, error)
}

function insertar(estadoCivil, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "cIdEstadoCivil",
        //type: sql.VarChar,
        value: estadoCivil.cIdEstadoCivil
    }
    var parameter2 = {
        name: "vcDenominacion",
        //type: sql.VarChar,
        value: estadoCivil.vcDenominacion
    }
    parameters.push(parameter1);
    parameters.push(parameter2);
    helper.transaction(sql, "MAESTRO.sp_ins_estado_civil", parameters, ok, error)
}

function modificar(estadoCivil, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "cIdEstadoCivil",
        //type: sql.VarChar,
        value: estadoCivil.cIdEstadoCivil
    }
    var parameter2 = {
        name: "vcDenominacion",
        //type: sql.VarChar,
        value: estadoCivil.vcDenominacion
    }
    parameters.push(parameter1);
    parameters.push(parameter2);
    helper.transaction(sql, "MAESTRO.sp_upd_estado_civil", parameters, ok, error)
}

function eliminar(id, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "cIdEstadoCivil",
        //type: sql.VarChar,
        value: id
    }
    parameters.push(parameter1);
    helper.transaction(sql, "MAESTRO.sp_del_estado_civil", parameters, ok, error)
}

exports.mostrar = mostrar
exports.listar = listar
exports.buscar = buscar
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar