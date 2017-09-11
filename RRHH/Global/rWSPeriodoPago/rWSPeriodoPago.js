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

var puerto = 8092

/*controller*/
var PeriodoPagoController = require('./Controller/PeriodoPagoController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Medio de Pago")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/PeriodoPago')
    .get(PeriodoPagoController.listarTodo)
    //.post(PeriodoPagoController.insertarRegistro)

api.route('/PeriodoPago/:id')
    .get(PeriodoPagoController.buscarById)
    //.put(PeriodoPagoController.modificarRegistro)
    //.delete(PeriodoPagoController.eliminarRegistro)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})