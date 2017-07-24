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

var puerto = 1402

/*controller*/
var empresaController = require('./Controller/EmpresaController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Empresa")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/empresa')
    .get(empresaController.listarTodo)
    .post(empresaController.insertarRegistro)

api.route('/empresa/:id')
    .get(empresaController.buscarById)
    .put(empresaController.modificarRegistro)
    .delete(empresaController.eliminarRegistro)

api.route('/empresa/filtrarByUnidadOrganizativa')
    .post(empresaController.filtrarByUnidadOrganizativa)

/*URL y verbos para EmpresaEntidadFinanciera*/
api.route('/empresaentidafinanciera/:vcRucEmpresa/:vcIdEntidadFinanciera?')
    .get(empresaController.listarcuentaempresa)    

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})

/*
var apiec = express.Router()

apiec.route('/estadocivil')
    .get(estadoCivilController.listarTodo)
    .post(estadoCivilController.insertarRegistro)

apiec.route('/estadocivil/:id')
    .get(estadoCivilController.buscarById)
    .put(estadoCivilController.modificarRegistro)
    .delete(estadoCivilController.eliminarRegistro)

exports.api = apiec
*/