/*DAO*/
var AsistenciaDao = require('./../DAO/AsistenciaDAO')

/*model*/

var model = require('./../Model/Asistencia')

/*controller*/
//GET - Buscar por Filtro
buscarByFiltro = function (req, res) {
    function ok(object) {
        res.send(object)
    }
    function error(error) {
        console.log(error)
    }
    parametros=[];

    var FINI = {name:"FINI", value:req.query.FINI}
    var FFIN = {name:"FFIN", value:req.query.FFIN}
    var UNOR = {name:"UNOR", value:req.query.UNOR}
    var EMPRESA = {name:"EMPRESA", value:req.query.EMPRESA}
    var SEDE = {name:"SEDE", value:req.query.SEDE}

    parametros.push(FINI);
    parametros.push(FFIN);
    parametros.push(UNOR);
    parametros.push(EMPRESA);
    parametros.push(SEDE);

    console.log(req.query.FINI)
     console.log(req.query.FFIN)
      console.log(req.query.UNOR)
       console.log(req.query.EMPRESA)
        console.log(req.query.SEDE)

    AsistenciaDao.buscarByFiltro(parametros, ok, error)
}


exports.buscarByFiltro = buscarByFiltro