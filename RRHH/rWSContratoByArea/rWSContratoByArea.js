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

var puerto = 8070

/*controller*/
var ContratoByAreaController = require('./Controller/ContratoByAreaController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Contrato By Area")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/ContratoByArea')
    .post(ContratoByAreaController.listarTodo)
    //.post(ContratoByAreaController.insertarRegistro)
    //.get(ContratoByAreaController.buscarById)*/

api.route('/DatosUsuario')
    .post(ContratoByAreaController.buscarByFiltro)

/*api.route('/ContratoByArea/filtro')
    .get(ContratoByAreaController.buscarByFiltro)

api.route('/ContratoByArea/:id')
    //.get(ContratoByAreaController.buscarById)
    //.put(ContratoByAreaController.modificarRegistro)
    .put(ContratoByAreaController.confirmarRegistro)
    .delete(ContratoByAreaController.eliminarRegistro)*/

app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)


})