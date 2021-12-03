import * as fs from 'fs/promises';
import * as os from 'os';

// 9.-Crear un programa que liste todos los archivos y directorios de la carpeta Home del usuario que ejecuta el programa, indicando si es archivo o directorio


//Pasos: Recuperar la carpeta home, su ruta => Modulo OS
//          Leer el directorio => readdir de Fs withFileType === true
//          recorro la lista de elementos y si es direcotrio pindo una d delante del nombre

const homedir = os.homedir();       //recupero la ruta de usuario

try {
    let items = await fs.readdir(homedir, {withFileTypes: true});  // leer el directorio
     
    items = items.filter(i => i.isDirectory() || i.isFile())
    items.forEach(i => {
        
        const dirOutput = i.isDirectory() ? 'd' : 'f';
        console.log(`${dirOutput} ${i.name}`)
    })
} catch (error) {
    console.error(error);
}