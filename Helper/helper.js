/*configures*/
var config = require('./config').config

/*helper*/
//var sql = require('mssql')

function query(sql, procedure, parameters, callBackOk, callBackError) {
    sql.connect(config).then(function () {
        var request = new sql.Request()
        parameters.forEach(function (item) {
            request.input(item.name, item.value)
        })
        request.execute(procedure).then(function (recordSet) {
            callBackOk(recordSet.recordset)
            sql.close()
        }).catch(function (err) {
            callBackError(err)
            sql.close()
        })
    }).catch(function (err) {
        callBackError(err)
        sql.close()
    })
}

function transaction(sql, procedure, parameters, callBackOk, callBackError) {
    sql.connect(config).then(function () {
        var request = new sql.Request()
        //console.log(parameters)
        parameters.forEach(function (item) {
            request.input(item.name, item.value)
        })
        request.execute(procedure).then(function (recordSet) {
            sql.close()
            callBackOk(recordSet.rowsAffected)
            
        }).catch(function (err) {
            callBackError(err)
            sql.close()
        })
    }).catch(function (err) {
        callBackError(err)
        sql.close()
    })
}

exports.query = query
exports.transaction = transaction