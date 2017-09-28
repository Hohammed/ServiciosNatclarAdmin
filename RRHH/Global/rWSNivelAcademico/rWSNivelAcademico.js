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

var puerto = 4023

/*controller*/
var NivelAcademicoController = require('./Controller/NivelAcademicoController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Nivel Academico")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/NivelAcademico')
    .get(NivelAcademicoController.listarTodo)
    //.post(NivelAcademicoController.insertarRegistro)

api.route('/NivelAcademico/:id')
    .get(NivelAcademicoController.buscarById)
    //.put(NivelAcademicoController.modificarRegistro)
    //.delete(NivelAcademicoController.eliminarRegistro)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})