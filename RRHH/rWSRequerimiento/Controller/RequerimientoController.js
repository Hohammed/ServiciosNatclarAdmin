/*DAO*/
var requerimientoDAO = require('./../DAO/RequerimientoDAO')

/*model*/
var model = require('./../Model/Requerimiento')

/*impresión */
var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var fs = require('fs');
var path = require('path');

 /*PDF */
var fs = require('fs');
var pdf = require('html-pdf');
//var html = fs.readFileSync('./test/ReqPersonal.html', 'utf8');
var html = ('<h1>Hola</h1>');
var options = { format: 'Letter' };

/*controller*/
//GET - Listar
listarTodo = function (req, res) {
    function ok(lista) {
        res.status(200).send(lista)
    }
    function error(error) {
        res.status(201).send(error)
    }
    requerimientoDAO.listar(req.query.responsable, req.query.SedeOrigen, req.query.SedeDestino, req.query.fechainicio, req.query.fechafin, req.query.iIdEstadoAprobacion, ok, error)
}

//GET - Buscar por ID
buscarById = function (req, res) {
    function ok(object) {
        var obj = object[0]
		res.send(object)
    }
    function error(error) {
        console.log(error)
        res.send(error)
    }
    requerimientoDAO.buscar(req.params.id, ok, error)
}
/*
Topdf = function (req, res, obj) { 
    var info=JSON.stringify(obj)
       res.render('./test/ReqPersonal', {info: info},function (err, html) { 
           console.log(err)
           console.log(html)
               /* pdf.create(html, options).toFile('./ReqPersonal.pdf',function (err, result) {
                    if (err) {
                        console.log(err)
                        console.log(res)
                        return res.status(400).send({
                            message: errorHandler.getErrorMessage(err)
                        });
                    }
                })
            })
        }*/

//POST - Insertar nuevo registro
insertarRegistro = function (req, res) {
    var requerimiento = model.Requerimiento

    console.log(req.body.vcUsuarioCreacionApp);
    console.log(req.body.fileAdjunto);

    requerimiento.idGerencia = req.body.idGerencia
    requerimiento.iIdMofPuesto = req.body.iIdMofPuesto
    requerimiento.iIdRequerimiento = req.body.iIdRequerimiento
    requerimiento.vcNumeroDocumento = req.body.vcNumeroDocumento
    requerimiento.vcIdSedeOrigen = req.body.vcIdSedeOrigen
    requerimiento.iIdUnidadOrganizativa = req.body.iIdUnidadOrganizativa
    requerimiento.vcIdSede = req.body.vcIdSede
    requerimiento.vcRucEmpresa = req.body.vcRucEmpresa
    requerimiento.vcCodigoUbigeo = req.body.vcCodigoUbigeo
    requerimiento.dtFecha = req.body.dtFecha
    requerimiento.iIdEstadoAprobacion = req.body.iIdEstadoAprobacion
    requerimiento.iIdEstadoConfirmacion = req.body.iIdEstadoConfirmacion
    requerimiento.iIdEstado = req.body.iIdEstado
    requerimiento.vcUsuarioCreacionApp = req.body.vcUsuarioCreacionApp
    requerimiento.vcUsuarioModificacionOT = req.body.vcUsuarioModificacionOT
    requerimiento.fileAdjunto = req.body.fileAdjunto
    requerimiento.DETALLE_XML = req.body.DETALLE_XML
    
    function ok(rowsAffected) {
        if (rowsAffected == 0) {
            res.send("No se llevó a cabo la transacción")
        } else {
            res.send('Registro guradado: ID - ' + requerimiento.iIdRequerimiento)
        }
    }
    function error(error) {
        res.status(201).send(error)
    }
    requerimientoDAO.insertar(requerimiento, ok, error)
}

//PUT - Actualizar registro
correosPorNotificar = function (req, res) {
    function ok(object) {
        //console.log(object)
        res.send(object)
    }
    function error(error) {
        console.log(error)
        res.send(error)
    }
    var requerimiento = model.Requerimiento
    requerimiento.iIdRequerimiento = req.params.id
    requerimientoDAO.correosPorNotificar(requerimiento, ok, error)
}

/*impresion */
printerById = function (req, res) {
	function ok(object) {
        //console.log(object)
        var obj = object[0]
		var SECUNDARIA=''
		var TECNICO=''
		var BACIHLLER=''
		var POSTGRADO=''
		var NIVEL_ACADEMICO=''
		var PROFESION=''
		var UNIVERSITARIO=''
		var EDU_COMPLEMENTARIA=''
		var NIVEL_ACADEMICO_COMPLEMENTARIA=''
		object.forEach(function(item) {
			if(item.TABLA=="REQ"){
				//console.log('REQ: '+item.vcNumeroDocumentoSolicitante)	
			}else if(item.TABLA=="MOF"){
				//console.log('MOF: '+item.vcSolicitante)	
			}else if(item.TABLA=="FUN"){
				//console.log('FUN: '+item.vcNumeroDocumentoSolicitante)	
			}else if(item.TABLA=="EDU_PRO"){
				//console.log('EDU_PRO: '+item.vcNumeroDocumentoSolicitante)
				NIVEL_ACADEMICO+=item.vcNumeroDocumentoSolicitante+'\n';
				PROFESION+=item.vcSolicitante+', ' + '\n';
				if(item.iIdUnidadOrganizativa==1){
					SECUNDARIA="X"
					TECNICO=""
					BACIHLLER=""
					UNIVERSITARIO=""
					POSTGRADO=""
				}else if(item.iIdUnidadOrganizativa==5||item.iIdUnidadOrganizativa==6||item.iIdUnidadOrganizativa==7){
					SECUNDARIA=""
					TECNICO="x"
					BACIHLLER=""
					UNIVERSITARIO=""
					POSTGRADO=""
				}else if(item.iIdUnidadOrganizativa==11){
					SECUNDARIA=""
					TECNICO=""
					BACIHLLER="x"
					UNIVERSITARIO=""
					POSTGRADO=""
				}else if(item.iIdUnidadOrganizativa==8||item.iIdUnidadOrganizativa==9||item.iIdUnidadOrganizativa==10||item.iIdUnidadOrganizativa==11||item.iIdUnidadOrganizativa==12||item.iIdUnidadOrganizativa==13){
					SECUNDARIA=""
					TECNICO=""
					BACIHLLER=""
					UNIVERSITARIO="X"
					POSTGRADO=""
				}else if(item.iIdUnidadOrganizativa==17||item.iIdUnidadOrganizativa==18||item.iIdUnidadOrganizativa==19||item.iIdUnidadOrganizativa==20||item.iIdUnidadOrganizativa==21||item.iIdUnidadOrganizativa==22||item.iIdUnidadOrganizativa==23||item.iIdUnidadOrganizativa==24||item.iIdUnidadOrganizativa==25){
					SECUNDARIA=""
					TECNICO=""
					BACIHLLER=""
					UNIVERSITARIO=""
					POSTGRADO="X"
				}
			}else if(item.TABLA=="EDU_COMP"){
				//console.log('EDU_COMP: '+item.vcNumeroDocumentoSolicitante)	
				EDU_COMPLEMENTARIA+=item.vcSolicitante+',' + '\n';
				NIVEL_ACADEMICO_COMPLEMENTARIA+=item.vcNumeroDocumentoSolicitante + ',' + '\n';
			}
			
		})
            console.log('id:'+req.params.id)
            /*var content = fs.readFileSync(path.resolve(__dirname, 'template.docx'), 'binary');
            var zip = new JSZip(content);
            var doc = new Docxtemplater();
            doc.loadZip(zip);

            doc.setData(obj);

        try {
            doc.render()
        }
        catch (error) {
            var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
        }
        console.log(JSON.stringify({error: e}));
        throw error;
        }
        var buf = doc.getZip()
        .generate({type: 'nodebuffer'});
        fs.writeFileSync(path.resolve(__dirname, 'RequerimientoPersonal.docx'), buf);*/

            /*PDF */

if(obj.iIdMotivo==1){
    var PERSONAL_A_DISPOSICION = 'X';   
    var PUESTO_NUEVO = '';
    var RENUNCIA = '';
    var DESCANSO_MEDICO = '';
    var LICENCIA = '';
    var CAMPANA = '';
    var VACACIONES = '';
}else if(obj.iIdMotivo==2){
    var PERSONAL_A_DISPOSICION= '';
    var PUESTO_NUEVO = 'X';   
    var RENUNCIA = '';
    var DESCANSO_MEDICO = '';
    var LICENCIA = '';
    var CAMPANA = '';
    var VACACIONES = '';
    }else if(obj.iIdMotivo==3){
    var PERSONAL_A_DISPOSICION = '';
    var PUESTO_NUEVO = '';
    var RENUNCIA  = 'X';   
    var DESCANSO_MEDICO = '';
    var LICENCIA = '';
    var CAMPANA = '';
    var VACACIONES = '';
    }else if(obj.iIdMotivo==4){
    var PERSONAL_A_DISPOSICION = '';
    var PUESTO_NUEVO = '';
    var RENUNCIA  = '';
    var DESCANSO_MEDICO = 'X';   
    var LICENCIA = '';
    var CAMPANA = '';
    var VACACIONES = '';
    }else if(obj.iIdMotivo==5){
    var PERSONAL_A_DISPOSICION = '';
    var PUESTO_NUEVO = '';
    var RENUNCIA  = '';
    var DESCANSO_MEDICO = '';  
    var LICENCIA = 'X';   
    var CAMPANA = '';
    var VACACIONES = '';
    }else if(obj.iIdMotivo==5){
    var PERSONAL_A_DISPOSICION = '';
    var PUESTO_NUEVO = '';
    var RENUNCIA  = '';
    var DESCANSO_MEDICO = '';  
    var LICENCIA = '';  
    var CAMPANA = 'X';   
    var VACACIONES = '';
    }else {
    var PERSONAL_A_DISPOSICION = '';
    var PUESTO_NUEVO = '';
    var RENUNCIA  = '';
    var DESCANSO_MEDICO = '';  
    var LICENCIA = '';  
    var CAMPANA = '';  
    var VACACIONES = 'X'; 
}

if(obj.iIdTipoContrato==3){
    var POR_INICIO_DE_ACTIVIDAD = 'X';   
    var INCREMENTO_DE_ACTIVIDAD = '';
}else if(obj.iIdTipoContrato==15){
    var POR_INICIO_DE_ACTIVIDAD = '';   
    var INCREMENTO_DE_ACTIVIDAD = 'X';
}

if(obj.iIdSistemaTrabajo==1){
    var LUNES = 'X';   
    var MARTES = 'X';  
    var MIERCOLES = 'X';  
    var  JUEVES = 'X';  
    var  VIERNES = 'X';  
    var  SABADO = '';
    var  DOMINGO = '';
    var  HORA_INI = obj.tInicio;
    var  HORA_FIN = obj.tFin;
    var  SIST_TRAB = obj.vcSistemaTrabajo;
}else if(obj.iIdTipoContrato==2){
   var LUNES = 'X';   
    var MARTES = 'X';  
    var MIERCOLES = 'X';  
    var  JUEVES = 'X';  
    var  VIERNES = 'X';  
    var  SABADO = 'X';
    var  DOMINGO = '';
    var  HORA_INI = obj.tInicio;
    var  HORA_FIN = obj.tFin;
    var  SIST_TRAB = obj.vcSistemaTrabajo;
}else if(obj.iIdTipoContrato==12){
   var LUNES = 'X';   
    var MARTES = '';  
    var MIERCOLES = 'X';  
	var  JUEVES = '';  
    var  VIERNES = 'X';  
    var  SABADO = '';
    var  DOMINGO = '';
    var  HORA_INI = obj.tInicio;
    var  HORA_FIN = obj.tFin;
    var  SIST_TRAB = obj.vcSistemaTrabajo;
}else{
   var LUNES = '';   
    var MARTES = '';  
    var MIERCOLES = '';  
    var  JUEVES = '';  
    var  VIERNES = '';  
    var  SABADO = '';
    var  DOMINGO = '';
    var  HORA_INI = obj.tInicio;
    var  HORA_FIN = obj.tFin;
    var  SIST_TRAB = obj.vcSistemaTrabajo;
}

if(obj.vcLugarEjecucion="SUPERFICIE"){
	CAMPO='';
	OFICINA='X';
}else{
	CAMPO='X';
	OFICINA='';
}

if(obj.vcEstadoCivil=="NO_RELEVANTE"){
	var NO_RELEVANTE_EC="X";
	var CASADO="";
	var SOLTERO="";
}else if(obj.vcEstadoCivil=="CASADO"){
	var NO_RELEVANTE_EC="";
	var CASADO="X";
	var SOLTERO="";
}else{
	var NO_RELEVANTE_EC="";
	var CASADO="";
	var SOLTERO="X";
}

if(obj.vcSexo=="NO_RELEVANTE"){
	var NO_RELEVANTE_SEX="X";
	var MASCULINO="";
	var FEMENINO="";
}else if(obj.vcSexo=="MASCULINO"){
	var NO_RELEVANTE_SEX="";
	var MASCULINO="X";
	var FEMENINO="";
}else{
	var NO_RELEVANTE_SEX="";
	var MASCULINO="";
	var FEMENINO="X";
}

if(obj.vcRangoEdad=="NO_RELEVANTE"){
	var NO_RELEVANTE_RE="X";
	var RELEVANTE="";
	var EDAD_MIN="";
	var EDAD_MAX="";
}else{
	var NO_RELEVANTE_RE="";
	var RELEVANTE="X";
	var EDAD_MIN=obj.iEdadMin;
	var EDAD_MAX=obj.iEdadMax;
}

html = ('<html><head>'+
   '<style type="text/css">'+
		'body,div,table,thead,tbody,tfoot,tr,th,td,p { font-family:"Arial"; font-size:x-small }'+
		'a.comment-indicator:hover + comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em;  } '+
		'a.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em;  } '+
		'comment { display:none;  } '+
	'</style>'+
   
'</head>'+
'<body>'+
'<table cellspacing="0" border="0">'+
	'<tr>'+
		'<td height="14" align="right" sdval="0" sdnum="1033;"><font color="#000000"></font></td>'+
		'<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000" rowspan=3 align="center" bgcolor="#FFFFFF"><font color="#000000"><br><img src="http://admin_erp.natclar.com.pe/ADMIN/images/logo_empresa.png" width=50 height=30>'+
		'</font></td>'+
		'<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 rowspan=3 align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">FORMULARIO<br>REQUERIMIENTO DE PERSONAL</font></b></td>'+
		'<td style="border-top: 2px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=middle bgcolor="#FFFFFF"><b><font size=1 color="#000000">Código:</font></b></td>'+
		'<td style="border-top: 2px solid #000000; border-right: 2px solid #000000" colspan=2 align="center" bgcolor="#FFFFFF"><font size=1 color="#000000">FO-RRH-29</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=middle bgcolor="#FFFFFF"><b><font size=1 color="#000000">Versión:</font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-right: 2px solid #000000" colspan=2 align="center" bgcolor="#FFFFFF" sdnum="1033;0;@"><b><i><font size=1 color="#000000">05</font></i></b></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=middle bgcolor="#FFFFFF"><b><font size=1 color="#000000">Unidad:</font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-right: 2px solid #000000" colspan=2 align="center" bgcolor="#FFFFFF"><font size=1 color="#000000">Corporativo</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">Fecha</font></b></td>'+
		'<td style="border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=11 align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">'+ obj.dtFecha +'</font></b></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="20" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=12 align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">DATOS DE LA SEDE O UNIDAD SOLICITANTE</font></b></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">Sede o Unidad</font></b></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=5 align="left" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ obj.vcSedeOrigen +'</font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" colspan=2 align="left" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><b><font color="#000000">E-mail</font></b></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">Área</font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=5 align="left" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ obj.vcArea +'</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" colspan=2 align="left" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><b><font color="#000000">Telef / Anexo</font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"> Solicitante</font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=5 align="left" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ obj.vcSolicitante +'</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" colspan=2 align="left" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><b><font color="#000000">Celular</font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=12 align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">DATOS DEL PUESTO A CUBRIR</font></b></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">Nombre del Puesto</font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=11 align="left" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ obj.vcPuesto +'</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">Cantidad</font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=11 align="left" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ obj.iCantidad +'</font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" colspan=5 align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">Motivo (Marcar)</font></b></td>'+
		'<td style="border-top: 1px solid #000000" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=5 align="left" bgcolor="#FFFFFF"><b><font color="#000000">Modalidad de contratación </font></b></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Personal a Disposición (Especificar el nombre de la persona en Disposición)</font></td>'+
		'<td style="border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ PERSONAL_A_DISPOSICION +'</font></td>'+
		'<td align="left"><font color="#000000"><br></font></td>'+
		'<td align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" bgcolor="#FFFFFF"><font color="#000000">Por Inicio de Actividad</font></td>'+
		'<td style="border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+  POR_INICIO_DE_ACTIVIDAD +'</font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 2px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Puesto nuevo</font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ PUESTO_NUEVO +'</font></td>'+
		'<td align="left"><font color="#000000"><br></font></td>'+
		'<td align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" bgcolor="#FFFFFF"><font color="#000000">Por Incremento de Actividad</font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ INCREMENTO_DE_ACTIVIDAD +'</font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 2px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Renuncia (Especificar el nombre de la persona en retiro)</font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ RENUNCIA +'</font></td>'+
		'<td align="left"><font color="#000000"><br></font></td>'+
		'<td align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000"></font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 2px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Descanso Médico</font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ DESCANSO_MEDICO +'</font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 2px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Licencia</font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ LICENCIA +'</font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 2px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Campaña</font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ CAMPANA +'<br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
	'</tr>'+
    	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Vacaciones (Especificar el nombre de la persona en vacaciones)</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ VACACIONES +'</font></td>'+
		'<td style="border-bottom: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
	'</tr>'+
	/*'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" bgcolor="#FFFFFF"><font color="#000000">Por locación de servicio</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000"><br></font></td>'+
	'</tr>'+*/
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=12 align="center"><b><font color="#000000">HORARIO DE TRABAJO</font></b></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" colspan=5 rowspan=2 align="center" valign=middle><font color="#000000">Días</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center"><font color="#000000">L</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center"><font color="#000000">M</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center"><font color="#000000">Mi</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center"><font color="#000000">J</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center"><font color="#000000">V</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center"><font color="#000000">S</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 2px solid #000000" align="center"><font color="#000000">D</font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ LUNES +'</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ MARTES +'</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ MIERCOLES +'</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ JUEVES +'</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ VIERNES +'</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ SABADO +'</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ DOMINGO +'</font></td>'+
	'</tr>'+
	/*'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle><font color="#000000"><br></font></td>'+
	'</tr>'+*/
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="left"><font color="#000000">Turno Mañana</font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center"><font color="#000000"><br></font></td>'+
		'<td style="border-right: 2px solid #000000" colspan=7 align="center" valign=middle><font color="#000000">Especificar Horario</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="left"><font color="#000000">Turno Tarde</font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center"><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle><font color="#000000">'+ HORA_INI +'</font></td>'+
		'<td align="left" valign=middle><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle><font color="#000000">-</font></td>'+
		'<td align="left" valign=middle><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle><font color="#000000">'+ HORA_FIN +'</font></td>'+
		'<td style="border-right: 2px solid #000000" align="left" valign=middle><font color="#000000"><br></font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="left"><font color="#000000">Turno Noche</font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 2px solid #000000; border-right: 2px solid #000000" colspan=7 rowspan=3 align="center"><br></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="left"><font color="#000000">Rotativo</font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center"><font color="#000000"><br></font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="left" valign=middle><font color="#000000">Indicar Sistema</font></td>'+
		'<td style="border-bottom: 2px solid #000000; border-right: 1px solid #000000" colspan=4 align="center"><font color="#000000">'+ SIST_TRAB +'</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" colspan="12" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">UBICACIÓN DEL PUESTO</font></b></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 2px solid #000000" align="left" valign=middle><font color="#000000">País</font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" colspan=3 align="center" valign=middle bgcolor="#FFFFCC"><font color="#000000">PERÚ</font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="left" valign=middle><font color="#000000">Provincia</font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=5 align="center" valign=middle bgcolor="#FFFFCC"><font color="#000000">'+obj.vcProvincia+'</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 2px solid #000000" border-right: 1px solid #000000" align="left" valign=middle><font color="#000000">Departamento</font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" colspan=3 align="center" valign=middle bgcolor="#FFFFCC"><font color="#000000">'+obj.vcDepartamento+'</font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="left" valign=middle><font color="#000000">Distrito</font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=5 align="center" valign=middle bgcolor="#FFFFCC"><font color="#000000">'+obj.vcDistrito+'</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="left" valign=middle><font color="#000000">Lugar de ejecución</font></td>'+
		'<td style="border-left: 1px solid #000000" colspan=3 align="center" valign=middle><font color="#000000">Oficina</font></td>'+
		'<td style="border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ OFICINA +'</font></td>'+
		'<td style="border-left: 1px solid #000000" colspan=3 align="center" valign=middle><font color="#000000">Campo</font></td>'+
		'<td style="border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=3 align="center" valign=middle bgcolor="#FFFFCC" sdnum="1033;0;@"><font color="#000000">'+ CAMPO +'</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=12 align="center" valign=middle><b><font color="#000000">COMPETENCIAS Y/O HABILIDADES REQUERIDAS PARA EL PUESTO:</font></b></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" colspan=2 align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">A) Formación Académica:</font></b></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=10 align="left" valign=middle bgcolor="#FFFFCC"><font color="#000000">'+ PROFESION +'</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="right" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="center" valign=middle><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Post Grado</font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Titulado</font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Bachiller</font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Tecnico</font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-right: 2px solid #000000" align="right" valign=middle bgcolor="#FFFFFF"><font color="#000000">Secundario</font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" colspan=3 align="right" valign=middle bgcolor="#FFFFFF"><font color="#000000">Nivel Requerido</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC"><b><font color="#000000">'+ POSTGRADO +'</font></b></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"  align="center" valign=middle bgcolor="#FFFFCC"><b><font color="#000000">'+ UNIVERSITARIO +'</font></b></td>'+
		'<td align="left" valign=middle><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC"><b><font color="#000000">'+ BACIHLLER +'</font></b></td>'+
		'<td align="left" valign=middle><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC"><b><font color="#000000">'+ TECNICO +'</font></b></td>'+
		'<td align="left" valign=middle><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFCC"><b><font color="#000000">'+ SECUNDARIA +'</font></b></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="3" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="right" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="right" valign=middle><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" rowspan=2 align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Especialidades/Maestría<br>Diplomados:</font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=11 align="left" valign=middle bgcolor="#FFFFCC"><font color="#000000">'+ EDU_COMPLEMENTARIA +'</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=11 align="left" valign=middle bgcolor="#FFFFCC"><font color="#000000">' + NIVEL_ACADEMICO_COMPLEMENTARIA +'</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="3" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-right: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Observaciones: </font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=11 align="left" valign=middle bgcolor="#FFFFCC"><font color="#000000"><br></font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" colspan=11 align="left" valign=middle bgcolor="#FFFFCC"><font color="#000000"><br></font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" colspan=2 align="left" valign=middle><b><font color="#000000">B) Experiencia Requerida:</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-right: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=12 align="left" valign=middle bgcolor="#FFFFCC"><font color="#000000"><br></font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=12 align="left" valign=middle bgcolor="#FFFFCC"><font color="#000000"><br></font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">C) Programas Informáticos:</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Avanzado</font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Intermedio</font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Básico</font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-right: 2px solid #000000" align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" colspan=2 align="left" valign=middle bgcolor="#FFFFCC"><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-right: 2px solid #000000" align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" colspan=2 align="left" valign=middle bgcolor="#FFFFCC"><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFCC"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-right: 2px solid #000000" align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">PERFIL PERSONAL:</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Estado Civil</font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">'+ CASADO +'</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Casado</font></td>'+
		'<td align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">'+ SOLTERO +'</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Soltero</font></td>'+
		'<td align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">'+ NO_RELEVANTE_EC +'</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">No relevante</font></td>'+
		'<td style="border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Sexo</font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">'+ MASCULINO +'</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Masculino</font></td>'+
		'<td align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">'+ FEMENINO +'</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Femenino</font></td>'+
		'<td align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">'+ NO_RELEVANTE_SEX+'</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">No Relevante</font></td>'+
		'<td style="border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-left: 2px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Rango de Edad</font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">'+ NO_RELEVANTE_RE +'</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">No relevante</font></td>'+
		'<td align="left" bgcolor="#FFFFFF"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">'+ RELEVANTE +'</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000">Si relevante</font></td>'+
		'<td align="right" valign=middle bgcolor="#FFFFFF"><font color="#000000">De: </font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">'+ EDAD_MIN +'</font></td>'+
		'<td align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">a</font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">'+ EDAD_MAX +'</font></td>'+
	'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=12 align="left" valign=top bgcolor="#FFFFFF"><b><font color="#000000">Observaciones:</font></b></td>'+
	'<tr>'+
	'<tr>'+
		'<td height="30" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=12 align="left" valign=top bgcolor="#FFFFFF"><font color="#000000">'+ obj.nvObservacion +'</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=12 align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">Remuneración mensual para puesto: (A ser llenado por Jefe de Recursos Humanos)</font></b></td>'+
	'<tr>'+
	'<tr>'+
		'<td height="30" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=12 align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"> S/. '+ obj.iSalario +' - Confirmado por: '+ obj.vcConfirmarSalario +'</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 rowspan=2 align="center" valign=middle bgcolor="#FFFFCC"><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 rowspan=2 align="center" valign=middle bgcolor="#FFFFCC"><font color="#000000"><br></font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">FIRMA Y SELLO del solicitante </font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">FIRMA Y SELLO de la Gerencia responsable</font></b></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 rowspan=2 align="center" valign=middle bgcolor="#FFFFCC"><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 rowspan=2 align="center" valign=middle bgcolor="#FFFFCC"><font color="#000000"><br></font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="14" align="left"><font color="#000000"><br></font></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">FIRMA Y SELLO Jefe de Recursos Humanos</font></b></td>'+
		'<td align="left" valign=middle bgcolor="#FFFFFF"><b><font color="#000000"><br></font></b></td>'+
		'<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=middle bgcolor="#FFFFFF"><b><i><font color="#000000">FIRMA Y SELLO Gerente de Administración y Finanzas</font></i></b></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="12" align="left"><font color="#000000"><br></font></td>'+
		'<td colspan=12 align="left"><font size=1 color="#000000">* Medio tiempo : 4 Horas diarias - máximo de 24 hrs semanales incluye todos los beneficios.</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="12" align="left"><font color="#000000"><br></font></td>'+
		'<td colspan=12 align="left"><font size=1 color="#000000">** Tiempo Parcial:  Un máximo de 3.45 hrs al día - nopuede exceder 18 hrs semanales - sólo incluye beneficio de gratificación y ESSALUD.</font></td>'+
		'</tr>'+
	'<tr>'+
		'<td height="12" align="left"><font color="#000000"><br></font></td>'+
		'<td colspan=12 align="left"><font size=1 color="#000000">*** Locación de servicio: Valor por hora - incluye todos los beneficios.</font></td>'+
		'</tr>'+
'</table>'+
'</body></html>'
);

		pdf.create(html, options).toFile('./ReqPersonal-'+ obj.iIdRequerimiento +'.pdf', function(err, res) {
		if (err) return console.log(err);
		console.log(res); // { filename: '/app/businesscard.pdf' } 
		});
	
		pdf.create(html).toStream(function(err, stream){
		stream.pipe(fs.createWriteStream('./ReqPersonal-'+ obj.iIdRequerimiento +'.pdf'));
		});
	
		pdf.create(html).toBuffer(function(err, buffer){
		console.log('This is a buffer:', Buffer.isBuffer(buffer));
		});
	
		pdf.create(html, function(err, buffer){});
        
    var dirtotal = __dirname
	var indextex = __dirname.indexOf("\Controller")
	var dirseerv = dirtotal.substring(0, indextex)
	/*console.log("diretotal: " + dirtotal)
	console.log("indextex: " + indextex)
	console.log("dirseerv: " + dirseerv)
	console.log("dirfinal: " + dirseerv + obj.iIdRequerimiento + '\\ReqPersonal'+ obj.dtFecha +'.pdf')*/
	setTimeout(function () {
		//console.log("entre a descargar")
		//res.download(dirseerv + obj.iIdRequerimiento + '\\ReqPersonal'+ obj.dtFecha +'.pdf',  'ReqPersonal'+ obj.iIdRequerimiento +'.pdf', function(err){
			res.download(dirseerv + '\\ReqPersonal-'+ obj.iIdRequerimiento +'.pdf',  'ReqPersonal-'+ obj.iIdRequerimiento +'.pdf', function(err){
			if(err){
				console.log(err)
			}else{
				console.log("descargó")
			}
		}); } ,5000)
    }
    function error(error) {
        console.log(error)
        res.send(error)
    }
    requerimientoDAO.buscar(req.params.id, ok, error)
}

exports.listarTodo = listarTodo
exports.buscarById = buscarById
exports.printerById = printerById
exports.insertarRegistro = insertarRegistro
exports.correosPorNotificar = correosPorNotificar
