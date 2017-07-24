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

/*function buscarById(parametros, ok, error) {
    helper.query(sql, "rhMovimiento.SP_OBT_MOVIMIENTO", parametros, ok, error)
}*/

function buscarById(iIdMovimiento, iIdRequerimiento, iItemRQ, ok, error) {
    var parameters = []
   parameters.push({ name: "iIdMovimiento", value: iIdMovimiento })
   parameters.push({ name: "iIdRequerimiento", value: iIdRequerimiento })
   parameters.push({ name: "iItemRQ", value: iItemRQ })
    
    helper.query(sql, "rhMovimiento.SP_OBT_MOVIMIENTO", parameters, ok, error)
}

function buscarByFiltro(parametros, ok, error) {
    helper.query(sql, "rhMovimiento.SP_SEL_MOVIMIENTO", parametros, ok, error)
}

function insertar(Movimiento, ok, error) {
    var parameters = []
    parameters.push({ name: "iIdMovimiento", value: Movimiento.iIdMovimiento })
    parameters.push({ name: "vcNumeroDocumento", value: Movimiento.vcNumeroDocumento })
    parameters.push({ name: "iIdRequerimiento", value: Movimiento.iIdRequerimiento })
    parameters.push({ name: "iItemRQ", value: Movimiento.iItemRQ })
    parameters.push({ name: "dAprobacion", value: Movimiento.dAprobacion })
    parameters.push({ name: "vcIdSedeO", value: Movimiento.vcIdSedeO })
    parameters.push({ name: "vcIdSede", value: Movimiento.vcIdSede })
    parameters.push({ name: "iIdSistemaTrabajo", value: Movimiento.iIdSistemaTrabajo })
    parameters.push({ name: "iIdSistemaTrabajoO", value: Movimiento.iIdSistemaTrabajoO })
    parameters.push({ name: "iIdPuesto", value: Movimiento.iIdPuesto })
    parameters.push({ name: "iIdPuestoO", value: Movimiento.iIdPuestoO })
    parameters.push({ name: "vcIdAreaNatclarO", value: Movimiento.vcIdAreaNatclarO })
    parameters.push({ name: "vcIdAreaNatclar", value: Movimiento.vcIdAreaNatclar })
    parameters.push({ name: "vbSueldo", value: Movimiento.vbSueldo })
    parameters.push({ name: "vbSueldoDestaque", value: Movimiento.vbSueldoDestaque })
    parameters.push({ name: "dCambioSueldo", value: Movimiento.dCambioSueldo })
    parameters.push({ name: "dInicio", value: Movimiento.dInicio })
    parameters.push({ name: "dFin", value: Movimiento.dFin })
    parameters.push({ name: "cPermanente", value: Movimiento.cPermanente })
    parameters.push({ name: "nvObservacion", value: Movimiento.nvObservacion })
    /*parameters.push({ name: "iIdEstadoAprobacion", value: Movimiento.iIdEstadoAprobacion })
    parameters.push({ name: "iIdEstado", value: Movimiento.iIdEstado })
    parameters.push({ name: "vcUsuarioCreacionApp", value: Movimiento.vcUsuarioCreacionApp })
    parameters.push({ name: "vcUsuarioModificacionOT", value: Movimiento.vcUsuarioModificacionOT })
    parameters.push({ name: "DETALLE_XML", value: js2xmlparser.parse("MovimientoDetalle", Movimiento.DETALLE_XML) })
    helper.transaction(sql, "rhMovimiento.SP_INS_Movimiento", parameters, ok, error)
*/
console.log(parameters)
    helper.transaction(sql, "rhMovimiento.SP_TRS_INS_MOVIMIENTO", parameters, ok, error)
   
}

function confirmar(Movimiento, ok, error) {
    var parameters = []
    parameters.push({ name: "iIdMovimiento", value: Movimiento.iIdMovimiento })
    helper.transaction(sql, "rhMovimiento.SP_CONFIRMAR_MOVIMIENTO", parameters, ok, error)
   
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
exports.confirmar = confirmar