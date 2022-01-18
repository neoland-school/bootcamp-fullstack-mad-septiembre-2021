// 1- Crear un archivo txt con el nombre hello-world, que contenga vuestro nombre


// import * as fs from 'fs/promises';

// try{
//     await fs.writeFile('hello-world.txt', 'Diego')

// }catch (err){
//     console.log('there was an error')
// }

// 
// 2- Modificar el archivo anterior para añadir el dia y hora actual

// import * as fs from 'fs/promises';

// const date = new Date().toLocaleString();

// try{
//     await fs.appendFile('hello-world.txt',`\ntoday is ${date}`)

// }catch (err){
//     console.log('there was an error')
// }

// 3- Leer el contenido del archivo y pintarlo por pantalla

// import * as fs from 'fs/promises'

// try{
//    const data = await fs.readFile('hello-world.txt', { encoding: 'utf-8'})
//    process.stdout.write(data+'\n');
// }
// catch(err){
//     console.log('there was an error')
// }

// 4- HAcer una copia del archivo que se llame hello-world-2.txt

// import * as fs from 'fs/promises'

// try{
//     await fs.copyFile('hello-world.txt', 'hello-world-2.txt')

// }catch(err){
//     console.log('the copy was not possible')
// }

// 5.-Borrar Hello-world.tx

// import * as fs from 'fs/promises'

// try{
//     await fs.unlink('hello-world.txt')

// }catch(err){
//     console.log('there was an error')
// }

// 7. -Crear un programa que cree un archivo de tipo JSON en el que escribamos una lista de países, procedentes de una constante que declaremos al principio del programa con datos que nosotros le demos, con los siguientes atributos (nombre, continente, y prefijo telefónico)

// import * as fs from 'fs/promises'

// const paises = [
//         {
//             name: 'Spain',
//             continent: 'Europe',
//             prefix: '+34'
//         },
//         {
//             name: 'Austria',
//             continent: 'Europe',
//             prefix: '+43'
//         },
//         {
//             name: 'Finland',
//             continent: 'Europe',
//             prefix: '+358'
//         },
//         {
//             name: 'Andorra',
//             continent: 'Europe',
//             prefix: '+376'
//         },
//         {
//             name: 'EEUU',
//             continent: 'America',
//             prefix: '+1'
//         },
//         {
//             name: 'China',
//             continent: 'Asia',
//             prefix: '+86'
//         },
//         {
//             name: 'South Korea',
//             continent: 'Asia',
//             prefix: '+82'
//         },
//     ]


// try{

//     await fs.writeFile('myJSON.json', JSON.stringify(paises));

// }catch (err){
//     console.log('There was an error')
// }

// try{

//     const dataJson = await fs.readFile('myJSON.json', { encoding: 'utf-8'} );
//     console.log(JSON.parse(dataJson))

// }catch (err){
//     console.log('There was an error')
// }


// 8- Crear un programa que lea el archivo generado en el programa anterior y devuelva solo los países europeos. Modificar el programa para que acepte el continente por parámetro y muestre los paises que correspondan.


// import * as fs from 'fs/promises'


// const input = process.argv.slice(2)
// const paises = [
//         {
//             name: 'Spain',
//             continent: 'Europe',
//             prefix: '+34'
//         },
//         {
//             name: 'Austria',
//             continent: 'Europe',
//             prefix: '+43'
//         },
//         {
//             name: 'Finland',
//             continent: 'Europe',
//             prefix: '+358'
//         },
//         {
//             name: 'Andorra',
//             continent: 'Europe',
//             prefix: '+376'
//         },
//         {
//             name: 'EEUU',
//             continent: 'America',
//             prefix: '+1'
//         },
//         {
//             name: 'China',
//             continent: 'Asia',
//             prefix: '+86'
//         },
//         {
//             name: 'South Korea',
//             continent: 'Asia',
//             prefix: '+82'
//         },
//     ]


// try{

//     await fs.writeFile('myJSON.json', JSON.stringify(paises));

// }catch (err){
//     console.log('There was an error')
// }

// try{

//     const dataJson = await fs.readFile('myJSON.json', { encoding: 'utf-8'} );
//     const filtered = JSON.parse(dataJson).filter(c=>c.continent===input[0])
//     console.log(filtered);

// }catch (err){
//     console.log('There was an error')
// }



// 9.-Crear un programa que liste todos los archivos y directorios de la carpeta Home del usuario que ejecuta el programa, indicando si es archivo o directorio


import * as os from 'os'
import * as fs from 'fs/promises'

const homedir = os.homedir(); //recupero la carpeta de usuario

try{

    let items = await fs.readdir(homedir, { withFileTypes:true });
    items = items.filter(i=> i.isDirectory()|| i.isFile()) //eliminamos accessos directos y rutas simbólicas 
    items.forEach(i=>{
        const dirOutput = i.isDirectory()? 'd' : 'f';
        console.log(`${dirOutput} ${i.name}`)
    })

}catch(e){
    console.error(e)
}
