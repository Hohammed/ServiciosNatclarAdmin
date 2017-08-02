
/*imports*/
var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var cors = require('cors')

var puerto = 3007

/*controller*/
var tiempoHorarioController = require('./Controller/TiempoHorarioController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Tiempo y Horario")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/Tiempo')
    .get(tiempoHorarioController.listarTiempo)
api.route('/HorarioByTiempo/:id')
    .get(tiempoHorarioController.listarHorarioByTiempo)

app.use('/Service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})
