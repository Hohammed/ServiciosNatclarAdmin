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

var puerto = 8083

/*controller*/
var PeriodoController = require('./Controller/PeriodoController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Periodo")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/Periodo')
    .get(PeriodoController.listarTodo)
    /*.post(PeriodoController.insertarRegistro)

api.route('/Periodo/:id')
    .get(PeriodoController.buscarById)
    .put(PeriodoController.modificarRegistro)
    .delete(PeriodoController.eliminarRegistro)*/

app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})