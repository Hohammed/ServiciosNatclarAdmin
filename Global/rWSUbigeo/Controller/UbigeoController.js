/*DAO*/
var ubigeoDAO = require('./../DAO/UbigeoDAO')

/*model*/
var model = require('./../Model/Ubigeo')

/*controller*/
listarDepartemento = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    ubigeoDAO.listarDepartemento(ok, error)
}

listarProvincia = function (vcCodigoUbigeoPadre, req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    ubigeoDAO.listarProvincia(req.body.vcCodigoUbigeoPadre, ok, error)
}

listarDistrito = function (vcCodigoUbigeoPadre, req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    ubigeoDAO.listarDistrito(req.body.vcCodigoUbigeoPadre, ok, error)
}

//GET - Listar
listarTodo = function (req, res) {/*
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    if(req.body.dsp==undefined){
        ubigeoDAO.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        ubigeoDAO.mostrar(ok, error)
    }*/
}
//GET - Buscar por ID
buscarById = function (req, res) {/*
    function ok(object) {
        res.send(object)
    }
    function error(error) {
        console.log(error)
    }
    ubigeoDAO.buscar(req.params.id, ok, error)*/
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {/*
    var estadoCivil = model.Ubigeo
    estadoCivil.cIdEstadoCivil = req.body.cIdEstadoCivil
    estadoCivil.vcDenominacion = req.body.vcDenominacion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + estadoCivil.cIdEstadoCivil)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    ubigeoDAO.insertar(estadoCivil, ok, error)*/
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {/*
    var estadoCivil = model.Ubigeo
    estadoCivil.cIdEstadoCivil = req.body.cIdEstadoCivil
    estadoCivil.vcDenominacion = req.body.vcDenominacion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + estadoCivil.cIdEstadoCivil)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    ubigeoDAO.modificar(estadoCivil, ok, error)*/
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
    ubigeoDAO.eliminar(req.params.id, ok, error)*/
}
exports.listarDepartemento = listarDepartemento
exports.listarProvinciaByDepartamento = listarProvinciaByDepartamento
exports.listarDistritoByProvincia = listarDistritoByProvincia
exports.listarTodo = listarTodo
exports.buscarById = buscarById
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro