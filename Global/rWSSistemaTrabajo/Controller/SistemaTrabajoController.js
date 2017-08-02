/*DAO*/
var sistemaTrabajoDAO = require('./../DAO/SistemaTrabajoDAO')

/*model*/
var model = require('./../Model/SistemaTrabajo')

/*controller*/
//GET - Listar
sistemaTrabajoByUnidadOrganizativa = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    sistemaTrabajoDAO.sistemaTrabajoByUnidadOrganizativa(req.params.id, ok, error)
}

exports.sistemaTrabajoByUnidadOrganizativa = sistemaTrabajoByUnidadOrganizativa