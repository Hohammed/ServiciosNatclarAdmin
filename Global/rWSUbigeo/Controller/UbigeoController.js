/*DAO*/
var ubigeoDAO = require('./../DAO/UbigeoDAO')

/*model*/
var model = require('./../Model/Ubigeo')

/*controller*/
listarDepartamento = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    ubigeoDAO.listarDepartamento(ok, error)
}

listarProvinciaByDepartamento = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    ubigeoDAO.listarProvinciaByDepartamento(req.body.vcCodigoUbigeoPadre, ok, error)
}

listarDistritoByProvincia = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    ubigeoDAO.listarDistritoByProvincia(req.body.vcCodigoUbigeoPadre, ok, error)
}

//GET - Listar
listarTodo = function (req, res) {
}
//GET - Buscar por ID
buscarBySede = function (req, res) {
    function ok(object) {
        console.log(object)
        res.status(200).send(object)
    }
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    ubigeoDAO.buscarBySede(req.body.vcIdSede, ok, error)
}
//GET - Buscar por ID
buscarById = function (req, res) {
}

exports.listarDepartamento = listarDepartamento
exports.listarProvinciaByDepartamento = listarProvinciaByDepartamento
exports.listarDistritoByProvincia = listarDistritoByProvincia
exports.listarTodo = listarTodo
exports.buscarBySede = buscarBySede
exports.buscarById = buscarById