// 1- Crear un archivo txt con el nombre hello-world, que contenga vuestro nombre
// 4- HAcer una copia del archivo que se llame hello-world-2.txt
// 5.-Borrar Hello-world.tx

import * as fs from 'fs/promises';

// try {
//     await fs.writeFile('./hello-world.txt', 'Martín Yela\n');
// }catch(err){
//     console.error(err);
// }

// try {
//     await fs.copyFile('./hello-world.txt', './hello-world-2.txt')
// } catch (error) {
    // console.error(err);
// }

try {
    await fs.unlink('hello-world.txt')
} catch (error) {
    console.error(err);
}