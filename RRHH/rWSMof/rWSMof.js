
/*imports*/
var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var cors = require('cors')

var puerto = 3004 || process.env.PORT

/*controller*/
var mofController = require('./Controller/MofController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - MOF")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/mof/puestoByFiltro').post(mofController.puestoByFiltro)
api.route('/mof/objetivos').post(mofController.objetivos)
api.route('/mof/funciones').post(mofController.funciones)
api.route('/mof/educacionProfesional').post(mofController.educacionProfecional)
api.route('/mof/educacionComplementaria').post(mofController.educacionComplementaria)
api.route('/mof/competenciasGenerales').post(mofController.competenciasGenerales)
api.route('/mof/competenciasEspecificas').post(mofController.competenciasEspecificas)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})
