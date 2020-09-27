const opciones = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias:'l',
        default: 10
    }
}
const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multipicar',opciones)
                .command('crear','Crea un archivo con la tabla de multiplicar',opciones)
                .help()
                .argv;

module.exports = {
    argv
}