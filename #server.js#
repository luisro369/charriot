var http = require('http');
var fs = require('fs');
var url = require('url');

/*
const execSync = require('child_process').execSync;
execSync('./ex');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'} );
    response.write("holi desde nodejs");
    fileSistem.readFile('index.html', null, function(error, data) {
	if (error){
	    response.writeHead(404);
	    response.write('Archivo no encontrado!');
	}//if
	else{
	    response.write(data);
	}//end
	response.end();
    });
}//on request
*/



//express = require("express");
/*
var llamada = require('./intermedio.js');

function onRequest(request, response){
    console.log("request recibida: " + request.url);
    var pathname = url.parse(request.url).pathname;
    console.log("Request para: " + pathname + " recibida");
    response.writeHead(200);

    if(pathname == "/"){
	html = fs.readFileSync("index.html", "utf8");
	response.write(html);
    }//si es html

    else if (pathname == "/ConexionC++.js"){
	script = fs.readFileSync("ConexionC++.js", "utf8");
	response.write(script);
    }//si es .js

    else if (pathname == "/intermedio.js"){
	llamada.llamada();
	response.write("codigo en c ejecutado ;)");
    }//si es el modulo intermedio
    response.end();
}//onRequest

*/

    
function onRequest(request, response){
    if(request.url == "/"){
	fs.readFile("index.html", function (error, data){
	    if(error){
		response.writeHead(404, {"Content-Type" : "text/plain"});
		response.end("pagina html no encontrada");
	    }//si no la encuentra
	    else{
		response.writeHead(200, {"Content-Type" : "text/html"});
		response.write(data);
		response.end();
	    }//si encuentra el index.html
	});//si es index
    }//si es html
    
    else if(request.url.indexOf('.js') != -1){
	console.log("mierda" + request.url);
	fs.readFile(request.url, function (error, data){
	    if(error){
		response.writeHead(404, {"Content-Type" : "text/plain"});
		response.end("pagina javaScript no encontrada");
		console.log("pagina javascript no encontrada");
	    }//si no encuentra el .js
	    else{
		response.writeHead(200, {"Content-Type" : "text/javascript"});
		response.write(data);
		response.end();
	    }//si encuentra el .js
	});
    }// si es .js

    else if(request.url.indexOf('.css') != -1){
	fs.readFile(request.url, function (error, data){
	    if (error){
		response.writeHead(404, {"Content-Type" : "text/plain"});
		response.end("archivo .css no encontrado");
	    }//si no hay .css
	    else{
		response.writeHead(200, {"Content-Type" : "text/css"});
		response.write(data);
		response.end();
	    }//si encuentra el .css
	});
    }//si es .css
    
    else{
	response.writeHead(404, {"Content-Type" : "text/plain"});
	response.end("Pagina no encontrada");
    }//sino encuentra nada
}//on request

http.createServer(onRequest).listen(8080);
