// 7. -Crear un programa que cree un archivo de tipo JSON en el que escribamos una lista de países, procedentes de una constante que declaremos al principio del programa con datos que nosotros le demos, con los siguientes atributos (nombre, continente, y prefijo telefónico)
import * as fs from 'fs/promises';

const paises = [{
        nombre : 'Argentina',
        continente : 'América',
        Prefijo : '054',
    },
    {
        nombre : 'España',
        continente : 'Europa',
        Prefijo: '034',
    },
    {
        nombre : 'Francia',
        continente : 'Europa',
        Prefijo: '033',
    },
]

// try {
//     await fs.writeFile('./paises.json', JSON.stringify(paises));
// }catch(err){
//     console.err(err);
// }

// 8- Crear un programa que lea el archivo generado en el programa anterior y devuelva solo los países europeos. Modificar el programa para que acepte el continente por parámetro y muestre los paises que correspondan.

const busqueda = process.argv[2]

try {
    const lectura = await fs.readFile('paises.json', {encoding: 'utf-8'});
    
    const filter = JSON.parse(lectura).filter(e => e.continente === busqueda)
    console.log(filter)
    
} catch (error) {
    console.error(err);
}





// process.stdin.on('data', chunk => {
//         const userData = chunk.toString();
//         switch (state){
//             case 'nombre': nombre = userData;
//                             state = 'continente';
//                             break;
//             case 'continente': continente = userData;
//                             state ='prefijo';
//                             break;
//             case 'prefijo': prefijo = userData;
//                             state = 'nombre';
//                             break;
//         }

// })