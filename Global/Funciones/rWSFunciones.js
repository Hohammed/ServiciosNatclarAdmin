var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var cors= require ('cors')
var fs = require('fs');

var patharchivo= require('./../../Helper/config').patharchivo

var files = []

var port=3000
/*e define cors Para que permite mas de una peticion Http*/
app.use (cors())

/*Se define el verbo*/
app.post('/upload', function(request, response){

  files=[];
  // Se crea el objeto form de IncomingForm
  var form = new formidable.IncomingForm();

  // espcifica para subir multiples archivos
  form.multiples = true;

  // Guardas todos los archivos en la ruta
  form.uploadDir = path.join('D:/Jorge/ProjectNode', patharchivo);
 
  // cada vez que un archivo es subido,
  // renombre al nombre del archivo original
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
    console.log(path.join(form.uploadDir, file.name));
    files.push(file);
  });

  // Error
  form.on('error', function(err) {
    response.error(err);
    console.log('Ocurrió un error: \n' + err);
  });

  // repuesta 
    form.on('end', function() {
    //response.end('success');
    response.end(JSON.stringify(files));
    
  });

  // parsea la solicitud 
  form.parse(request);

});

var server = app.listen(port || process.env.PORT , function(){
  /*console.log(patharchivo);
  console.log(path.join('./../../FINANZAS/', patharchivo ))*/
  console.log('Server listening on port:' + port );
});