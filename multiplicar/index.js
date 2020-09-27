const fs = require('fs'); // importar el modulo de FileSystem

const crearArchivo = (base,max) =>{
    return new Promise((resolve,reject) => {
        if(!Number(base))
            reject('base o max no es un numero');
        const contenido = generarTabla(base,max);
        const nombreArchivo = `tabla-${base}${(max) ? '-al-'+max : ''}.txt`;
        fs.writeFile('./tablas/'+nombreArchivo, contenido, (error) => {
            if (error) 
                reject(error);
            else 
                resolve(nombreArchivo);
        })
    })
}

const listarTabla = (base,max) =>{
    return new Promise((resolve,reject) => {
        if(!Number(base))
            reject('base o max no es un numero');        
        const contenido = generarTabla(base,max);
        console.log(contenido);
        resolve()
    })
}

const generarTabla = (base,max) => {
    if(!Number(max))
        max=10;
    let contenido = '';
        for(let i=1;i<=max;i++)
            contenido += `${base} * ${i} = ${base*i}\n`;
    return contenido;
}

module.exports = {
    crearArchivo,
    listarTabla
}
