var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function sistemaTrabajoByUnidadOrganizativa(iIdUnidadOrganizativa, ok, error) {
    var parameters = []
    parameters.push( { name: "iIdUnidadOrganizativa", value: iIdUnidadOrganizativa } )
    helper.query(sql, "Maestro.SP_SEL_SISTEMA_TRABAJO", parameters, ok, error)
}

exports.sistemaTrabajoByUnidadOrganizativa = sistemaTrabajoByUnidadOrganizativa