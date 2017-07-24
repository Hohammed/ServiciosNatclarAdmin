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

var puerto = 3000

/*controller*/
var unidadOrganizativaController = require('./Controller/UnidadOrganizativaController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Unidad Organizativa")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/unidadOrganizativa')
    .get(unidadOrganizativaController.listarTodo)
    .post(unidadOrganizativaController.insertarRegistro)

api.route('/unidadOrganizativa/:id')
    .get(unidadOrganizativaController.buscarById)
    .put(unidadOrganizativaController.modificarRegistro)
    .delete(unidadOrganizativaController.eliminarRegistro)

app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})

/*
var apiec = express.Router()

apiec.route('/estadocivil')
    .get(estadoCivilController.listarTodo)
    .post(estadoCivilController.insertarRegistro)

apiec.route('/estadocivil/:id')
    .get(estadoCivilController.buscarById)
    .put(estadoCivilController.modificarRegistro)
    .delete(estadoCivilController.eliminarRegistro)

exports.api = apiec
*/