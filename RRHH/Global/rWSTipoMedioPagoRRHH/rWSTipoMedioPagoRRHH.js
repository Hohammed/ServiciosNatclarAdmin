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

var puerto = 8091

/*controller*/
var TipoMedioPagoRRHHController = require('./Controller/TipoMedioPagoRRHHController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Tipo Medio Pago RRHH")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/TipoMedioPagoRRHH')
    .get(TipoMedioPagoRRHHController.listarTodo)
    //.post(TipoMedioPagoRRHHController.insertarRegistro)

api.route('/TipoMedioPagoRRHH/:id')
    .get(TipoMedioPagoRRHHController.buscarById)
    //.put(TipoMedioPagoRRHHController.modificarRegistro)
    //.delete(TipoMedioPagoRRHHController.eliminarRegistro)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})