/*DAO*/
var empresaDAO = require('./../DAO/EmpresaDAO')

/*model*/
var model = require('./../Model/Empresa')

/*controller*/
//GET - Listar
listarTodo = function (req, res) {/*
    var parametros =0;
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    if(req.body.dsp==undefined){
        empresaDAO.listar([], ok, error)
    }
    if(req.body.dsp!=undefined){
        empresaDAO.mostrar(ok, error)
    }*/
}
filtrarByUnidadOrganizativa = function (req, res) {
    console.log("controller: " + req.body.iIdUnidadOrganizativa)
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
buscarById = function (req, res) {/*
    function ok(object) {
        res.send(object)
    }
    function error(error) {
        console.log(error)
    }
    empresaDAO.buscar(req.params.id, ok, error)*/
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {/*
    var empresa = model.Empresa
    empresa.vcRucEmpresa = req.body.vcRucEmpresa
    empresa.nvRazonSocial = req.body.nvRazonSocial

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + empresa.vcRucEmpresa)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    empresaDAO.insertar(empresa, ok, error)*/
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {/*
    var empresa = model.Empresa
    empresa.vcRucEmpresa = req.body.vcRucEmpresa
    empresa.nvRazonSocial = req.body.nvRazonSocial

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + empresa.vcRucEmpresa)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    empresaDAO.modificar(empresa, ok, error)*/
}

//DELETE - Eliminar registro
eliminarRegistro = function (req, res) {/*
    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro eliminado: ID - ' + req.params.id)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    empresaDAO.eliminar(req.params.id, ok, error)*/
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