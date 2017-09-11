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

/*impresión */
var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var fs = require('fs');
var path = require('path');

var pdf = require('html-pdf');

var puerto = 3005

/*controller*/
var requerimientoController = require('./Controller/RequerimientoController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Requerimiento Personal")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

app.set('views', __dirname);
app.set('view engine', 'html');

var api = express.Router()

api.route('/requerimiento')
    .get(requerimientoController.listarTodo)
    .post(requerimientoController.insertarRegistro)

api.route('/requerimiento/:id')
    .get(requerimientoController.buscarById)

api.route('/correosPorNotificar/:id')
    .get(requerimientoController.correosPorNotificar)

api.route('/printer/:id')
     .get(requerimientoController.printerById)

app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})