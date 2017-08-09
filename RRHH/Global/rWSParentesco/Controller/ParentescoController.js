/*DAO*/
var ParentescoDao = require('./../DAO/ParentescoDAO')

/*model*/

var model = require('./../Model/Parentesco')

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
        ParentescoDao.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        ParentescoDao.mostrar(ok, error)
    }
}
//GET - Buscar por Grado Parentesco
filtrarByGradoParentesco = function (req, res) {
    console.log("controller: " + req.query.GRADO_PARENTESCO)
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    ParentescoDao.filtrar(req.query.GRADO_PARENTESCO, ok, error)
}
/*//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    var puesto = model.Puesto
    puesto.iIdPuesto = req.body.iIdPuesto
    puesto.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevó a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + puesto.iIdPuesto)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    puestoDao.insertar(puesto, ok, error)
}

//PUT - Actualizar registro
modificarRegistro = function (req, res) {
    var puesto = model.Puesto
    puesto.iIdPuesto = req.body.iIdPuesto
    puesto.vcDescripcion = req.body.vcDescripcion

    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevó a cabo la transacción")
        } else {
            res.send('Registro modificado: ID - ' + puesto.iIdPuesto)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    puestoDao.modificar(puesto, ok, error)
}

//DELETE - Eliminar registro
eliminarRegistro = function (req, res) {
    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevó a cabo la transacción")
        } else {
            res.send('Registro eliminado: ID - ' + req.params.id)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    puestoDao.eliminar(req.params.id, ok, error)
}
*/
exports.filtrarByGradoParentesco = filtrarByGradoParentesco
/*exports.insertarRegistro = insertarRegistro
exports.modificarRegistro = modificarRegistro
exports.eliminarRegistro = eliminarRegistro*/