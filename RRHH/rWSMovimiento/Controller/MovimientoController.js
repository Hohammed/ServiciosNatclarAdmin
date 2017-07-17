/*DAO*/
var MovimientoDao = require('./../DAO/MovimientoDAO')

/*model*/

var model = require('./../Model/Movimiento')

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    if(req.body.dsp==undefined){
        MovimientoDao.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        MovimientoDao.mostrar(ok, error)
    }
}

//GET - Buscar por ID
buscarById = function (req, res) {
    function ok(object) {
        res.send(object)
    }
    function error(error) {
        console.log(error)
    }
    parametros=[];

    var iIdMovimiento = {name:"iIdMovimiento", value:req.params.id}

    parametros.push(iIdMovimiento);
    //console.log(req.params.id)
    MovimientoDao.buscarById(parametros, ok, error)
}

//GET - Buscar por Filtro
buscarByFiltro = function (req, res) {
    function ok(object) {
        res.send(object)
    }
    function error(error) {
        console.log(error)
    }
    parametros=[];

    var vcNumeroDocumento = {name:"vcNumeroDocumento", value:req.query.vcNumeroDocumento}
    var vcIdSede = {name:"vcIdSede", value:req.query.vcIdSede}
    var dInicio = {name:"dInicio", value:req.query.dInicio}
    var dFin = {name:"dFin", value:req.query.dFin}
    var iIdEstado = {name:"iIdEstado", value:req.query.iIdEstado}

    parametros.push(vcNumeroDocumento);
    parametros.push(vcIdSede);
    parametros.push(dInicio);
    parametros.push(dFin);
    parametros.push(iIdEstado);

    MovimientoDao.buscarByFiltro(parametros, ok, error)
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    var Movimiento = model.Movimiento
    Movimiento.iIdMovimiento = req.body.iIdMovimiento
    Movimiento.vcNumeroDocumento = req.body.vcNumeroDocumento
    Movimiento.iIdRequerimiento = req.body.iIdRequerimiento
    Movimiento.iItemRQ = req.body.iItemRQ
    Movimiento.dAprobacion = req.body.dAprobacion
    Movimiento.vcIdSedeO = req.body.vcIdSedeO
    Movimiento.vcIdSede = req.body.vcIdSede
    Movimiento.iIdSistemaTrabajo = req.body.iIdSistemaTrabajo
    Movimiento.iIdPuesto = req.body.iIdPuesto
    Movimiento.vcIdAreaNatclarO = req.body.vcIdAreaNatclarO
    Movimiento.vcIdAreaNatclar = req.body.vcIdAreaNatclar
    Movimiento.vbSueldo = req.body.vbSueldo
    Movimiento.vbSueldoDestaque = req.body.vbSueldoDestaque
    Movimiento.dCambioSueldo = req.body.dCambioSueldo
    Movimiento.dInicio = req.body.dInicio
    Movimiento.dFin = req.body.dFin
    Movimiento.cPermanente = req.body.cPermanente
    Movimiento.nvObservacion = req.body.nvObservacion
    /*Movimiento.iIdEstadoAprobacion = req.body.iIdEstadoAprobacion
    Movimiento.iIdEstado = req.body.iIdEstado
    Movimiento.vcUsuarioCreacionApp = req.body.vcUsuarioCreacionApp
    Movimiento.vcUsuarioModificacionOT = req.body.vcUsuarioModificacionOT
    Movimiento.DETALLE_XML = req.body.DETALLE_XML*/
    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + Movimiento.iIdMovimiento)
        }
    }
    function error(error) {
        res.status(201).send(error)
        console.log(error)
    }
    MovimientoDao.insertar(Movimiento, ok, error)
}

//PUT - Confirmar registro
confirmarRegistro = function (req, res) {
    var Movimiento = model.Movimiento
    Movimiento.iIdMovimiento = req.params.id
    console.log(req.params.id)
    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + Movimiento.iIdMovimiento)
        }
        console.log("funcion ok")
    }
    function error(error) {
        res.status(201).send(error)
        console.log(error)
    }
    MovimientoDao.confirmar(Movimiento, ok, error)
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {
    var Movimiento = model.Movimiento
    Movimiento.iIdMovimiento = req.body.iIdMovimiento
    Movimiento.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + Movimiento.iIdMovimiento)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    MovimientoDao.modificar(Movimiento, ok, error)
}

//DELETE - Eliminar registro
eliminarRegistro = function (req, res) {
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
    MovimientoDao.eliminar(req.params.id, ok, error)
}

exports.listarTodo = listarTodo
exports.buscarByFiltro = buscarByFiltro
exports.buscarById = buscarById
exports.insertarRegistro = insertarRegistro
exports.confirmarRegistro = confirmarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro