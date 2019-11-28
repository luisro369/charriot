function llamarc() {
    /*const execSync = require('child_process').execSync;
    execSync('./ex');
    console.log("holi desde funcion");
    */
    var xhttp  = new XMLHttpRequest();
    console.log("estoy en la funcion si funciona la llamada html");
    xhttp.onreadystatechange = function(){
	if (this.readyState == 4 && this.status == 200){
	    console.log("llamando a funcion intermedio.js");
	}//if
    };
    xhttp.open("GET", "intermedio.js", true);
    xhttp.send();
}

//module.exports.llamarc = llamarc;
