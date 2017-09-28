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
    helper.query(sql, "rhGlobal.SP_SEL_OCUPACION_BY_CATEG_OCUP", [], ok, error)
}

function listar(ok, error) {
    helper.query(sql, "rhGlobal.SP_SEL_OCUPACION_BY_CATEG_OCUP", [], ok, error)
}

function listOcupByCategoria(iIdCategoriaOcupacion, ok, error) {
 	var parametros = []
	parametros.push({name: "iIdCategoriaOcupacion", value: iIdCategoriaOcupacion})
    helper.query(sql, "rhGlobal.SP_SEL_OCUPACION_BY_CATEG_OCUP", parametros, ok, error)

}

exports.listar = listar
exports.listOcupByCategoria = listOcupByCategoria

/*
function insertar(puesto, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "iIdPuesto",
        //type: sql.VarChar,
        value: puesto.iIdPuesto
    }
    var parameter2 = {
        name: "vcDescripcion",
        //type: sql.VarChar,
        value: puesto.vcDescripcion
    }
    parameters.push(parameter1);
    parameters.push(parameter2);
    helper.transaction(sql, "rhGlobal.SP_TRS_INS_PUESTO", parameters, ok, error)
}

function modificar(puesto, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "iIdPuesto",
        //type: sql.VarChar,
        value: puesto.vcDescripcion
    }
    var parameter2 = {
        name: "vcDescripcion",
        //type: sql.VarChar,
        value: puesto.vcDescripcion
    }
    parameters.push(parameter1);
    parameters.push(parameter2);
    helper.transaction(sql, "rhGlobal.SP_TRS_UPD_PUESTO", parameters, ok, error)
}

function eliminar(id, ok, error) {
    var parameters = []
    var parameter1 = {
        name: "iIdPuesto",
        //type: sql.VarChar,
        value: id
    }
    parameters.push(parameter1);
    helper.transaction(sql, "rhGlobal.SP_TRS_DEL_PUESTO", parameters, ok, error)
}
*/
// exports.mostrar = mostrar
// exports.listar = listar
/*exports.buscar = buscar
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar*/