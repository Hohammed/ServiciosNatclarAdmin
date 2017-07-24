/*Importamos */
var sql= require('mssql');
var helper = require("./../../../../Helper/Helper")

/*Definiciones de Acceso a Datos*/

function ListarPago (dFechaInicial,dFechaFinal,vcRucCliente, ok ,error){
   var parameters=[
                { name: "dFechaInicial", value: dFechaInicial}
              ,{name: "dFechaFinal",   value:dFechaFinal}
              , {name: "vcRucCliente" ,value:vcRucCliente}]

   console.log("Pago DAO: "+ JSON.stringify(parameters))
   helper.query(sql,"fiFacturacion.SP_SEL_PAGO",parameters,ok,error)

}

function InsertarPago (Pago,ok,error){
    var parameters=[ { name: "vcIdSedePago", value: Pago.vcIdSedePago}
                    ,{ name: "vcIdTipoMedioPago", value: Pago.vcIdTipoMedioPago}
                    ,{ name: "vcRucCliente", value: Pago.vcRucCliente}
                    ,{ name: "vcIdEmpresaEntidadFinanciera", value: Pago.vcIdEmpresaEntidadFinanciera}
                    ,{ name: "dtFecha", value: Pago.dtFecha}
                    ,{ name: "vcIdMoneda", value: Pago.vcIdMoneda}
                    ,{ name: "vcOperacion", value: Pago.vcOperacion}
                    ,{ name: "nuImporte", value: Pago.nuImporte}
                    ,{ name: "nvObservacion", value: Pago.nvObservacion}
                    ,{ name: "nvArchivo", value: Pago.nvArchivo}
                    ,{ name: "iIdEstado", value: Pago.iIdEstado}]

/*var parameters=[{ name: "vcIdSedePago", value: Pago.vcIdSedePago}
                    ,{ name: "@vcIdTipoMedioPago", value: Pago.vcIdTipoMedioPago}
                    ,{ name: "@vcRucCliente", value: Pago.vcRucCliente}
                    ,{ name: "@vcIdEmpresaEntidadFinanciera", value: Pago.vcIdEmpresaEntidadFinanciera}
                    ,{ name: "@dtFecha", value: Pago.dtFecha}
                    ,{ name: "@vcIdMoneda", value: Pago.vcIdMoneda}
                    ,{ name: "@vcOperacion", value: Pago.vcOperacion}
                    ,{ name: "@nuImporte", value: Pago.nuImporte}
                    ,{ name: "@nvObservacion", value: Pago.nvObservacion}
                    ,{ name: "@nvArchivo", value: Pago.nvArchivo}
                    ,{ name: "@iIdEstado", value: Pago.iIdEstado}]   */                 

//console.log("InsertarPagoDAO: " +JSON.stringify(parameters))    
helper.transaction(sql,"fiFacturacion.SP_INS_PAGO",parameters,ok,error)                
//helper.transaction2(sql,"fiFacturacion.SP_INS_PAGO",parameters,ok,error)                

}

exports.listarpago=ListarPago
exports.insertarpago=InsertarPago



