var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')
var js2xmlparser = require("js2xmlparser");

/*DAO*/
function listar(ok, error) {/*
    helper.query(sql, "MAESTRO.sp_sel_estado_civil", [], ok, error)*/
}

function BuscarbyFiltro(filtro, ok, error) {
    var parameters = []
    var parameter = {name: "FILTRO", value: filtro}
    parameters.push(parameter);
    helper.query(sql, "rhGlobal.SP_SEL_TRABAJADOR_BY_FILTRO_NUEVO", parameters, ok, error)
}

function insertar(DatosPersonalesTrabajador, DatosDireccionTrabajador,DatosTelefonoTrabajador,DatosCorreoTrabajador,DatosFamiliaresTrabajador,ok, error) {
    //var xml = trabajador.DETALLE_XML
    var parameters = []
    /*parameters.push({ name: "iIdTrabajador", value: trabajador.iIdTrabajador })
    parameters.push({ name: "vcNumeroDocumento", value: trabajador.vcNumeroDocumento })
    parameters.push({ name: "vcIdSedeOrigen", value: trabajador.vcIdSedeOrigen })
    parameters.push({ name: "iIdUnidadOrganizativa", value: trabajador.iIdUnidadOrganizativa })
    parameters.push({ name: "vcIdSede", value: trabajador.vcIdSede })
    parameters.push({ name: "vcRucEmpresa", value: trabajador.vcRucEmpresa })
    parameters.push({ name: "vcCodigoUbigeo", value: trabajador.vcCodigoUbigeo })
    parameters.push({ name: "dFecha", value: trabajador.dFecha })
    parameters.push({ name: "nvObservacion", value: trabajador.nvObservacion })
    parameters.push({ name: "iIdEstadoAprobacion", value: trabajador.iIdEstadoAprobacion })
    parameters.push({ name: "iIdEstado", value: trabajador.iIdEstado })
    parameters.push({ name: "vcUsuarioCreacionApp", value: trabajador.vcUsuarioCreacionApp })
    parameters.push({ name: "vcUsuarioModificacionOT", value: trabajador.vcUsuarioModificacionOT })*/
    parameters.push({ name: "DatosPersonalesTrabajador", value: js2xmlparser.parse("DatosPersonalesTrabajador", DatosPersonalesTrabajador) })
    parameters.push({ name: "DatosDireccionTrabajador", value: js2xmlparser.parse("DatosDireccionTrabajador", DatosDireccionTrabajador) })
    parameters.push({ name: "DatosTelefonoTrabajador", value: js2xmlparser.parse("DatosTelefonoTrabajador", DatosTelefonoTrabajador) })
    parameters.push({ name: "DatosCorreoTrabajador", value: js2xmlparser.parse("DatosCorreoTrabajador", DatosCorreoTrabajador) })
    parameters.push({ name: "DatosFamiliaresTrabajador", value: js2xmlparser.parse("DatosFamiliaresTrabajador", DatosFamiliaresTrabajador) })
    console.log(js2xmlparser.parse("DatosPersonalesTrabajador", DatosPersonalesTrabajador))
    console.log(js2xmlparser.parse("DatosDireccionTrabajador", DatosDireccionTrabajador))
    console.log(js2xmlparser.parse("DatosTelefonoTrabajador", DatosTelefonoTrabajador))
    console.log(js2xmlparser.parse("DatosCorreoTrabajador", DatosCorreoTrabajador))
    console.log(js2xmlparser.parse("DatosFamiliaresTrabajador", DatosFamiliaresTrabajador))
    helper.transaction(sql, "rhGlobal.SP_INS_DATOS_TRABAJADOR", parameters, ok, error)
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
/*
exports.listar = listar*/
exports.BuscarbyFiltro =BuscarbyFiltro
exports.insertar = insertar
/*exports.modificar = modificar*/