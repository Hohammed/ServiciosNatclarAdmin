//npm init
//npm install express
//npm install  body-parser
//npm install method-override
//npm install cors
//npm install mssql

/*imports*/
/*var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var cors = require('cors')

var puerto = 8070*/

/*controller*/
//var ContratoController = require('./Controller/ContratoController')

/*service*/
/*var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Contrato")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/Contrato')
    .get(ContratoController.listarTodo)
    //.post(ContratoController.insertarRegistro)
    //.get(ContratoController.buscarById)*/

/*api.route('/Contrato/filtro')
    .get(ContratoController.buscarByFiltro)

api.route('/Contrato/:id')
    //.get(ContratoController.buscarById)
    //.put(ContratoController.modificarRegistro)
    .put(ContratoController.confirmarRegistro)
    .delete(ContratoController.eliminarRegistro)*/
/*
app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)


})*/

var sql = require('mssql')
/*helper*/
var helper = require('./../../Helper/helper')
/*HTTP*/
var http = require('http');

function ok(object) {
    console.log(object)
}
function error(error) {
    console.log(error)
}

setInterval(function (/*ok,err*/) {
    helper.query(sql, "rhPlanilla.SP_SEL_CONTRATO_POR_TERMINAR", [], ok, error)
    function ok(lista) {
           lista.forEach(function(item, index){
               var data 
                if(item.DIAS>0){
                    console.log("MAS DE 0")
                    console.log(item.DNI)
                    console.log(item.NOMBRE_COMPLETO)
                    console.log(item.INICIO)
                    console.log(item.FIN)
                    console.log(item.DIAS)

                    var data = JSON.stringify({
                    from: 'mvargas@natclar.org',
                    to: 'jleiva@natclar.org',
                    subject: 'Correo Contratos por Terminar...',
                    text: 'La fecha de fin de contrato de'+ ' ' + item.NOMBRE_COMPLETO+ ' ' + 'es en'+ ' ' + item.DIAS+ ' ' + 'dias',
                    /*html:
                    '<p>La fecha de fin de contrato de'+ ' ' + item.NOMBRE_COMPLETO+ ' ' + 'esta proxima faltan' + ' ' + item.DIAS+ ' ' + 'favor de considerar su Renovacion o Cese</p>' +
                    '<button class="form-control btn btn-success">RENOVAR</button><button class="form-control btn btn-danger">SOLICITAR PERSONAL</button>',
                    */
                    });
                }else if(item.DIAS==0){
                    console.log("0")
                    console.log(item.DNI)
                    console.log(item.NOMBRE_COMPLETO)
                    console.log(item.INICIO)
                    console.log(item.FIN)
                    console.log(item.DIAS)
                    var data = JSON.stringify({
                    from: 'mvargas@natclar.org',
                    to: 'jleiva@natclar.org',
                    subject: 'Correo Fin Contrato',
                    text: 'El contrato de'+ ' ' + item.NOMBRE_COMPLETO + ' ' + 'termina hoy, favor de considerar su Renovacion o Cese ',
                    });
                }
                    /* html:
                     '<p>La fecha de fin de contrato de'+ ' ' + item.NOMBRE_COMPLETO+ ' ' + 'está próxima faltan' + ' ' + item.DIAS+ ' ' + 'favor de considerar su Renovación o Cese</p>' +
                     '<button class="form-control btn btn-success">RENOVAR</button><button class="form-control btn btn-danger">SOLICITAR PERSONAL</button>',
                    */ 
                var options = {
               /* host: 'localhost',
                port: '3011',
                path: '/Service/enviarCorreo',*/
                host: 'admin_erp.natclar.com.pe',
                port: '12000',
                path: '/NODE/GLOBAL/rWSCorreo/enviarCorreo',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Content-Length': data.length
                    }
                };

                var req = http.request(options, function(res) {
                var msg = '';

                res.setEncoding('utf8');
                res.on('data', function(chunk) {
                    msg += chunk;
                });

                res.on('end', function() {
                    console.log(msg);
                    });
                });

                req.write(data);
                req.end();

           })
    }
//}, 4*60*60*1000);//4 HORAS INICIA 3:30
//}, 60*60*1000);--1 HORA
}, 10000);//1 SEGUNDO