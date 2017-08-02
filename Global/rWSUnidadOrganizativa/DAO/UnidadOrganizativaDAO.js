var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function mostrar(ok, error) {
    helper.query(sql, "Maestro.SP_SEL_DSP_UNIDAD_ORGANIZATIVA", [], ok, error)
}

function listar(ok, error) {
    helper.query(sql, "Maestro.SP_SEL_DSP_UNIDAD_ORGANIZATIVA", [], ok, error)
}

exports.mostrar = mostrar
exports.listar = listar