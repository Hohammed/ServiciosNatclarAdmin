/*imports*/
var express = require("express")
var bodyParser= require ("body-parser")
var methodOverride = require("method-override")
var cors = require('cors')

/*Controller*/
var EntidadFinancieraController=require ("./Controller/EntidadFinancieraController")


/*Servicio*/
var app=express()
var router =express.Router()
router.get('/',function(request,response){
    response.send("Inicio del Servicio -Entidad Financiera")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var url =express.Router()

url.route('/entidadfinanciera')
    .get(EntidadFinancieraController.listar)

url.route('/entidadfinanciera/:id')
    .get(EntidadFinancieraController.listar)

app.use('/service',url)

app.listen(1401 || process.env.PORT ,function(){
    console.log('Servidor escuchando en puerto 14000'  )
})
