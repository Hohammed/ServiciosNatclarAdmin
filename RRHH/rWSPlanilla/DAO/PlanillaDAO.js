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
    helper.query(sql, "rhPlanilla.SP_SEL_PLANILLON", [], ok, error)
}

function listar(ok, error) {
    helper.query(sql, "rhPlanilla.SP_SEL_PLANILLON", [], ok, error)
}

/*function buscarById(parametros, ok, error) {
    helper.query(sql, "rhPlanilla.SP_OBT_Planilla", parametros, ok, error)
}*/


exports.mostrar = mostrar
exports.listar = listar