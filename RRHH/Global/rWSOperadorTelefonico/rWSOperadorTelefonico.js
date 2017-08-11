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
var OperadorTelefonicoController = require('./Controller/OperadorTelefonicoController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Operador Telefonico")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/OperadorTelefonico')
    .get(OperadorTelefonicoController.listarTodo)
    //.post(OperadorTelefonicoController.insertarRegistro)

api.route('/OperadorTelefonico/:id')
    .get(OperadorTelefonicoController.buscarById)
    //.put(OperadorTelefonicoController.modificarRegistro)
    //.delete(OperadorTelefonicoController.eliminarRegistro)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})