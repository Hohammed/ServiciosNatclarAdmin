/*DAO*/
var RegistroTrabajadorDAO = require('./../DAO/RegistroTrabajadorDAO')

/*model*/

var model = require('./../Model/RegistroTrabajador')

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
   /* function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    if(req.body.dsp==undefined){
        RegistroTrabajadorDAO.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        RegistroTrabajadorDAO.mostrar(ok, error)
    }*/
}
//GET - Buscar por ID
BuscarbyFiltro = function (req, res) {
    function ok(object) {
        res.send(object)
    }
    function error(error) {
        console.log(error)
    }
    console.log(req.body.filtro)
    RegistroTrabajadorDAO.BuscarbyFiltro(req.body.filtro, ok, error)
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    /*console.log(req.body.DatosPersonalesTrabajador)
    console.log(req.body.DatosDireccionTrabajador)
    console.log(req.body.DatosTelefonoTrabajador)
    console.log(req.body.DatosCorreoTrabajador)
    console.log(req.body.DatosFamiliaresTrabajador)*/
    var DatosPersonalesTrabajador = req.body.DatosPersonalesTrabajador
    var DatosDireccionTrabajador = req.body.DatosDireccionTrabajador
    var DatosTelefonoTrabajador = req.body.DatosTelefonoTrabajador
    var DatosCorreoTrabajador = req.body.DatosCorreoTrabajador
    var DatosFamiliaresTrabajador = req.body.DatosFamiliaresTrabajador
    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevó a cabo la transacción")
        } else {
            res.send('Registro guradado con éxito')
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
   RegistroTrabajadorDAO.insertar(DatosPersonalesTrabajador, DatosDireccionTrabajador,DatosTelefonoTrabajador,DatosCorreoTrabajador,DatosFamiliaresTrabajador,ok, error)
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {/*
    var requerimiento = model.Requerimiento
    requerimiento.cIdEstadoCivil = req.body.cIdEstadoCivil
    requerimiento.vcDenominacion = req.body.vcDenominacion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + requerimiento.cIdEstadoCivil)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    requerimientoDAO.modificar(requerimiento, ok, error)*/
}
/*
exports.listarTodo = listarTodo*/
exports.BuscarbyFiltro = BuscarbyFiltro
exports.insertarRegistro = insertarRegistro
/*exports.modificarRegistro = modificarRegistro*/