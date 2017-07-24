/*Dataa Acces Object*/
var EntidadFinancieraDAO= require('./../DAO/EntidadFinancieraDAO')

/*Modelos*/
var model =require ('./../Model/EntidadFinanciera')

/*Controlador*/
//GET
listar = function (request,response){ 

    var EntidadFinanciera=model.EntidadFinanciera
    EntidadFinanciera.vcIdEntidadFinanciera = request.body.vcIdEntidadFinanciera
    EntidadFinanciera.vcDescripcion = request.body.vcDescripcion
    console.log("EntidadFinancieraController: "+JSON.stringify(EntidadFinanciera));
    function ok(lista){
        response.status(200).send(lista)
    }
    function error(error){
        response.status(201).send(error)
    }

    console.log( EntidadFinanciera.vcDescripcion )

    /*if(EntidadFinanciera.vcIdEntidadFinanciera==undefined){
        EntidadFinancieraDAO.listar(ok, error)
    }
    else {*/
    EntidadFinancieraDAO.filtrar( EntidadFinanciera ,ok,error)
    //}

}

exports.listar=listar


