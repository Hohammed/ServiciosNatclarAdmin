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

var puerto = 8080

/*controller*/
var puestoController = require('./Controller/PuestoController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Puesto")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/puesto')
    .get(puestoController.listarTodo)
    .post(puestoController.insertarRegistro)

api.route('/puesto/:id')
    .get(puestoController.buscarById)
    .put(puestoController.modificarRegistro)
    .delete(puestoController.eliminarRegistro)

app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})

/*
var apip = express.Router()

apip.route('/puesto')
    .get(puestoController.listarTodo)
    .post(puestoController.insertarRegistro)

apip.route('/puesto/:id')
    .get(puestoController.buscarById)
    .put(puestoController.modificarRegistro)
    .delete(puestoController.eliminarRegistro)

exports.api = apip
*/