var sql = require('mssql')

/*helper*/
var helper = require('./../../../../Helper/helper')

/*DAO*/
function listar(ok, error) {
    helper.query(sql, "Maestro.SP_SEL_REQUERIMIENTO_ESTADO_CLASE", [], ok, error)
}

exports.listar = listar