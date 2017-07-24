/*controller
var MovimientoAutoController = require('./Controller/MovimientoAutoController')*/

var sql = require('mssql')

/*helper*/
var helper = require('./../../Helper/helper')

/*DAO*/
function ok(object) {
    console.log(object)
}
function err(error) {
    console.log(error)
}

setInterval(function (/*ok,err*/) {
    helper.query(sql, "rhMovimiento.SP_SERV_WIN_MOV_AUTO", [], ok, err)
    //console.log("Hello")
    //sql.close()
/*}, 60*60*1000);*/
}, 10000);