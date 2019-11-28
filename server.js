var llamada = require('./intermedio.js');
var crearTXT = require('./intermedioArreglo.js');
var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    //port = process.argv[2] || 8888;

http.createServer(function(request, response) {

  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);
  //-----si la url no es valida error 404------
  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }
  //------si el request es la ip/index.html
    if (fs.statSync(filename).isDirectory()) filename += '/index.html';
  
    fs.readFile(filename, "binary", function(err, file) {
	//si es erroe
	if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
	}
	//----si es exitoso el request
      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });

      //----------metodo post
      if(request.method == 'GET'){
	  llamada.llamada();
      }//si es un post

      //----------metodo get
      if(request.method == 'POST'){
	  
	  crearTXT.crearTXT(arr);
      }//si es un get

      
      
  });
}).listen(8080);

