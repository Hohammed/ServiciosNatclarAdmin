/*config - sttring conection*/
var user = 'desarrollo'
var host = '172.16.1.220'
var pass = 'desarrollo'
var db = 'NatclarAdmin_DES'

exports.config = 'mssql://' + user + ':' + pass + '@' + host + '/' + db
exports.credencialesCorreo = {
    correo: "notificaciones@natclar.com.pe",
    password: "notificaci0nes"
}

exports.patharchivo='/archivos'
