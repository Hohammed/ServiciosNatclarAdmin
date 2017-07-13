var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')
var js2xmlparser = require("js2xmlparser");

/*DAO*/
function listar(ok, error) {/*
    helper.query(sql, "MAESTRO.sp_sel_estado_civil", [], ok, error)*/
}

function buscar(id, ok, error) {/*
    var parameters = []
    var parameter = {
        name: "cIdEstadoCivil",
        //type: sql.VarChar,
        value: id
    }
    parameters.push(parameter);
    helper.query(sql, "MAESTRO.sp_sel_estado_civil", parameters, ok, error)*/
}

function insertar(requerimiento, ok, error) {
    //var xml = requerimiento.DETALLE_XML
    var parameters = []
    parameters.push({ name: "iIdRequerimiento", value: requerimiento.iIdRequerimiento })
    parameters.push({ name: "vcNumeroDocumento", value: requerimiento.vcNumeroDocumento })
    parameters.push({ name: "vcIdSedeOrigen", value: requerimiento.vcIdSedeOrigen })
    parameters.push({ name: "iIdUnidadOrganizativa", value: requerimiento.iIdUnidadOrganizativa })
    parameters.push({ name: "vcIdSede", value: requerimiento.vcIdSede })
    parameters.push({ name: "vcRucEmpresa", value: requerimiento.vcRucEmpresa })
    parameters.push({ name: "vcCodigoUbigeo", value: requerimiento.vcCodigoUbigeo })
    parameters.push({ name: "dFecha", value: requerimiento.dFecha })
    parameters.push({ name: "nvObservacion", value: requerimiento.nvObservacion })
    parameters.push({ name: "iIdEstadoAprobacion", value: requerimiento.iIdEstadoAprobacion })
    parameters.push({ name: "iIdEstado", value: requerimiento.iIdEstado })
    parameters.push({ name: "vcUsuarioCreacionApp", value: requerimiento.vcUsuarioCreacionApp })
    parameters.push({ name: "vcUsuarioModificacionOT", value: requerimiento.vcUsuarioModificacionOT })
    parameters.push({ name: "DETALLE_XML", value: js2xmlparser.parse("RequerimientoDetalle", requerimiento.DETALLE_XML) })
    helper.transaction(sql, "rhRequerimiento.SP_INS_REQUERIMIENTO", parameters, ok, error)
}

function modificar(estadoCivil, ok, error) {/*
    var parameters = []
    var parameter1 = {
        name: "cIdEstadoCivil",
        //type: sql.VarChar,
        value: estadoCivil.cIdEstadoCivil
    }
    var parameter2 = {
        name: "vcDenominacion",
        //type: sql.VarChar,
        value: estadoCivil.vcDenominacion
    }
    parameters.push(parameter1);
    parameters.push(parameter2);
    helper.transaction(sql, "MAESTRO.sp_upd_estado_civil", parameters, ok, error)*/
}

exports.listar = listar
exports.buscar = buscar
exports.insertar = insertar
exports.modificar = modificar