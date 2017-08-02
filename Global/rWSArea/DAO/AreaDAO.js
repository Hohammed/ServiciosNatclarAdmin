var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/
function areaByPuesto(iIdMofPuesto, ok, error) {
    var parameters = []
    parameters.push( { name: "iIdMofPuesto", value: iIdMofPuesto } )
    helper.query(sql, "Maestro.SP_SEL_AREA_BY_PUESTO", parameters, ok, error)
}

exports.areaByPuesto = areaByPuesto