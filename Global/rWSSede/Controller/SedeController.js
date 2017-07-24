/*DAO*/
var sedeDAO = require('./../DAO/SedeDAO')

/*model*/
var model = require('./../Model/Sede')

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
        sedeDAO.listar([], ok, error)
    }
    if(req.body.dsp!=undefined){
        sedeDAO.mostrar(ok, error)
    }*/
}
filtrarByEmpresa = function (req, res) {
    console.log("controller: " + req.body.vcRucEmpresa)
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    sedeDAO.filtrar(req.body.vcRucEmpresa, ok, error)
}
//GET - Buscar por ID
buscarById = function (req, res) {/*
    function ok(object) {
        res.send(object)
    }
    function error(error) {
        console.log(error)
    }
    sedeDAO.buscar(req.params.id, ok, error)*/
}
//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {/*
    var sede = model.Sede
    sede.vcIdSede = req.body.vcIdSede
    sede.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + sede.vcIdSede)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    sedeDAO.insertar(sede, ok, error)*/
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {/*
    var sede = model.Sede
    sede.vcIdSede = req.body.vcIdSede
    sede.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevo a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + sede.vcIdSede)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    sedeDAO.modificar(sede, ok, error)*/
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
    sedeDAO.eliminar(req.params.id, ok, error)*/
}

exports.listarTodo = listarTodo
exports.buscarById = buscarById
exports.filtrarByEmpresa = filtrarByEmpresa
exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro