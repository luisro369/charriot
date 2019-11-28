function enviarArr(code){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
	    console.log(code);
	    //var arr = JSON.stringify(code);
	}//if
    };//onreadystatechange
    var arr = JSON.stringify(code);
    xhttp.open("POST", "intermedioArreglo.js",true);
    xhttp.send(arr);
}//funcion para enviar el arreglo
