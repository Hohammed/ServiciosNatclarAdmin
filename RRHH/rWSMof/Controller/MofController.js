/*DAO*/
var mofDAO = require('./../DAO/MofDAO')

/*model*/
var model = require('./../Model/Mof')

/*controller*/
puestoByFiltro = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    console.log(req.body)
    mofDAO.puestoByFiltro(req.body.filtro, ok, error)
}

objetivos = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    mofDAO.objetivos(req.body.iIdMofPuesto, ok, error)
}

funciones = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    mofDAO.funciones(req.body.iIdMofPuesto, ok, error)
}

educacionProfecional = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    mofDAO.educacionProfecional(req.body.iIdMofPuesto, ok, error)
}

educacionComplementaria = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    mofDAO.educacionComplementaria(req.body.iIdMofPuesto, ok, error)
}

competenciasGenerales = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    mofDAO.competenciasGenerales(req.body.iIdMofPuesto, ok, error)
}

competenciasEspecificas = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    mofDAO.competenciasEspecificas(req.body.iIdMofPuesto, ok, error)
}

exports.puestoByFiltro = puestoByFiltro
exports.objetivos = objetivos
exports.funciones = funciones
exports.educacionProfecional = educacionProfecional
exports.educacionComplementaria = educacionComplementaria
exports.competenciasGenerales = competenciasGenerales
exports.competenciasEspecificas = competenciasEspecificas