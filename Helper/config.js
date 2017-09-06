/*config - sttring conection
var user = 'desarrollo'
var host = '172.16.1.220'
var pass = 'desarrollo'
var db = 'NatclarAdmin_DES'
exports.config = 'mssql://' + user + ':' + pass + '@' + host + '/' + db*/

var dbnatclaradmindes = {
	user : 'SGNATCLAR\\JLEIVA',
	host : '172.16.1.220',
	pass : '/elexit0',
	db : 'NatclarADMIN_DES',
	port: 1433
}

exports.config = 'Data Source=' + dbnatclaradmindes.host + ','+dbnatclaradmindes.port+';User Id=' + dbnatclaradmindes.user + ';Password=' + dbnatclaradmindes.pass + ';Initial Catalog=' + dbnatclaradmindes.db+';Integrated Security=True'


exports.credencialesCorreo = {
    correo: "notificaciones@natclar.com.pe",
    password: "notificaci0nes"
}

exports.patharchivo='/archivos'
