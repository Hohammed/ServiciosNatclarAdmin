
/*imports*/
var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var cors = require('cors')

var puerto = 8099

/*controller*/
var EmpresaPuestoSueldoController = require('./Controller/EmpresaPuestoSueldoController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Empresa Puesto Sueldo")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/EmpresaPuestoSueldo')
    .get(EmpresaPuestoSueldoController.listarTodo)
    .post(EmpresaPuestoSueldoController.insertarRegistro)

api.route('/EmpresaPuestoSueldo/:id')
    .get(EmpresaPuestoSueldoController.buscarById)
    .put(EmpresaPuestoSueldoController.modificarRegistro)
    .delete(EmpresaPuestoSueldoController.eliminarRegistro)

api.route('/EmpresaPuestoSueldo/filtro')
    .post(EmpresaPuestoSueldoController.buscarEmpresaPuestoSueldo)
   
app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})