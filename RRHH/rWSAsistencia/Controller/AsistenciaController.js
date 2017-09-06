/*DAO*/
var AsistenciaDao = require('./../DAO/AsistenciaDAO')

/*model*/

var model = require('./../Model/Asistencia')
var excel2json = require("excel-to-json");
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

function subirTareo(req, res){
    var asistencia= req.body;
    function ok(lista) {
        res.status(200).send(lista)
        console.log(lista)
    }
    function error(error) {
        res.status(201).send(error)
        console.log('ERROR: '+ error)
    }
    AsistenciaDao.subirTareo(asistencia, ok, error)
}

function programarTareo(req, res){
    var DetalleProgramarTareo= req.body;
    function ok(lista) {
        res.status(200).send(lista)
        console.log(lista)
    }
    function error(error) {
        res.status(201).send(error)
        console.log('ERROR: '+ error)
    }

    var iIdTrabajador = req.body.iIdTrabajador
    var FechaIni = req.body.FechaIni//FECHA INICIO DE LABORES || FECHA DE INICIO CAPACITACIÓN
    var FechaFin = req.body.FechaFin//FECHA FIN CAPACITACIÓN
    var Tipo_CI = req.body.Tipo_CI//DESCRIPCIÓN TAREO CAPACITACIÓN
    var FechaIni2 = req.body.FechaIni2//FECHA INICIO DE DÍAS TRABAJADO
    var FechaFin2 = req.body.FechaFin2//FECHA FIN DE DÍAS TRABAJADO
    var Tipo_T = req.body.Tipo_T//DESCRIPCIÓN TAREO TRABAJADO
    var FechaIni3 = req.body.FechaIni3//FECHA INICIO DE DÍAS LIBRES
    var FechaFin3 = req.body.FechaFin3//FECHA FIN DE DÍAS LIBRES
    var Tipo_L = req.body.Tipo_L//DESCRIPCIÓN TAREO LIBRE

    /*console.log(req.body.iIdTrabajador)
    console.log(req.body.FechaIni)
    console.log(req.body.FechaFin)
    console.log(req.body.Tipo_CI)
    console.log(req.body.FechaIni2)
    console.log(req.body.FechaFin2)
    console.log(req.body.Tipo_L)
    console.log(req.body.FechaIni3)
    console.log(req.body.FechaFin3)
    console.log(req.body.Tipo_T)*/

    AsistenciaDao.programarTareo(iIdTrabajador,FechaIni,FechaFin,Tipo_CI,FechaIni2,FechaFin2,Tipo_T,FechaIni3,FechaFin3,Tipo_L, ok, error)
}

exports.buscarByFiltro = buscarByFiltro
exports.subirTareo = subirTareo
exports.programarTareo = programarTareo
