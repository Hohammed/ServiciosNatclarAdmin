var sql=require('mssql');

/*importa los Metodos del Helper*/
var helper = require('./../../../Helper/helper');

/*Funciones de Acceso a Datos*/
function listar(ok,error){
    console.log("Funcionlistar DAO")
    helper.query(sql,"Maestro.SP_SEL_ENTIDAD_FINANCIERA",[],ok,error)
}

function filtrar(EntidadFinanciera,ok,error){
    console.log("EntidadFinacieraDAO: " + JSON.stringify(EntidadFinanciera))
    var parameters= []
     /*
        {   
        name: "vcIdEntidadFinanciera", 
        value: EntidadFinanciera.vcIdEntidadFinanciera }
    ,   {
        name: "vcDescripcion", 
        value: EntidadFinanciera.vcDescripcion }]*/
   var parameter = 
    {   name: "vcIdEntidadFinanciera", 
        value: EntidadFinanciera.vcIdEntidadFinanciera }
    //,{name: "vcIdEntidadFinanciera", value: vcIdEntidadFinanciera }*/
    parameters.push(parameter)
    console.log("Funcion Filtrar"+ JSON.stringify(parameters))
    helper.query(sql,"Maestro.SP_SEL_ENTIDAD_FINANCIERA", parameters,ok,error )
    //helper.transaction(sql,"Maestro.SP_SEL_ENTIDAD_FINANCIERA", parameters,ok,error )
}

function insertar(EntidadFinanciera,ok,error){


}

exports.listar= listar;
exports.filtrar = filtrar;
exports.insertar =insertar;

