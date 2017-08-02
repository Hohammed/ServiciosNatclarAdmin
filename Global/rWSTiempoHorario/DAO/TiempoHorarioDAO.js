var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function listarTiempo(ok, error) {
    helper.query(sql, "rhGlobal.SP_SEL_TIEMPO", [], ok, error)
}

function listarHorarioByTiempo(iIdTiempo, ok, error) {
	var parametros = []
	parametros.push({name: "iIdTiempo", value: iIdTiempo})
    helper.query(sql, "rhGlobal.SP_SEL_HORARIO_BY_TIEMPO", parametros, ok, error)
}

exports.listarTiempo = listarTiempo
exports.listarHorarioByTiempo = listarHorarioByTiempo