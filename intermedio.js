function llamada(){
    const execSync = require('child_process').execSync;
    execSync('./ex');
}

module.exports.llamada = llamada;
