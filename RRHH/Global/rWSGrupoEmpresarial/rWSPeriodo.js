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

var puerto = 8094

/*controller*/
var GrupoEmpresarialController = require('./Controller/GrupoEmpresarialController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Grupo Empresarial")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/GrupoEmpresarial')
    .get(GrupoEmpresarialController.listarTodo)
    /*.post(GrupoEmpresarialController.insertarRegistro)

api.route('/GrupoEmpresarial/:id')
    .get(GrupoEmpresarialController.buscarById)
    .put(GrupoEmpresarialController.modificarRegistro)
    .delete(GrupoEmpresarialController.eliminarRegistro)*/

app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})