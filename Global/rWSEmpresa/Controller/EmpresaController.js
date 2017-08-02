/*DAO*/
var empresaDAO = require('./../DAO/EmpresaDAO')

/*model*/
var model = require('./../Model/Empresa')

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
}
filtrarByUnidadOrganizativa = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    empresaDAO.filtrar(req.body.iIdUnidadOrganizativa, ok, error)
}
//GET - Buscar por ID
buscarById = function (req, res) {
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {
}

//DELETE - Eliminar registro
eliminarRegistro = function (req, res) {
}

Lista_CuentaBancaria_Empresa = function (request,response)
{
    console.log("Empresacontroller: " + request.params.vcRucEmpresa)
    console.log("Empresacontroller: " + request.params.vcIdEntidadFinanciera)
    
    var EmpresaEntidadFinanciera= model.EmpresaEntidadFinanciera
    EmpresaEntidadFinanciera.vcRUCEmpresa= request.params.vcRucEmpresa
    EmpresaEntidadFinanciera.vcIdEntidadFinanciera= request.params.vcIdEntidadFinanciera

    console.log("Empresacontroller: " + JSON.stringify(EmpresaEntidadFinanciera))
    
    function ok(lista) {
        response.status(200).send(lista)
    }
    function error(error) {
        console.log(error)
        response.status(201).send(error)
    }
    empresaDAO.listacuentabancaria(EmpresaEntidadFinanciera, ok, error)

}


exports.listarTodo = listarTodo
exports.buscarById = buscarById
exports.filtrarByUnidadOrganizativa = filtrarByUnidadOrganizativa
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro
exports.listarcuentaempresa=Lista_CuentaBancaria_Empresa