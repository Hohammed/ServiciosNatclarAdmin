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
    helper.query(sql, "rhPlanilla.SP_BUSCAR_CONTRATO_POR_TERMINAR", [], ok, error)
}

function listarTodo(AREA, ok, error) {
    var parameters = []
    parameters.push({name: "AREA", value: AREA})
    helper.query(sql, "rhPlanilla.SP_SEL_CONTRATO_POR_TERMINAR_BY_AREA", parameters, ok, error)
}


function buscarByFiltro(filtro, ok, error) {
    var parameters = []
    parameters.push({name: "LOGIN", value: filtro})
    helper.query(sql, "siUsuario.SP_SEL_USUARIO_BY_ID_USUARIO_NUEVO", parameters, ok, error)
}
/*function buscarById(parametros, ok, error) {
    helper.query(sql, "rhPlanilla.SP_OBT_Planilla", parametros, ok, error)
}*/


exports.mostrar = mostrar
exports.listarTodo = listarTodo
exports.buscarByFiltro = buscarByFiltro