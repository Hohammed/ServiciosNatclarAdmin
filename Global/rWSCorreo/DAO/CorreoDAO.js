var config = require('./../../../Helper/config')
var nodemailer = require('nodemailer')
var smtpPool = require('nodemailer-smtp-pool');
/*DAO*/
function enviarCorreo(from, to, subject, text, ok, noOk){
	console.log("Correo: "+config.credencialesCorreo.correo)
	console.log("Password: "+config.credencialesCorreo.password)
    var transporter = nodemailer.createTransport(smtpPool({
        service: 'Gmail',
        auth: {
            user: config.credencialesCorreo.correo,
            pass: config.credencialesCorreo.password
        },
		maxConnections: 50,
  		maxMessages: 1000
    }))

	var mailOptions = {
		from: from,
		to: to,
		subject: subject,
		text: text
	}
	
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error)
            noOk(error)
		}else{
			console.log("Mensaje enviado con exito!")
            ok("Mensaje enviado con exito!")
		}
	})

	//transporter.close();
}

exports.enviarCorreo = enviarCorreo