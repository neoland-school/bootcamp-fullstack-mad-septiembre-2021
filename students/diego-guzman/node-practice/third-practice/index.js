// 1- Crear un servidor HTTP con express, que tenga una ruta GET en el path '/demo'. Esta ruta debe devolver un 200 con el texto `Mi primera ruta`. Probar el resultado con postman y con un fetch en el navegador.

// import express from 'express'
// import * as fs from 'fs/promises'

// const app = express() 
// const port = 3000
// app.use(express.json())


// app.get('/demo',(req, res)=>{
//     res.send('Mi primera ruta')
    
// })

// fetch('http://localhost:3000/').then(r=>r.text()).then(console.log)

// --------------------------------------------------

// 2- Añadir una ruta POST al servidor anterior en el path '/demo'. Esta ruta debe devolver un 200 con el texto `Mi primera ruta POST`. Probar el resultado con postman y con un fetch en el navegador.

// app.post('/demo',(req, res)=>{
//     res.send('Mi primera ruta POST')
    
// })
// app.listen(port, () => { 
//     console.log('El body de la request está en el navegador')
// });


// 3. Modificar la ruta del ejercicio 2 la posibilidad de recibir un body JSON. El cliente nos mandará un JSON  con un atributo data de tipo number ({"data": 3}). La ruta deberá mandar al usuario como respuesta `El numero es par` si el dato de entrada es par o `el numero es impar` si el dato de entrada es impar. Probar el resultado con postman y con un fetch en el navegador.

// app.get('/demo',(req, res)=>{
//     res.send('Mi primera ruta')
// })

// app.post('/demo',(req, res)=>{
//     res.send(req.body.data%2===0? 'es par' : 'es impar' )
//     console.log(req.body.data)
//     console.log(req.body.data%2===0? 'es par' : 'es impar' )

// })
// app.listen(port, () => { 
//     console.log('El body de la request está en el navegador')
// });



// 4. Modificar la ruta del ejercicio 3 para que si el numero es impar devuelva un status 400 en vez de un 200.  Probar el resultado con postman y con un fetch en el navegador.

// app.get('/demo',(req, res)=>{
//     res.send('Mi primera ruta')
// })


// app.post('/demo',(req, res)=>{
//     res.send(req.body.data%2===0? 'es par' : res.status(400).send('Bad Request') );

// })
// app.listen(port, () => { 
//     console.log('El body de la request está en el navegador')
// });


// 5. Crear una nueva ruta en la aplicación que sea de tipo POST en el path '/flight'. Esta ruta recibirá como body un JSON con el siguiente formato como ejemplo ( { "origen": 'MAD', "destino": "BCN", "fecha": "10/10/2021"}). La ruta debe escribir el vuelo del cliente en un archivo flights.json y devolver al cliente un 201.  Probar el resultado con postman y con un fetch en el navegador.

//si queremos esperar a crear el archivo para obtener respuesta podemos añadir un async a la callback async(req, res) y await res.send()


// app.get('/flight',(req, res)=>{
//     res.send('My flights')
// })

// app.post('/flight',(req, res)=>{
//     try{
//         fs.writeFile('flight.json', JSON.stringify(req.body));
//         res.status(201).send('it worked')
//     }catch(err){
//         console.err('there was an error')
//     }

// })
// app.listen(port, () => { 
//     console.log('El body de la request está en el navegador')
// });


// ------------------------------------EJ.6-------------------------------------------


import express from 'express'
import * as fs from 'fs/promises'

const app = express() 
const port = 3000
app.use(express.json())


async function readFlights(){

    try{
        const flights = await fs.readFile('flight.json');
        let allFlights = JSON.parse(flights);
        console.log(allFlights);
    }
    catch(err){
        console.error('toma error')
    }
}

app.get('/flights',(req, res)=>{
    readFlights();
    res.send('my flights')
})

app.listen(port, () => { 
        console.log('El body de la request está en el navegador')
    });

app.get('/flights/:id',(req, res)=>{
    let id = req.params.id;
    res.send(`the flight at position ${id}`);
    getFlightInfo(id);
})

async function getFlightInfo(id){

    try{
        const flights = await fs.readFile('flight.json');
        let allFlights = JSON.parse(flights);
        let selecteFlight = Object.keys(allFlights).filter(f=>allFlights[f].id===id).map(f=>allFlights[f]);
        console.log(selecteFlight);

    }catch(err){
        console.error('algo ha fallado')
    }


}
