// 2- Modificar el archivo anterior para añadir el dia y hora actual
// 3- Leer el contenido del archivo y pintarlo por pantalla
import * as fs from 'fs/promises';

let day = new Date().toLocaleString();

try {
    await fs.appendFile('./hello-world.txt', day+'\n')
}catch(err){
    console.err(err);
}

try {
    const lectura = await fs.readFile('./hello-world.txt');
    console.log(lectura.toString());
} catch (error) {
    console.err(err);
}