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

var puerto = 8042

/*controller*/
var CategoriaOcupacionalController = require('./Controller/CategoriaOcupacionalController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Categoria Ocupcional")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/CategoriaOcupacional')
    .get(CategoriaOcupacionalController.listarTodo)
    //.post(CategoriaOcupacionalController.insertarRegistro)

api.route('/CategoriaOcupacional/:id')
    .get(CategoriaOcupacionalController.buscarById)
    //.put(CategoriaOcupacionalController.modificarRegistro)
    //.delete(CategoriaOcupacionalController.eliminarRegistro)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})