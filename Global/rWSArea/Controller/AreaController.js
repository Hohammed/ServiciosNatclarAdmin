/*DAO*/
var areaDAO = require('./../DAO/AreaDAO')

/*model*/
var model = require('./../Model/Area')

/*controller*/
//GET - Listar
areaByPuesto = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    areaDAO.areaByPuesto(req.params.id, ok, error)
}

exports.areaByPuesto = areaByPuesto