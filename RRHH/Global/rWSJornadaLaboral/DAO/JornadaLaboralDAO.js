var sql = require('mssql')

/*helper*/
var helper = require('./../../../../Helper/helper')

/*DAO*/

function mostrar(ok, error) {
    /*var parameters = []
    var parameter = {
        name: "dsp",
        //type: sql.VarChar,
        value: 1
    }
    parameters.push(parameter);*/
    helper.query(sql, "Maestro.SP_SEL_JORNADA_LABORAL", [], ok, error)
}

function listar(ok, error) {
    helper.query(sql, "Maestro.SP_SEL_JORNADA_LABORAL", [], ok, error)
}
/*
function buscar(id, ok, error) {
    var parameters = []
    var parameter = {
        name: "iIdPeriodo",
        //type: sql.VarChar,
        value: id
    }
    parameters.push(parameter);
    helper.query(sql, "rhGlobal.SP_SEL_BUS_PERIODO", parameters, ok, error)
}

function insertar(Periodo, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "iIdPeriodo",
        //type: sql.VarChar,
        value: Periodo.iIdPeriodo
    }
    var parameter2 = {
        name: "vcDescripcion",
        //type: sql.VarChar,
        value: Periodo.vcDescripcion
    }
    parameters.push(parameter1);
    parameters.push(parameter2);
    helper.transaction(sql, "rhGlobal.SP_TRS_INS_PERIODO", parameters, ok, error)
}

function modificar(Periodo, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "iIdPeriodo",
        //type: sql.VarChar,
        value: Periodo.vcDescripcion
    }
    var parameter2 = {
        name: "vcDescripcion",
        //type: sql.VarChar,
        value: Periodo.vcDescripcion
    }
    parameters.push(parameter1);
    parameters.push(parameter2);
    helper.transaction(sql, "rhGlobal.SP_TRS_UPD_PERIODO", parameters, ok, error)
}

function eliminar(id, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "iIdPeriodo",
        //type: sql.VarChar,
        value: id
    }
    parameters.push(parameter1);
    helper.transaction(sql, "rhGlobal.SP_TRS_DEL_PERIODO", parameters, ok, error)
}
*/
exports.mostrar = mostrar
exports.listar = listar
/*exports.buscar = buscar
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar*/