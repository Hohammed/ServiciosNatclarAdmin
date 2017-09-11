/*DAO*/
var ContratoDAO = require('./../DAO/ContratoDAO')

/*model*/

var model = require('./../Model/Contrato')

/*HTTP*/
var http = require('http');

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
           lista.forEach(function(item, index){
               var data 
                if(item.DIAS>0){
                     var data = JSON.stringify({
                     from: 'notificaciones@natclar.com.pe',
                     to: 'jleiva@natclar.org',
                     subject: 'Correo Contratos por Terminar...',
                     text: 'La fecha de fin de contrato de'+ ' ' + item.NOMBRE_COMPLETO+ ' ' + 'es en'+ ' ' + item.DIAS+ ' ' + 'dias',
                     /*html:
                     '<p>La fecha de fin de contrato de'+ ' ' + item.NOMBRE_COMPLETO+ ' ' + 'esta proxima faltan' + ' ' + item.DIAS+ ' ' + 'favor de considerar su Renovacion o Cese</p>' +
                     '<button class="form-control btn btn-success">RENOVAR</button><button class="form-control btn btn-danger">SOLICITAR PERSONAL</button>',
                    */
                    });
                   
                }else if(item.DIAS==0){
                     var data = JSON.stringify({
                     from: 'notificaciones@natclar.com.pe',
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
  host: 'localhost',
  port: '3011',
  path: '/Service/enviarCorreo',
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
    function error(error) {
        console.log(error)
        res.status(201).send(error)
    }
    if(req.body.dsp==undefined){
        ContratoDAO.listar(ok, error)
    }
    if(req.body.dsp!=undefined){
        ContratoDAO.mostrar(ok, error)
    }
}




exports.listarTodo = listarTodo