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

var puerto = 3002

/*controller*/
var empresaController = require('./Controller/SedeController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Sede")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/sede')
    .get(empresaController.listarTodo)
    .post(empresaController.insertarRegistro)

api.route('/sede/:id')
    .get(empresaController.buscarById)
    .put(empresaController.modificarRegistro)
    .delete(empresaController.eliminarRegistro)

api.route('/sede/filtrarByEmpresa')
    .post(empresaController.filtrarByEmpresa)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})