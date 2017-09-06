var sql = require('mssql')

/*helper*/
var helper = require('./../../../Helper/helper')

/*DAO*/


function MovAuto(parametros, ok, error) {
   var myInt = setInterval(function (ok,err) {
    console.log("Hello");
    sql.close();
    helper.query(sql, "rhMovimiento.SP_SERV_WIN_MOV_AUTO", [], ok, err)
}, 500);
}

/*exports.MovAuto = MovAuto*/