const argv = require('./config/yargs').argv;
const {crearArchivo,listarTabla} = require('./multiplicar'); // Aplicando la destructuración

const comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite)
            .then(() => console.log('Listo!'))
            .catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(nombreArchivo => console.log(`Archivo ${nombreArchivo} creado con exito.`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


