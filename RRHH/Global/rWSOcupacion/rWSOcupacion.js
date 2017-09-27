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

var puerto = 8049

/*controller*/
var OcupacionController = require('./Controller/OcupacionController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Ocupacion")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/Ocupacion')
    .get(OcupacionController.listarTodo)
    //.post(OcupacionController.insertarRegistro)

api.route('/Ocupacion/:iIdCategoriaOcupacion')
    .get(OcupacionController.listOcupByCategoria)
    //.put(OcupacionController.modificarRegistro)
    //.delete(OcupacionController.eliminarRegistro)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})