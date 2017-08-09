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
var requerimientoController = require('./Controller/RegistroTrabajadorController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Registro de  Personal")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/requerimiento')
    .get(RegistroTrabajadorController.listarTodo)
    .post(RegistroTrabajadorController.insertarRegistro)

api.route('/requerimiento/:id')
<<<<<<< HEAD
    .get(RegistroTrabajadorController.buscarById)
    .put(RegistroTrabajadorController.modificarRegistro)
=======
    .get(requerimientoController.buscarById)

api.route('/correosPorNotificar/:id')
    .get(requerimientoController.correosPorNotificar)
>>>>>>> ebf55c5a907bc29dabc4ab5e15aaae0690880c4d

app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
<<<<<<< HEAD
})
=======
})
>>>>>>> ebf55c5a907bc29dabc4ab5e15aaae0690880c4d
