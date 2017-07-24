//npm init
//npm install express
//npm install  body-parser
//npm install method-override
//npm install cors
//npm install mssql
/*Imports*/
var express=require("express")
var bodyParser=require("body-parser")
var methodOverride= require('method-override')
var cors= require ('cors')
/*Puerto*/
var puerto= 1403
/*Controller*/
var pagoController= require("./CONTROLLER/PagoCONTROLLER")


/*Servicio*/

var app= express()
var router= express.Router()
/*res Principal*/
router.get('/', function(request,response){
    response.send("Servicios Rest - Pago")
})

app.use (cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use (methodOverride())
app.use(router)

var url = express.Router()

url.route('/pago/:dFechaInicial/:dFechaFinal/:vcRucCliente?')
    .get(pagoController.listapagos)


url.route('/pago')
    .post(pagoController.insertarpago)


app.use('/service', url)
//Comentario
//Ejmplo de work
app.listen (puerto || process.env.PUERTO,function(){
    console.log('Servidor escuchando en puerto '+ puerto)
})