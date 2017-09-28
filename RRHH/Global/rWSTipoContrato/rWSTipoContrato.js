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
var TipoContratoController = require('./Controller/TipoContratoController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Tipo Contrato")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/TipoContrato')
    .get(TipoContratoController.listarTodo)
    //.post(TipoContratoController.insertarRegistro)

api.route('/TipoContrato/:id')
    .get(TipoContratoController.buscarById)
    //.put(TipoContratoController.modificarRegistro)
    //.delete(TipoContratoController.eliminarRegistro)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})