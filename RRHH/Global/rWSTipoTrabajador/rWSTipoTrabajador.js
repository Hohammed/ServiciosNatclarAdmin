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

var puerto = 4060

/*controller*/
var TipoTrabajadorController = require('./Controller/TipoTrabajadorController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Tipo Trabajador")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/TipoTrabajador')
    .get(TipoTrabajadorController.listarTodo)
    //.post(TipoTrabajadorController.insertarRegistro)

api.route('/TipoTrabajador/:id')
    .get(TipoTrabajadorController.buscarById)
    //.put(TipoTrabajadorController.modificarRegistro)
    //.delete(TipoTrabajadorController.eliminarRegistro)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})