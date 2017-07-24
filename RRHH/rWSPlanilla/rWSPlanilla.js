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

var puerto = 8081

/*controller*/
var PlanillaController = require('./Controller/PlanillaController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Planilla")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/Planilla')
    .get(PlanillaController.listarTodo)
    //.post(PlanillaController.insertarRegistro)
    //.get(PlanillaController.buscarById)

/*api.route('/Planilla/filtro')
    .get(PlanillaController.buscarByFiltro)

api.route('/Planilla/:id')
    //.get(PlanillaController.buscarById)
    //.put(PlanillaController.modificarRegistro)
    .put(PlanillaController.confirmarRegistro)
    .delete(PlanillaController.eliminarRegistro)*/

app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})