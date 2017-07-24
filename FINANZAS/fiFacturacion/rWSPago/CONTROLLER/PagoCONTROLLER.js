/*Imports*/
var PagoDAO= require("./../DAO/PagoDAO");
var PagoMODEL= require ('./../MODEL/Pago');

/*Controller*/
//GET Listar Pagos
ListaPagos = function (request,response){
    console.log("PagoCONTROLLER: " + request.params.dFechaInicial)
    console.log("PagoCONTROLLER: " + request.params.dFechaFinal)
    console.log("PagoCONTROLLER: " + request.params.vcRucCliente)
    var dFechaInicial=request.params.dFechaInicial
    var dFechaFinal=request.params.dFechaFinal
    var vcRucCliente=request.params.vcRucCliente
    function ok(lista){
        response.status(200).send(lista)
    }

    function error(error){
        response.status(201).send(error)
    }

    PagoDAO.listarpago(dFechaInicial,dFechaFinal,vcRucCliente,ok,error)

}

//POST - Insertar Pago
InsertarPago = function(request,response){
 var pago=PagoMODEL.Pago
     pago.vcIdSedePago=request.body.vcIdSedePago
     pago.vcIdTipoMedioPago=request.body.vcIdTipoMedioPago
     pago.vcRucCliente=request.body.vcRucCliente
     pago.vcIdEmpresaEntidadFinanciera=request.body.vcIdEmpresaEntidadFinanciera
     pago.dtFecha=request.body.dtFecha
     pago.vcIdMoneda=request.body.vcIdMoneda
     pago.vcOperacion=request.body.vcOperacion
     pago.nuImporte=request.body.nuImporte
     pago.nvObservacion=request.body.nvObservacion
     pago.nvArchivo=request.body.nvArchivo
     pago.iIdEstado=request.body.iIdEstado

console.log("InsertarPagoCONTROLLER: " + JSON.stringify(pago))

function ok(rowsAffected){
    console.log("PagoCONTROLLER: "+rowsAffected) 

    if (rowsAffected==0)
    {
        console.log("PagoCONTROLLER: Es cero")
        response.status(200).send("No se llevo a cabo la transacción")
        //response.send("No se llevo a cabo la transacción")
    }
    else{
        console.log("PagoCONTROLLER: Es DIFERNTE cero")
        //response.send("Pago Guardado: iIdPago: ")
        response.status(200).send("Pago Guardado: iIdPago: ")
    }
}

function error(error){
    console.log(error)
    response.status(201).send(error)
}

PagoDAO.insertarpago(pago,ok,error)

}

exports.listapagos=ListaPagos
exports.insertarpago=InsertarPago