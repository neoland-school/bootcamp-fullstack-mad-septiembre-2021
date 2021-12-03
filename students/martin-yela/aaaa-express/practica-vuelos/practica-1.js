// 1- Crear un servidor HTTP con express, que tenga una ruta GET en el path '/demo'. Esta ruta debe devolver un 200 con el texto `Mi primera ruta`. Probar el resultado con postman y con un fetch en el navegador.
// 2- Añadir una ruta POST al servidor anterior en el path '/demo'. Esta ruta debe devolver un 200 con el texto `Mi primera ruta POST`. Probar el resultado con postman y con un fetch en el navegador.
// 3. Modificar la ruta del ejercicio 2 la posibilidad de recibir un body JSON. El cliente nos mandará un JSON  con un atributo data de tipo number ({"data": 3}). La ruta deberá mandar al usuario como respuesta `El numero es par` si el dato de entrada es par o `el numero es impar` si el dato de entrada es impar. Probar el resultado con postman y con un fetch en el navegador.
// 4. Modificar la ruta del ejercicio 3 para que si el numero es impar devuelva un status 400 en vez de un 200.  Probar el resultado con postman y con un fetch en el navegador.
// 5. Crear una nueva ruta en la aplicación que sea de tipo POST en el path '/flight'. Esta ruta recibirá como body un JSON con el siguiente formato como ejemplo ( { "origen": 'MAD', "destino": "BCN", "fecha": "10/10/2021"}). La ruta debe escribir el vuelo del cliente en un archivo flights.json y devolver al cliente un 201.  Probar el resultado con postman y con un fetch en el navegador.

import express from 'express';
import * as fs from 'fs/promises';

const app = express();
app.use(express.json());
app.get('/demo', (req, res) => {
    res.send('Mi primera ruta');
})

app.post('/demo', (req, res) => {
    req.body.data%2 === 0 ? res.send('El número es par') : res.status(400).send('El número es impar');
})

app.post('/flight', (req, res) => {
        try {
            fs.writeFile('flights.json', JSON.stringify(req.body));
            res.status(201).send('El vuelo ha sido guardado')
        } catch (error) {
            console.error(error)
        }
        
})

app.listen(3000, () =>{
    console.log('El servidor está funcionando');
})