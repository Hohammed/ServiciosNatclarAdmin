/*imports*/
var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var cors = require('cors')

var puerto = 3003

/*controller*/
var ubigeoController = require('./Controller/UbigeoController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Ubigeo")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/ubigeo')
    .get(ubigeoController.listarTodo)
    .post(ubigeoController.buscarBySede)

api.route('/ubigeo/departamento')
    .get(ubigeoController.listarDepartamento)

api.route('/ubigeo/:id')
    .get(ubigeoController.buscarById)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})
