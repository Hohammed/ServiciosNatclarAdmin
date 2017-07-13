var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function mostrar(ok, error) {
    /*var parameters = []
    var parameter = {
        name: "dsp",
        //type: sql.VarChar,
        value: 1
    }
    parameters.push(parameter);*/
    helper.query(sql, "rhMovimiento.SP_OBT_MOVIMIENTO", [], ok, error)
}

function listar(ok, error) {
    helper.query(sql, "rhMovimiento.SP_OBT_MOVIMIENTO", [], ok, error)
}

function buscarById(parametros, ok, error) {
    helper.query(sql, "rhMovimiento.SP_OBT_MOVIMIENTO", parametros, ok, error)
}

function buscarByFiltro(parametros, ok, error) {
    helper.query(sql, "rhMovimiento.SP_SEL_MOVIMIENTO", parametros, ok, error)
}

function insertar(Movimiento, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "iIdMovimiento",
        //type: sql.VarChar,
        value: Movimiento.iIdMovimiento
    }
    var parameter2 = {
        name: "vcDescripcion",
        //type: sql.VarChar,
        value: Movimiento.vcDescripcion
    }
    parameters.push(parameter1);
    parameters.push(parameter2);
    helper.transaction(sql, "rhGlobal.SP_TRS_INS_Movimiento", parameters, ok, error)
}

function modificar(Movimiento, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "iIdMovimiento",
        //type: sql.VarChar,
        value: Movimiento.vcDescripcion
    }
    var parameter2 = {
        name: "vcDescripcion",
        //type: sql.VarChar,
        value: Movimiento.vcDescripcion
    }
    parameters.push(parameter1);
    parameters.push(parameter2);
    helper.transaction(sql, "rhGlobal.SP_TRS_UPD_Movimiento", parameters, ok, error)
}

function eliminar(id, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "iIdMovimiento",
        //type: sql.VarChar,
        value: id
    }
    parameters.push(parameter1);
    helper.transaction(sql, "rhGlobal.SP_TRS_DEL_Movimiento", parameters, ok, error)
}

exports.mostrar = mostrar
exports.listar = listar
exports.buscarByFiltro = buscarByFiltro
exports.buscarById = buscarById
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar