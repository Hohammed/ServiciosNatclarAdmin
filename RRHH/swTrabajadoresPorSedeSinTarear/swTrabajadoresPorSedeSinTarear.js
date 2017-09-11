var sql = require('mssql')

/*helper*/
var helper = require('./../../Helper/helper')

/*HTTP*/
var http = require('http');

/*DAO*/



function ok(object) {
    console.log(object)
}
function error(error) {
    console.log(error)
}

setInterval(function (/*ok,error*/) {
    helper.query(sql, "rhTareo.SP_SEL_TRABAJADORES_BY_SEDE_SIN_TAREAR", [], ok, error)
    function ok(lista) {
        var idSede = ''
        var grupo = []
        var mensaje = ""
        lista.forEach(function(item, index){
            if(idSede == ''){
                idSede = item.ID_SEDE
            }
            if(idSede == item.ID_SEDE){
                grupo.push(item)
                //console.log(idSede + ' - ' + item.ID_SEDE)
            }else{
                var mensaje = ""
                grupo.forEach(function(item, index){
                    mensaje += "UNOR: " + item.UNOR + "- SEDE: " + item.SEDE + " - DNI:  " + item.DNI + " - NOMBRE_COMPLETO: " + item.NOMBRE_COMPLETO + " \n "
                    //console.log(mensaje)
                })

                

                var data = JSON.stringify({
                from: 'notificaciones@natclar.com.pe',
                to: 'jleiva@natclar.org',
                subject: 'Trabajadores por Sede sin tarear...',
                text: mensaje
                            
            })
               

                console.log(data)
                /*console.log("enviado")
                console.log(data.length)*/

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
                   /* console.log(res)
                    console.log(req)
                    console.log(req.output)*/
                
                    
                    res.setEncoding('utf8');
                    res.on('data', function(chunk) {
                        msg += chunk;
                    });
                    res.on('end', function() {
                        console.log(msg);
                    });
                    req.on('error', function(e) {
                    console.log(e);
                    });
                });

                req.write(data);
                req.end();
                
                idSede = item.ID_SEDE
                grupo  = []
                grupo.push(item)
            }
        })
    }
//}, 60*60*1000);1 hora
}, 1000);


