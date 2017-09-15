//npm init
//npm install express
//npm install  body-parser
//npm install method-override
//npm install cors
//npm install mssql

/*imports*/
var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var cors = require('cors')

var puerto = 8090

/*controller*/
var AsistenciaController = require('./Controller/AsistenciaController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Asistencia")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/Asistencia/filtro')
    .get(AsistenciaController.buscarByFiltro)

api.route('/Asistencia/subirTareo')
    .post(AsistenciaController.subirTareo)

api.route('/Asistencia/programarTareo')
    .post(AsistenciaController.programarTareo)

api.route('/Asistencia/buscarTareoProgramadobyIdTrabajador')
    .post(AsistenciaController.buscarTareoProgramadobyIdTrabajador)

api.route('/Asistencia/buscarAsistenciabyTareoProgramado')
.post(AsistenciaController.buscarAsistenciabyTareoProgramado)

api.route('/Asistencia/UpdateTareoProgramado')
.post(AsistenciaController.UpdateTareoProgramado)

app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})