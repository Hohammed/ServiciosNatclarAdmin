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

var puerto = 3005

/*controller*/
var requerimientoController = require('./Controller/RequerimientoController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Requerimeinto Personal")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/requerimiento')
    .get(requerimientoController.listarTodo)
    .post(requerimientoController.insertarRegistro)

api.route('/requerimiento/:id')
    .get(requerimientoController.buscarById)
    .put(requerimientoController.modificarRegistro)

app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})
